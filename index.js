<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>⚔️ VIKINGS-MD — Connexion WhatsApp</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --gold: #c9a84c;
    --gold-light: #f0d080;
    --gold-dark: #8a6a20;
    --bg: #070608;
    --bg2: #0e0c10;
    --bg3: #15121a;
    --border: rgba(201,168,76,0.2);
    --border-glow: rgba(201,168,76,0.5);
    --text: #e8dfc8;
    --text-dim: #7a6e5a;
    --purple: #6b21a8;
    --purple-light: #a855f7;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Rajdhani', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* ── BACKGROUND EFFECTS ── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 40% at 20% 20%, rgba(107,33,168,0.15) 0%, transparent 60%),
      radial-gradient(ellipse 50% 50% at 80% 80%, rgba(201,168,76,0.08) 0%, transparent 60%),
      radial-gradient(ellipse 80% 60% at 50% 100%, rgba(15,5,30,0.9) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  /* Rune grid pattern */
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.03) 60px, rgba(201,168,76,0.03) 61px),
      repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.03) 60px, rgba(201,168,76,0.03) 61px);
    pointer-events: none;
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px 60px;
  }

  /* ── HEADER ── */
  .header {
    text-align: center;
    margin-bottom: 50px;
    animation: fadeDown 0.8s ease both;
  }

  .rune-line {
    font-size: 22px;
    letter-spacing: 18px;
    color: var(--gold-dark);
    margin-bottom: 16px;
    opacity: 0.7;
  }

  .logo-wrap {
    position: relative;
    display: inline-block;
    margin-bottom: 12px;
  }

  .logo-wrap::before, .logo-wrap::after {
    content: '⚔️';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 28px;
    opacity: 0.6;
  }
  .logo-wrap::before { right: calc(100% + 16px); }
  .logo-wrap::after  { left:  calc(100% + 16px); }

  h1 {
    font-family: 'Cinzel', serif;
    font-size: clamp(32px, 8vw, 56px);
    font-weight: 900;
    background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold-light) 50%, var(--gold-dark) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 6px;
    line-height: 1;
    text-shadow: none;
    filter: drop-shadow(0 0 30px rgba(201,168,76,0.4));
  }

  .tagline {
    font-size: 13px;
    color: var(--text-dim);
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-top: 10px;
  }

  .divider {
    width: 200px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    margin: 20px auto;
    position: relative;
  }
  .divider::after {
    content: '⚜';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--bg);
    color: var(--gold);
    padding: 0 10px;
    font-size: 16px;
  }

  /* ── MAIN CARD ── */
  .card {
    width: 100%;
    max-width: 480px;
    background: linear-gradient(145deg, var(--bg2), var(--bg3));
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 40px 36px;
    position: relative;
    animation: fadeUp 0.9s ease both;
    box-shadow:
      0 0 0 1px rgba(201,168,76,0.05),
      0 20px 60px rgba(0,0,0,0.6),
      inset 0 1px 0 rgba(201,168,76,0.1);
  }

  /* Corner ornaments */
  .card::before, .card::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: var(--gold);
    border-style: solid;
  }
  .card::before {
    top: -1px; left: -1px;
    border-width: 2px 0 0 2px;
    border-radius: 4px 0 0 0;
  }
  .card::after {
    bottom: -1px; right: -1px;
    border-width: 0 2px 2px 0;
    border-radius: 0 0 4px 0;
  }

  .card-corner-tr, .card-corner-bl {
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: var(--gold);
    border-style: solid;
  }
  .card-corner-tr {
    top: -1px; right: -1px;
    border-width: 2px 2px 0 0;
    border-radius: 0 4px 0 0;
  }
  .card-corner-bl {
    bottom: -1px; left: -1px;
    border-width: 0 0 2px 2px;
    border-radius: 0 0 0 4px;
  }

  .card-title {
    font-family: 'Cinzel', serif;
    font-size: 13px;
    color: var(--gold);
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 28px;
    opacity: 0.8;
  }

  /* ── FORM ── */
  .field-label {
    font-size: 11px;
    color: var(--text-dim);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 8px;
    display: block;
  }

  .input-wrap {
    position: relative;
    margin-bottom: 20px;
  }

  .input-wrap::before {
    content: '📱';
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    z-index: 1;
  }

  input[type="tel"] {
    width: 100%;
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--border);
    border-radius: 3px;
    padding: 15px 15px 15px 46px;
    color: var(--text);
    font-family: 'Rajdhani', sans-serif;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 2px;
    outline: none;
    transition: all 0.3s;
  }

  input[type="tel"]:focus {
    border-color: var(--gold);
    background: rgba(201,168,76,0.04);
    box-shadow: 0 0 0 3px rgba(201,168,76,0.08), 0 0 20px rgba(201,168,76,0.1);
  }

  input[type="tel"]::placeholder { color: #3a3530; letter-spacing: 1px; font-size: 14px; }

  .hint {
    font-size: 11px;
    color: var(--text-dim);
    margin-top: -14px;
    margin-bottom: 24px;
    padding-left: 2px;
  }
  .hint span { color: var(--gold-dark); }

  /* ── BUTTON ── */
  .btn-pair {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #4a1d80 0%, #7c3aed 50%, #4a1d80 100%);
    background-size: 200% 100%;
    border: 1px solid rgba(168,85,247,0.4);
    border-radius: 3px;
    color: #fff;
    font-family: 'Cinzel', serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 3px;
    cursor: pointer;
    transition: all 0.4s;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
  }

  .btn-pair::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  .btn-pair:hover::before { transform: translateX(100%); }
  .btn-pair:hover {
    background-position: right center;
    border-color: rgba(168,85,247,0.8);
    box-shadow: 0 0 30px rgba(124,58,237,0.4);
    transform: translateY(-1px);
  }
  .btn-pair:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }

  /* ── LOADER ── */
  .loader {
    display: none;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 16px 0;
    color: var(--text-dim);
    font-size: 13px;
    letter-spacing: 2px;
  }
  .loader.show { display: flex; }

  .spinner {
    width: 18px;
    height: 18px;
    border: 2px solid var(--border);
    border-top-color: var(--gold);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  /* ── ERROR ── */
  .error {
    color: #f87171;
    font-size: 13px;
    text-align: center;
    min-height: 18px;
    margin: 8px 0;
    letter-spacing: 1px;
  }

  /* ── RESULT ── */
  .result {
    display: none;
    margin-top: 24px;
    animation: fadeUp 0.5s ease both;
  }
  .result.show { display: block; }

  .result-label {
    font-size: 10px;
    color: var(--text-dim);
    letter-spacing: 4px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 12px;
  }

  .code-display {
    background: rgba(0,0,0,0.4);
    border: 1px solid var(--border-glow);
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    position: relative;
    box-shadow: 0 0 30px rgba(201,168,76,0.1), inset 0 0 30px rgba(201,168,76,0.03);
  }

  .code-value {
    font-family: 'Courier New', monospace;
    font-size: 36px;
    font-weight: 900;
    color: var(--gold-light);
    letter-spacing: 10px;
    text-shadow: 0 0 20px rgba(201,168,76,0.6);
    display: block;
    cursor: pointer;
    transition: all 0.2s;
    user-select: all;
  }
  .code-value:hover { letter-spacing: 12px; }

  .copy-hint {
    font-size: 10px;
    color: var(--text-dim);
    letter-spacing: 2px;
    margin-top: 8px;
    text-transform: uppercase;
  }

  .steps-box {
    margin-top: 20px;
    padding: 16px;
    background: rgba(255,255,255,0.02);
    border-left: 2px solid var(--gold-dark);
    border-radius: 0 3px 3px 0;
  }

  .step {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-dim);
  }
  .step-n {
    width: 22px;
    height: 22px;
    background: var(--gold-dark);
    color: var(--bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    flex-shrink: 0;
    font-family: 'Cinzel', serif;
  }

  /* ── CHANNEL BANNER ── */
  .channel-banner {
    width: 100%;
    max-width: 480px;
    margin-top: 28px;
    background: linear-gradient(135deg, rgba(201,168,76,0.08), rgba(107,33,168,0.08));
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    color: var(--text);
    transition: all 0.3s;
    animation: fadeUp 1s ease both;
    cursor: pointer;
  }
  .channel-banner:hover {
    border-color: var(--border-glow);
    background: linear-gradient(135deg, rgba(201,168,76,0.12), rgba(107,33,168,0.12));
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }

  .channel-icon {
    width: 46px;
    height: 46px;
    background: linear-gradient(135deg, var(--gold-dark), var(--gold));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    flex-shrink: 0;
    box-shadow: 0 0 20px rgba(201,168,76,0.3);
  }

  .channel-text { flex: 1; }
  .channel-text strong {
    display: block;
    font-family: 'Cinzel', serif;
    font-size: 13px;
    color: var(--gold);
    letter-spacing: 1px;
    margin-bottom: 2px;
  }
  .channel-text span {
    font-size: 12px;
    color: var(--text-dim);
    letter-spacing: 1px;
  }

  .channel-arrow {
    color: var(--gold-dark);
    font-size: 18px;
    transition: transform 0.3s;
  }
  .channel-banner:hover .channel-arrow { transform: translateX(4px); }

  /* ── FOOTER ── */
  .footer {
    margin-top: 40px;
    text-align: center;
    color: var(--text-dim);
    font-size: 11px;
    letter-spacing: 3px;
    opacity: 0.5;
    animation: fadeUp 1.1s ease both;
  }
  .footer span { color: var(--gold-dark); }

  /* ── FLOATING RUNES ── */
  .rune {
    position: fixed;
    font-size: 24px;
    opacity: 0.04;
    pointer-events: none;
    animation: floatRune linear infinite;
    z-index: 0;
    color: var(--gold);
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  @keyframes floatRune {
    0%   { transform: translateY(110vh) rotate(0deg);   opacity: 0; }
    10%  { opacity: 0.04; }
    90%  { opacity: 0.04; }
    100% { transform: translateY(-10vh) rotate(720deg); opacity: 0; }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 30px rgba(201,168,76,0.1); }
    50%       { box-shadow: 0 0 50px rgba(201,168,76,0.25); }
  }

  .code-display { animation: pulse-glow 3s ease infinite; }

  /* ── TOAST ── */
  .toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(60px);
    background: var(--gold-dark);
    color: var(--bg);
    padding: 10px 24px;
    border-radius: 3px;
    font-family: 'Cinzel', serif;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 700;
    z-index: 999;
    transition: transform 0.3s ease;
  }
  .toast.show { transform: translateX(-50%) translateY(0); }

  /* ── RESPONSIVE ── */
  @media (max-width: 520px) {
    .card { padding: 28px 20px; }
    .logo-wrap::before, .logo-wrap::after { display: none; }
    .rune-line { letter-spacing: 10px; }
  }
</style>
</head>
<body>

<!-- Floating runes -->
<div class="rune" style="left:5%;animation-duration:18s;animation-delay:0s">ᚠ</div>
<div class="rune" style="left:15%;animation-duration:22s;animation-delay:3s">ᚢ</div>
<div class="rune" style="left:30%;animation-duration:16s;animation-delay:7s">ᚦ</div>
<div class="rune" style="left:50%;animation-duration:20s;animation-delay:1s">ᚨ</div>
<div class="rune" style="left:65%;animation-duration:25s;animation-delay:5s">ᚱ</div>
<div class="rune" style="left:78%;animation-duration:19s;animation-delay:9s">ᚲ</div>
<div class="rune" style="left:88%;animation-duration:23s;animation-delay:2s">ᚷ</div>
<div class="rune" style="left:95%;animation-duration:17s;animation-delay:6s">ᚹ</div>

<div class="container">

  <!-- HEADER -->
  <header class="header">
    <div class="rune-line">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ</div>
    <div class="logo-wrap">
      <h1>VIKINGS-MD</h1>
    </div>
    <p class="tagline">Bot WhatsApp — by Mr.B TECH</p>
    <div class="divider"></div>
  </header>

  <!-- MAIN CARD -->
  <div class="card">
    <div class="card-corner-tr"></div>
    <div class="card-corner-bl"></div>

    <p class="card-title">⚔ Connexion WhatsApp ⚔</p>

    <label class="field-label" for="phone">Ton numéro WhatsApp</label>
    <div class="input-wrap">
      <input type="tel" id="phone"
        placeholder="Ex: 221775790223  (sans le +)"
        autocomplete="tel"
        inputmode="numeric"
        oninput="this.value=this.value.replace(/[^0-9]/g,'')">
    </div>
    <p class="hint">⚠️ Sans le <span>+</span> — Commence par l'indicatif pays</p>

    <button class="btn-pair" id="btnPair" onclick="getCode()">
      ⚔ OBTENIR MON CODE ⚔
    </button>

    <div class="loader" id="loader">
      <div class="spinner"></div>
      GÉNÉRATION EN COURS...
    </div>

    <div class="error" id="error"></div>

    <div class="result" id="result">
      <p class="result-label">✦ Ton code de pairage ✦</p>
      <div class="code-display" onclick="copyCode()">
        <span class="code-value" id="codeValue">----</span>
        <p class="copy-hint">👆 Clique pour copier</p>
      </div>

      <div class="steps-box">
        <div class="step">
          <div class="step-n">1</div>
          <span>Ouvre <strong>WhatsApp</strong> sur ton téléphone</span>
        </div>
        <div class="step">
          <div class="step-n">2</div>
          <span>⋮ Menu → <strong>Appareils connectés</strong></span>
        </div>
        <div class="step">
          <div class="step-n">3</div>
          <span>Appuie sur <strong>Connecter un appareil</strong></span>
        </div>
        <div class="step">
          <div class="step-n">4</div>
          <span>Entre le code ci-dessus ☝️</span>
        </div>
      </div>
    </div>
  </div>

  <!-- CHANNEL BANNER -->
  <a class="channel-banner" href="https://whatsapp.com/channel/0029Vb4OlkEEFeXcXryLHE0L" target="_blank" rel="noopener">
    <div class="channel-icon">⚔️</div>
    <div class="channel-text">
      <strong>REJOINS LA CHAÎNE Mr.B TECH</strong>
      <span>Updates • Nouvelles commandes • Support 🔥</span>
    </div>
    <div class="channel-arrow">→</div>
  </a>

  <!-- FOOTER -->
  <footer class="footer">
    © 2026 <span>Mr.B TECH</span> — VIKINGS-MD — Tous droits réservés
  </footer>
</div>

<!-- Toast -->
<div class="toast" id="toast">✅ CODE COPIÉ !</div>

<script>
  async function getCode() {
    const phone  = document.getElementById('phone').value.replace(/[^0-9]/g, '');
    const btn    = document.getElementById('btnPair');
    const loader = document.getElementById('loader');
    const error  = document.getElementById('error');
    const result = document.getElementById('result');

    error.textContent = '';

    if (!phone || phone.length < 7) {
      error.textContent = '❌ Entre un numéro WhatsApp valide !';
      shake(btn);
      return;
    }

    btn.disabled = true;
    loader.classList.add('show');
    result.classList.remove('show');

    try {
      const res = await fetch('/pair', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number: phone })
      });
      const data = await res.json();

      if (data.code) {
        document.getElementById('codeValue').textContent = data.code;
        result.classList.add('show');
        btn.textContent = '🔄 NOUVEAU CODE';
        btn.disabled = false;
      } else {
        error.textContent = data.error || '❌ Erreur — Réessaie dans 30 secondes';
        btn.disabled = false;
      }
    } catch(e) {
      error.textContent = '❌ Serveur inaccessible — Réessaie !';
      btn.disabled = false;
    }

    loader.classList.remove('show');
  }

  function copyCode() {
    const code = document.getElementById('codeValue').textContent;
    if (code === '----') return;
    navigator.clipboard.writeText(code).then(() => {
      const t = document.getElementById('toast');
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2000);
    }).catch(() => {
      // Fallback
      const el = document.createElement('textarea');
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      const t = document.getElementById('toast');
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2000);
    });
  }

  function shake(el) {
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = 'shake 0.4s ease';
    setTimeout(() => el.style.animation = '', 400);
  }

  document.getElementById('phone').addEventListener('keypress', e => {
    if (e.key === 'Enter') getCode();
  });
</script>

<style>
@keyframes shake {
  0%,100%{transform:translateX(0)}
  20%{transform:translateX(-6px)}
  40%{transform:translateX(6px)}
  60%{transform:translateX(-4px)}
  80%{transform:translateX(4px)}
}
</style>
</body>
</html>
      
