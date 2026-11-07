let currentLang = localStorage.getItem('moneeb_lang') || 'ar';
let currentFilter = 'all';
let selectedProduct = null;

function renderProducts(){
  const grid = document.getElementById('marketGrid');
  const t = translations[currentLang];
  const filtered = products.filter(p => currentFilter === 'all' || p.category === currentFilter);
  grid.innerHTML = filtered.map(p => `
    <div class="crop-card">
      <div class="crop-header"><span class="crop-title">${p.name[currentLang]}</span><span class="crop-tag">${p.grade}</span></div>
      <div>${t.available}: ${p.quantity} ${p.unit}<br>📍 ${p.location}<br>📜 ${t.cert}: ${p.certificate}</div>
      <div class="seller-info">⭐ ${p.rating} | ${p.seller} | ${p.deals} صفقة ناجحة</div>
      <div class="crop-price">${p.price} Pi / ${p.unit}</div>
      <button class="btn-trade" onclick="openOrder('${p.id}')">${t.buyBtn}</button>
    </div>
  `).join('');
}

function changeLanguage(lang){
  currentLang = lang;
  localStorage.setItem('moneeb_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('langSelector').value = lang;
  const t = translations[lang];
  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('heroDesc').textContent = t.heroDesc;
  document.getElementById('companyReg').textContent = t.company;
  document.getElementById('filterAll').textContent = t.filterAll;
  document.getElementById('filterCrop').textContent = t.filterCrop;
  document.getElementById('filterGold').textContent = t.filterGold;
  renderProducts();
}

function filterProducts(cat){
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  event.target.classList.add('active');
  renderProducts();
}

function openOrder(productId){
  selectedProduct = products.find(p=>p.id===productId);
  const t = translations[currentLang];
  document.getElementById('modalTitle').textContent = t.modalTitle + " - " + selectedProduct.name[currentLang];
  document.getElementById('qtyLabel').textContent = t.qty;
  document.getElementById('totalLabel').textContent = t.total;
  document.getElementById('confirmBtn').textContent = t.confirm;
  document.getElementById('escrowNote').textContent = t.escrowNote;
  document.getElementById('orderQty').value = 1;
  updateTotal();
  document.getElementById('orderModal').style.display = 'flex';
}

function updateTotal(){
  const qty = parseInt(document.getElementById('orderQty').value) || 1;
  document.getElementById('orderTotal').textContent = (qty * selectedProduct.price) + " Pi";
}

function closeModal(){ document.getElementById('orderModal').style.display='none'; }

function confirmOrder(){
  const qty = parseInt(document.getElementById('orderQty').value) || 1;
  const order = {
    orderId: "ORD-" + Date.now(),
    productId: selectedProduct.id,
    productName: selectedProduct.name[currentLang],
    quantity: qty,
    total: qty * selectedProduct.price,
    status: "PENDING_PAYMENT",
    escrow: "MONEEB_ESCROW_WALLET",
    createdAt: new Date().toISOString()
  };
  alert("✅ تم إنشاء عقد الضمان!\nرقم الطلب: " + order.orderId + "\nالمبلغ المحجوز: " + order.total + " Pi\nالحالة: بانتظار الدفع - في الضمان");
  console.log("NEW ESCROW ORDER:", order);
  closeModal();
}
