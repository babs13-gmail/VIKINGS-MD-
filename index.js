const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    Browsers
} = require('@whiskeysockets/baileys');

const pino  = require('pino');
const chalk = require('chalk');
const fs    = require('fs');
const path  = require('path');
const express = require('express');

try { require('dotenv').config(); } catch(e) {}

// ─── SITE DE PAIRAGE EXPRESS ───
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

let botSock = null;
const cleanNum = n => (n||'').replace(/[^0-9]/g,'');

// Servir le site HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'site.html'));
});

// Endpoint pairage
app.post('/pair', async (req, res) => {
    const number = cleanNum(req.body.number || '');
    if (!number || number.length < 7)
        return res.json({ error: '❌ Numéro invalide !' });
    if (!botSock)
        return res.json({ error: '⏳ Bot pas encore prêt. Attends 15s et réessaie.' });
    try {
        const code = await botSock.requestPairingCode(number);
        console.log(`✅ Code généré pour +${number} : ${code}`);
        return res.json({ code, number });
    } catch (err) {
        return res.json({ error: `❌ ${err.message}` });
    }
});

app.get('/status', (req, res) => res.json({ ready: !!botSock, by: 'Mr.B TECH' }));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🌐 Site de pairage : http://0.0.0.0:${PORT}\n`);
});

// ─── BAILEYS ───
async function startBaileys() {
    if (!fs.existsSync('./session')) fs.mkdirSync('./session');
    const { state, saveCreds } = await useMultiFileAuthState('./session');
    const { version }          = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        auth: state,
        browser: Browsers.ubuntu('Chrome'),
        printQRInTerminal: false,
        markOnlineOnConnect: false
    });

    sock.ev.on('creds.update', saveCreds);
    let pairingRequested = false;

    sock.ev.on('connection.update', async ({ connection, lastDisconnect }) => {

        if (!state.creds.registered && !pairingRequested) {
            pairingRequested = true;
            await new Promise(r => setTimeout(r, 4000));
            try {
                // Sur Railway, le numéro owner vient de la var d'env
                const ownerNum = cleanNum(process.env.OWNER_NUMBER || '');
                if (ownerNum) {
                    const code = await sock.requestPairingCode(ownerNum);
                    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
                    console.log(`📱 CODE OWNER : >>> ${code} <<<`);
                    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
                }
            } catch(e) {
                console.log('❌ Erreur code owner:', e.message);
                pairingRequested = false;
            }
        }

        if (connection === 'open') {
            console.log('✅ Baileys connecté — Site de pairage actif !');
            botSock = sock;
        }

        if (connection === 'close') {
            const reason = lastDisconnect?.error?.output?.statusCode;
            botSock = null;
            pairingRequested = false;
            if (reason === DisconnectReason.loggedOut) {
                try { fs.rmSync('./session', { recursive: true, force: true }); } catch(_) {}
            }
            setTimeout(startBaileys, 5000);
        }
    });
}

startBaileys();
