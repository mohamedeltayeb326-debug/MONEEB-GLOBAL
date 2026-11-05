 html>
<html lang="ar" dir="rtl" id="htmlTag">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MONEEB GLOBAL | RWA & Commodity Exchange</title>
  <style>
    :root {
      --bg-navy: #0a1128;
      --card-navy: #1c2541;
      --gold-primary: #d4af37;
      --gold-hover: #f39c12;
      --text-light: #f4f5f6;
      --text-muted: #8d99ae;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: var(--bg-navy);
      color: var(--text-light);
    }

    header {
      background-color: rgba(10, 17, 40, 0.95);
      border-bottom: 2px solid var(--gold-primary);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--gold-primary);
    }

    .header-controls {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .lang-btn {
      background-color: var(--card-navy);
      color: var(--gold-primary);
      border: 1px solid var(--gold-primary);
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }

    .container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1rem;
    }

    .hero-banner {
      text-align: center;
      padding: 2.5rem 1rem;
      background: linear-gradient(135deg, #1c2541 0%, #0a1128 100%);
      border-radius: 12px;
      border: 1px solid rgba(212, 175, 55, 0.3);
      margin-bottom: 2rem;
    }

    .hero-banner h1 { color: var(--gold-primary); margin-bottom: 0.5rem; }

    .market-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    .crop-card {
      background-color: var(--card-navy);
      border-radius: 10px;
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .crop-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
    .crop-title { font-size: 1.25rem; font-weight: bold; color: var(--text-light); }
    .crop-tag { background-color: rgba(212, 175, 55, 0.15); color: var(--gold-primary); padding: 3px 8px; border-radius: 4px; font-size: 0.8rem; }
    .crop-price { font-size: 1.3rem; font-weight: bold; color: var(--gold-primary); margin: 1rem 0; }

    .btn-trade {
      width: 100%;
      background-color: var(--gold-primary);
      color: var(--bg-navy);
      border: none;
      padding: 0.8rem;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <header>
    <div class="logo">MONEEB GLOBAL</div>
    <div class="header-controls">
      <span style="font-size: 0.85rem; color: var(--text-muted);" id="companyReg">مرخص باسم: نهاوند</span>
      <select class="lang-btn" id="langSelector" onchange="changeLanguage(this.value)">
        <option value="ar">العربية (AR)</option>
        <option value="en">English (EN)</option>
        <option value="tr">Türkçe (TR)</option>
        <option value="fr">Français (FR)</option>
        <option value="zh">中文 (ZH)</option>
        <option value="de">Deutsch (DE)</option>
        <option value="es">Español (ES)</option>
      </select>
    </div>
  </header>

  <div class="container">
    <div class="hero-banner">
      <h1 id="heroTitle">بورصة المحاصيل والسلع والأصول الحقيقية</h1>
      <p id="heroDesc">ربط التداول المباشر بعقود ضمان ذكية عبر شبكة Pi Network</p>
    </div>

    <div class="market-grid">
      <!-- كارت 1: السمسم -->
      <div class="crop-card">
        <div class="crop-header">
          <span class="crop-title" id="item1Title">السمسم الأبيض الممتاز</span>
          <span class="crop-tag">Grade A</span>
        </div>
        <div class="crop-details" id="item1Details">
          الكمية المتاحة: 500 طن<br>
          الموقع: المخازن المعتمدة<br>
          التوثيق: مفحوص برمجياً (KYB)
        </div>
        <div class="crop-price">320 Pi / Ton</div>
        <button class="btn-trade" id="btnTrade1" onclick="executeTrade('BATCH-001', 320)">شراء عبر الضمان الذكي</button>
      </div>

      <!-- كارت 2: الذهب -->
      <div class="crop-card">
        <div class="crop-header">
          <span class="crop-title" id="item2Title">سبائك ذهب نقية (999.9)</span>
          <span class="crop-tag">Gold RWA</span>
        </div>
        <div class="crop-details" id="item2Details">
          الوزن: 100 جرام<br>
          المكان: الخزينة السيادية<br>
          التوثيق: شهادة ملكية مرقمة
        </div>
        <div class="crop-price">850 Pi / Unit</div>
        <button class="btn-trade" id="btnTrade2" onclick="executeTrade('GOLD-100G', 850)">شراء عبر الضمان الذكي</button>
      </div>
    </div>
  </div>

  <script src="src/app.js"></script>
</body>
</html>
