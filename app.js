// ==========================================
// 1. DATA (Previously data.js)
// ==========================================
const T={
  en:{
    home:'Home',products:'Products',cart:'Cart',orders:'Orders',profile:'Profile',admin:'Admin',warehouse:'Warehouse',staff:'Staff',
    login:'Login',signup:'Sign Up',logout:'Logout',
    searchPlaceholder:'Search products...',
    addToCart:'Add to Cart',outOfStock:'Out of Stock',
    checkout:'Checkout',
    subtotal:'Subtotal',discount:'Discount',total:'Total',
    deliveryAddress:'Delivery Address',paymentMethod:'Payment Method',
    placeOrder:'Place Order',
    orderConfirmed:'Order Confirmed!',
    orderHistory:'Order History',
    notifications:'Notifications',
    points:'Points',redeemPoints:'Redeem Points',
    refundRequest:'Request Refund',refundReason:'Reason for Refund',
    submit:'Submit',cancel:'Cancel',back:'Back',save:'Save',
    name:'Full Name',email:'Email',password:'Password',mobile:'Mobile Number',
    creditCard:'Credit Card',bankTransfer:'Bank Transfer',cashOnDelivery:'Cash on Delivery',
    fresh:'Fresh Pork',processed:'Processed Products',all:'All',
    inStock:'In Stock',lowStock:'Low Stock',
    orderPlaced:'Order Placed',packed:'Packed',shipped:'Shipped',outForDelivery:'Out for Delivery',delivered:'Delivered',
    pointsEarned:'Points earned',appliedDiscount:'Applied discount',
    staffReview:'Staff Review',approve:'Approve',reject:'Reject',rejectionReason:'Rejection reason',
    addProduct:'Add Product',editProduct:'Edit Product',stock:'Stock',
    markPacked:'Mark as Packed',
    welcomeBack:'Welcome back',yourPoints:'Your Points',redeemNote:'100 pts = ฿10 off',
    address:'Address',city:'City',
    enterAddress:'Enter delivery address',
    qty:'Qty',price:'Price',
    pending:'Pending',approved:'Approved',rejected:'Rejected',
    within24h:'Delivery within 24h (BMR)',
    errorEmpty:'This field cannot be empty',
    errorEmail:'Please enter a valid email address',
    successOrder:'Your order has been placed successfully!',
    noOrders:'No orders yet',
    noProducts:'No products found',
    lang:'ภาษาไทย'
  },
  th:{
    home:'หน้าหลัก',products:'สินค้า',cart:'ตะกร้า',orders:'คำสั่งซื้อ',profile:'โปรไฟล์',admin:'แอดมิน',warehouse:'คลังสินค้า',staff:'เจ้าหน้าที่',
    login:'เข้าสู่ระบบ',signup:'สมัครสมาชิก',logout:'ออกจากระบบ',
    searchPlaceholder:'ค้นหาสินค้า...',
    addToCart:'เพิ่มในตะกร้า',outOfStock:'สินค้าหมด',
    checkout:'ชำระเงิน',
    subtotal:'ราคารวม',discount:'ส่วนลด',total:'ยอดรวม',
    deliveryAddress:'ที่อยู่จัดส่ง',paymentMethod:'วิธีชำระเงิน',
    placeOrder:'สั่งซื้อ',
    orderConfirmed:'ยืนยันคำสั่งซื้อแล้ว!',
    orderHistory:'ประวัติคำสั่งซื้อ',
    notifications:'การแจ้งเตือน',
    points:'คะแนน',redeemPoints:'ใช้คะแนน',
    refundRequest:'ขอคืนสินค้า',refundReason:'เหตุผลการคืน',
    submit:'ยืนยัน',cancel:'ยกเลิก',back:'กลับ',save:'บันทึก',
    name:'ชื่อ-นามสกุล',email:'อีเมล',password:'รหัสผ่าน',mobile:'เบอร์โทรศัพท์',
    creditCard:'บัตรเครดิต',bankTransfer:'โอนเงิน',cashOnDelivery:'เก็บเงินปลายทาง',
    fresh:'หมูสด',processed:'หมูแปรรูป',all:'ทั้งหมด',
    inStock:'มีสินค้า',lowStock:'เหลือน้อย',
    orderPlaced:'รับออเดอร์',packed:'แพ็คสินค้า',shipped:'จัดส่ง',outForDelivery:'กำลังจัดส่ง',delivered:'ส่งแล้ว',
    pointsEarned:'คะแนนที่ได้',appliedDiscount:'ส่วนลดที่ใช้',
    staffReview:'ตรวจสอบการคืน',approve:'อนุมัติ',reject:'ปฏิเสธ',rejectionReason:'เหตุผลการปฏิเสธ',
    addProduct:'เพิ่มสินค้า',editProduct:'แก้ไขสินค้า',stock:'สต็อก',
    markPacked:'แพ็คแล้ว',
    welcomeBack:'ยินดีต้อนรับ',yourPoints:'คะแนนของคุณ',redeemNote:'100 คะแนน = ลด ฿10',
    address:'ที่อยู่',city:'เมือง',
    enterAddress:'กรอกที่อยู่จัดส่ง',
    qty:'จำนวน',price:'ราคา',
    pending:'รอดำเนินการ',approved:'อนุมัติ',rejected:'ปฏิเสธ',
    within24h:'จัดส่งภายใน 24 ชม. (กทม.)',
    errorEmpty:'กรุณากรอกข้อมูล',
    errorEmail:'กรุณากรอกอีเมลที่ถูกต้อง',
    successOrder:'สั่งซื้อสำเร็จ!',
    noOrders:'ยังไม่มีคำสั่งซื้อ',
    noProducts:'ไม่พบสินค้า',
    lang:'English'
  }
};

const PRODUCTS=[
  {id:1,name:'Premium Pork Belly',nameTh:'หมูสามชั้น',category:'fresh',price:180,unit:'500g',stock:50,image:'https://www.pitchameat.com/wp-content/uploads/2023/10/Mainsite-2.jpg',desc:'Fresh premium pork belly, perfect for grilling or braising.',descTh:'หมูสามชั้นสดคุณภาพสูง เหมาะสำหรับปิ้งย่างหรือพะโล้'},
  {id:2,name:'Pork Shoulder',nameTh:'ไหล่หมู',category:'fresh',price:140,unit:'500g',stock:40,image:'https://www.themeatman.co.uk/cdn/shop/files/rsz_porkshoulder2023.jpg?v=1695810349',desc:'Tender pork shoulder, great for slow cooking.',descTh:'ไหล่หมูนุ่ม เหมาะสำหรับปรุงด้วยไฟอ่อน'},
  {id:3,name:'Pork Ribs',nameTh:'ซี่โครงหมู',category:'fresh',price:220,unit:'500g',stock:30,image:'https://beaverbrookranch.com/wp-content/uploads/2022/02/shutterstock_373844560.jpg',desc:'Meaty pork ribs with rich flavor.',descTh:'ซี่โครงหมูเนื้อแน่น รสชาติเข้มข้น'},
  {id:4,name:'Ground Pork',nameTh:'หมูบด',category:'fresh',price:90,unit:'500g',stock:60,image:'https://justcook.butcherbox.com/wp-content/uploads/2019/06/ground-pork.jpg',desc:'Freshly ground pork for all recipes.',descTh:'หมูบดสดสำหรับทุกเมนู'},
  {id:5,name:'Pork Loin',nameTh:'สันในหมู',category:'fresh',price:200,unit:'500g',stock:25,image:'https://www.themeatman.co.uk/cdn/shop/files/porkjoint2023_2048x.jpg?v=1696857880',desc:'Premium lean pork loin cuts.',descTh:'สันในหมูไม่ติดมัน คุณภาพพรีเมียม'},
  {id:6,name:'Pork Liver',nameTh:'ตับหมู',category:'fresh',price:80,unit:'500g',stock:5,image:'https://theblackfarmer.com/cdn/shop/files/raw-Pork-Liver.jpg?v=1775647038&width=500',desc:'Fresh pork liver, rich in nutrients.',descTh:'ตับหมูสด อุดมด้วยสารอาหาร'},
  {id:7,name:'Smoked Bacon',nameTh:'เบคอนรมควัน',category:'processed',price:120,unit:'300g',stock:45,image:'https://smokedmeats.com/cdn/shop/products/BCbacon__52963.jpg?v=1664301615&width=1200',desc:'Premium wood-smoked bacon with a perfect balance of meat and fat. Crisp and flavorful.',descTh:'เบคอนรมควันไม้พรีเมียม สัดส่วนเนื้อและไขมันกำลังดี กรอบอร่อยรสชาติเข้มข้น'},
  {id:8,name:'Crispy Pork',nameTh:'หมูกรอบ',category:'processed',price:160,unit:'300g',stock:35,image:'https://kwokspots.com/wp-content/uploads/2024/08/crispy-pork-bellyl-2.png',desc:'Golden crispy roast pork.',descTh:'หมูกรอบสำเร็จรูป'},
  {id:9,name:'Classic Sausage',nameTh:'ไส้กรอกหมูคลาสสิก',category:'processed',price:85,unit:'200g',stock:28,image:'https://media.bangkok.sloanes.co.th/spio/ret_img,q_cdnize,to_auto,s_webp:avif/bangkok.sloanes.co.th/wp-content/uploads/2025/06/tmpyfyhm_br.png',desc:'Classic pork sausage, seasoned with herbs and spices. Great for breakfast or grilling.',descTh:'ไส้กรอกหมูสูตรต้นตำรับ ปรุงรสด้วยเครื่องเทศ เหมาะสำหรับมื้อเช้าหรือปิ้งย่าง'},
  {id:10,name:'Premium Ham',nameTh:'แฮมหมูพรีเมียม',category:'processed',price:150,unit:'200g',stock:25,image:'https://floridapremiumbeef.com/cdn/shop/files/PorkHam.png?format=webp&v=1763562052&width=1946',desc:'Tender, slow-cooked pork ham with a touch of sweetness. Perfect for sandwiches or salads.',descTh:'แฮมหมูเนื้อนุ่ม ปรุงสุกอย่างพิถีพิถัน รสชาติกลมกล่อม เหมาะสำหรับแซนด์วิชหรือสลัด'}
];

// ==========================================
// 2. STATE & HELPERS (Previously state.js)
// ==========================================
const state = window.state = {
  lang:'en',
  page:'home',
  user:null,
  users:[
    {id:'u-admin',name:'Admin',email:'admin@jubjub.com',password:'admin',role:'admin',points:0},
    {id:'u-warehouse',name:'Warehouse Staff',email:'warehouse@jubjub.com',password:'warehouse',role:'warehouse',points:0},
    {id:'u-staff',name:'Customer Service',email:'staff@jubjub.com',password:'staff',role:'staff',points:0},
    {id:'u-demo',name:'Demo Customer',email:'customer@demo.com',password:'demo',role:'customer',points:350},
  ],
  products:[...PRODUCTS],
  cart:[],
  orders:[
    {id:'ORD-2024001',userId:'u-demo',items:[{productId:1,qty:2,price:180},{productId:7,qty:1,price:120}],total:480,address:'123 Sukhumvit Rd, Bangkok',city:'Bangkok',payment:'creditCard',status:'delivered',date:'2024-01-10',pointsEarned:48,refund:null,trackingStatus:4},
    {id:'ORD-2024002',userId:'u-demo',items:[{productId:3,qty:1,price:220},{productId:8,qty:2,price:160}],total:540,address:'45 Silom Rd, Bangkok',city:'Bangkok',payment:'bankTransfer',status:'shipped',date:'2024-01-14',pointsEarned:54,refund:null,trackingStatus:2},
  ],
  refunds:[],
  notifications:[
    {id:'n1',userId:'u-demo',msg:'Your order ORD-2024002 has been shipped!',msgTh:'ออเดอร์ ORD-2024002 ถูกจัดส่งแล้ว!',read:false,date:'2024-01-14'},
    {id:'n2',userId:'u-demo',msg:'Your order ORD-2024001 has been delivered!',msgTh:'ออเดอร์ ORD-2024001 ถูกส่งแล้ว!',read:true,date:'2024-01-11'},
  ],
  modal:null,
  searchQ:'',
  productFilter:'all',
  checkoutStep:0,
  checkoutData:{address:'',city:'Bangkok',payment:'cashOnDelivery',usePoints:false},
  orderConfirmed:null,
};

function t(k){return T[state.lang][k]||k}
function pname(p){return state.lang==='th'?(p.nameTh||p.name):p.name}
function pdesc(p){return state.lang==='th'?(p.descTh||p.desc):p.desc}
function getUnread(){if(!state.user)return 0;return state.notifications.filter(n=>n.userId===state.user.id&&!n.read).length;}
function getCartCount(){return state.cart.reduce((a,c)=>a+c.qty,0)}
function getCartTotal(){return state.cart.reduce((a,c)=>{const p=state.products.find(x=>x.id===c.productId);return a+(p?p.price*c.qty:0);},0);}
function getUserPoints(){if(!state.user)return 0;const u=state.users.find(x=>x.id===state.user.id);return u?u.points:0;}
function getOrdersForUser(uid){return state.orders.filter(o=>o.userId===uid)}

// ==========================================
// 3. ACTIONS (Previously actions.js)
// ==========================================
function navigate(page){state.page=page;state.modal=null;render()}
function setLang(){state.lang=state.lang==='en'?'th':'en';render()}
function addToCart(pid){const idx=state.cart.findIndex(c=>c.productId===pid);if(idx>=0)state.cart[idx].qty++;else state.cart.push({productId:pid,qty:1});render();}
function updateQty(pid,delta){const idx=state.cart.findIndex(c=>c.productId===pid);if(idx<0)return;state.cart[idx].qty+=delta;if(state.cart[idx].qty<=0)state.cart.splice(idx,1);render();}
function removeFromCart(pid){state.cart=state.cart.filter(c=>c.productId!==pid);render();}
function openModal(type,data){state.modal={type,data};render()}
function closeModal(){state.modal=null;render()}

function doLogin(email,password){
  const u=state.users.find(x=>x.email===email&&x.password===password);
  if(u){
    state.user=u;state.modal=null;
    if(u.role==='admin')state.page='admin';
    else if(u.role==='warehouse')state.page='warehouse';
    else if(u.role==='staff')state.page='staffpanel';
    else state.page='home';
    render();
  } else {
    document.getElementById('login-error').style.display='block';
  }
}
function doSignup(name,email,mobile,password){
  if(!name||!email||!password){alert(t('errorEmpty'));return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){alert(t('errorEmail'));return;}
  if(state.users.find(u=>u.email===email)){alert('Email already registered');return;}
  const u={id:'u'+Date.now(),name,email,mobile,password,role:'customer',points:0};
  state.users.push(u);state.user=u;state.modal=null;navigate('home');
}
function doLogout(){state.user=null;state.cart=[];state.page='home';render();}
function generateOrderId(){return 'ORD-'+Date.now().toString().slice(-7);}

function placeOrder(){
  if(!state.user)return;
  const d=state.checkoutData;
  if(!d.address){alert(t('errorEmpty'));return;}
  const sub=getCartTotal();
  let disc=0,ptsUsed=0;
  if(d.usePoints&&getUserPoints()>0){
    ptsUsed=Math.min(getUserPoints(),Math.floor(sub/10)*10);
    disc=ptsUsed/10;
  }
  const total=Math.max(0,sub-disc);
  const ptEarned=Math.floor(total/10);
  const oid=generateOrderId();
  const isBangkok=['Bangkok','กรุงเทพ','กรุงเทพฯ'].some(c=>d.city.toLowerCase().includes(c.toLowerCase()));
  const ord={id:oid,userId:state.user.id,items:state.cart.map(c=>({productId:c.productId,qty:c.qty,price:state.products.find(p=>p.id===c.productId)?.price||0})),total,sub,disc,ptsUsed,address:d.address,city:d.city,payment:d.payment,status:'placed',date:new Date().toISOString().slice(0,10),pointsEarned:ptEarned,refund:null,trackingStatus:0,isBangkok};
  state.orders.push(ord);
  const u=state.users.find(x=>x.id===state.user.id);
  if(u){u.points=u.points-ptsUsed+ptEarned;state.user=u;}
  state.notifications.push({id:'n'+Date.now(),userId:state.user.id,msg:`Order ${oid} placed successfully!`,msgTh:`สั่งซื้อ ${oid} สำเร็จ!`,read:false,date:new Date().toISOString().slice(0,10)});
  state.cart=[];state.checkoutData={address:'',city:'Bangkok',payment:'cashOnDelivery',usePoints:false};state.checkoutStep=0;state.orderConfirmed=ord;render();
}

function submitRefund(orderId,reason){
  if(!reason||reason===': '){alert(t('errorEmpty'));return;}
  state.refunds.push({id:'REF-'+Date.now(),orderId,userId:state.user.id,reason,status:'pending',rejectionReason:'',date:new Date().toISOString().slice(0,10)});
  closeModal();
}
function reviewRefund(refId,approve,reason){
  const r=state.refunds.find(x=>x.id===refId);if(!r)return;
  r.status=approve?'approved':'rejected';
  if(!approve)r.rejectionReason=reason||'Policy violation';
  if(approve){
    const ord=state.orders.find(o=>o.id===r.orderId);
    if(ord){const u=state.users.find(x=>x.id===ord.userId);if(u)u.points=Math.max(0,u.points-ord.pointsEarned);}
    state.notifications.push({id:'n'+Date.now(),userId:r.userId,msg:`Refund ${r.id} approved.`,msgTh:`การคืน ${r.id} ได้รับการอนุมัติ`,read:false,date:new Date().toISOString().slice(0,10)});
  } else {
    state.notifications.push({id:'n'+Date.now(),userId:r.userId,msg:`Refund ${r.id} rejected: ${r.rejectionReason}`,msgTh:`การคืน ${r.id} ถูกปฏิเสธ: ${r.rejectionReason}`,read:false,date:new Date().toISOString().slice(0,10)});
  }
  render();
}
function markPacked(ordId){
  const o=state.orders.find(x=>x.id===ordId);
  if(o){o.status='packed';o.trackingStatus=1;state.notifications.push({id:'n'+Date.now(),userId:o.userId,msg:`Order ${ordId} has been packed and ready for shipment.`,msgTh:`ออเดอร์ ${ordId} ถูกแพ็คแล้ว`,read:false,date:new Date().toISOString().slice(0,10)});render();}
}

function saveProduct(id,isEdit){
  const prod={
    id,
    name:document.getElementById('pf-name').value,
    nameTh:document.getElementById('pf-nameth').value,
    category:document.getElementById('pf-cat').value,
    price:parseInt(document.getElementById('pf-price').value)||0,
    unit:document.getElementById('pf-unit').value,
    stock:parseInt(document.getElementById('pf-stock').value)||0,
    image:document.getElementById('pf-image').value || 'https://via.placeholder.com/300x200?text=No+Image', // Saves the image URL
    desc:document.getElementById('pf-desc').value,
    descTh:document.getElementById('pf-descth').value
  };
  if(isEdit){const idx=state.products.findIndex(p=>p.id===id);if(idx>=0)state.products[idx]=prod;}
  else{state.products.push(prod);}
  closeModal();
}

function doSearch(val) {
  state.searchQ = val;
  render(); // Redraw the page with the filtered items
  
  // Instantly find the newly drawn search bar and put the cursor back inside it
  const input = document.getElementById('search-input');
  if (input) {
    input.focus();
    // Move the text cursor to the very end of the word
    const textLength = input.value.length;
    input.setSelectionRange(textLength, textLength);
  }
}
// ==========================================
// 4. RENDERERS (Previously renderers.js)
// ==========================================
function renderNav(){
  const unread=getUnread(),cartC=getCartCount(),role=state.user?.role||'guest';
  let links='';
  if(role==='customer'||role==='guest'){
    links+=`<button class="nav-btn${state.page==='home'?' active':''}" onclick="navigate('home')">${t('home')}</button>`;
    links+=`<button class="nav-btn${state.page==='products'?' active':''}" onclick="navigate('products')">${t('products')}</button>`;
    if(role==='customer'){
      links+=`<button class="nav-btn${state.page==='orders'?' active':''}" onclick="navigate('orders')">${t('orders')}</button>`;
      links+=`<button class="nav-btn${state.page==='profile'?' active':''}" onclick="navigate('profile')">${t('profile')}</button>`;
    }
  }
  if(role==='admin'){links+=`<button class="nav-btn${state.page==='admin'?' active':''}" onclick="navigate('admin')">${t('admin')}</button><button class="nav-btn${state.page==='products'?' active':''}" onclick="navigate('products')">${t('products')}</button>`;}
  if(role==='warehouse'){links+=`<button class="nav-btn${state.page==='warehouse'?' active':''}" onclick="navigate('warehouse')">${t('warehouse')}</button>`;}
  if(role==='staff'){links+=`<button class="nav-btn${state.page==='staffpanel'?' active':''}" onclick="navigate('staffpanel')">${t('staff')}</button>`;}

  let right=`<button class="lang-toggle btn" onclick="setLang()">${t('lang')}</button>`;
  if(role==='customer'){
    right+=`<button class="icon-btn" onclick="navigate('notifications')">🔔${unread>0?`<span class="badge-count">${unread}</span>`:''}</button>`;
    right+=`<button class="icon-btn" onclick="navigate('cart')">🛒${cartC>0?`<span class="badge-count">${cartC}</span>`:''}</button>`;
  }
  if(state.user){
    right+=`<span style="color:rgba(255,255,255,.8);font-size:13px;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${state.user.name}</span>`;
    right+=`<button class="nav-btn" onclick="doLogout()" style="font-size:13px">${t('logout')}</button>`;
  } else {
    right+=`<button class="btn btn-outline" style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.4);font-size:13px;padding:6px 14px" onclick="openModal('login')">${t('login')}</button>`;
    right+=`<button class="btn btn-primary" style="font-size:13px;padding:6px 14px;background:#fff;color:var(--primary)" onclick="openModal('signup')">${t('signup')}</button>`;
  }
  return `<nav><div class="logo">🐷 JubJub Sukorn</div><div class="nav-links">${links}</div><div class="nav-right">${right}</div></nav>`;
}

function renderHome(){
  const featured=state.products.filter(p=>p.stock>0).slice(0,4);
  const freshCount=state.products.filter(p=>p.category==='fresh').length;
  const processedCount=state.products.filter(p=>p.category==='processed').length;
  return `<div class="page">
    <div class="hero">
      <div class="hero-grid">
        <div>
          <div class="hero-kicker">${state.lang==='th'?'คัดสดทุกวัน':'Curated Daily Fresh Cuts'}</div>
          <h1>${state.lang==='th'?'เนื้อหมูสดใหม่คัดเกรดพรีเมียม พร้อมจัดส่งให้ถึงหน้าบ้านคุณ':'Premium fresh pork, delivered right to your doorstep.'}</h1>
          <p>${state.lang==='th'?'เลือกหมูสดและหมูแปรรูปในดีไซน์ที่สะอาด อบอุ่น และใช้ง่าย พร้อมจัดส่งถึงบ้านอย่างมั่นใจ':'Browse fresh cuts and ready-to-cook favorites in a warmer, cleaner storefront designed to feel premium and easy to use.'}</p>
          <div class="hero-actions">
            <button class="btn" style="background:#fff;color:var(--primary);font-weight:800" onclick="navigate('products')">${t('products')} →</button>
            <span class="pill-note">🚚 ${t('within24h')}</span>
          </div>
        </div>
        <div class="hero-panel">
          <div style="font-size:13px;opacity:.8;margin-bottom:8px">${state.lang==='th'?'ภาพรวมร้าน':'Store Snapshot'}</div>
          <div style="font-size:26px;font-weight:900;line-height:1.15">${state.lang==='th'?'สด สะอาด พร้อมปรุง':'Fresh, neat, and ready to cook'}</div>
          <div class="hero-stat-grid">
            <div class="hero-stat"><strong>${state.products.length}</strong><span>${t('products')}</span></div>
            <div class="hero-stat"><strong>${freshCount}</strong><span>${t('fresh')}</span></div>
            <div class="hero-stat"><strong>${processedCount}</strong><span>${t('processed')}</span></div>
            <div class="hero-stat"><strong>${state.orders.length}</strong><span>${t('orders')}</span></div>
          </div>
        </div>
      </div>
    </div>
    ${state.user?.role==='customer'?`
    <div class="points-banner">
      <div>
        <div style="font-size:12px;opacity:.85">${t('yourPoints')}</div>
        <div style="font-size:28px;font-weight:700">${getUserPoints()} <span style="font-size:14px;opacity:.8">${t('points')}</span></div>
        <div style="font-size:12px;opacity:.75">${t('redeemNote')}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:12px;opacity:.85">${t('welcomeBack')},</div>
        <div style="font-size:16px;font-weight:600">${state.user.name}</div>
        <button class="btn" style="background:rgba(255,255,255,.22);color:#fff;margin-top:8px;padding:8px 16px;font-size:13px" onclick="navigate('cart')">${t('cart')} (${getCartCount()}) →</button>
      </div>
    </div>`:''}
    <div class="feature-strip">
      <div class="feature-chip">
        <strong>${state.lang==='th'?'✨คุณภาพพรีเมียม':'✨Premium Quality'}</strong>
        <span>${state.lang==='th'?'คัดสรรเนื้อหมูสดใหม่ทุกวัน เพื่อรับประกันรสชาติที่ดีที่สุดสำหรับมื้ออาหารของคุณ':'Hand-selected, daily fresh pork cuts to guarantee the best taste for your meals.'}</span>
      </div>
      <div class="feature-chip">
        <strong>${state.lang==='th'?'✅สะอาด ปลอดภัย 100%':'✅100% Safe & Clean'}</strong>
        <span>${state.lang==='th'?'ผ่านกระบวนการผลิตในสภาพแวดล้อมที่ถูกสุขลักษณะ ได้มาตรฐานความปลอดภัยสูงสุด':'Processed in a highly sanitized environment meeting the highest food safety standards.'}</span>
      </div>
      <div class="feature-chip">
        <strong>${state.lang==='th'?'🚚จัดส่งรวดเร็ว':'🚚Fast Delivery'}</strong>
        <span>${state.lang==='th'?'บริการจัดส่งที่รวดเร็วและมั่นใจได้ ส่งตรงถึงหน้าบ้านคุณภายใน 24 ชั่วโมงในพื้นที่กทม.':'Quick and reliable delivery directly to your door within 24 hours in the Bangkok area.'}</span>
      </div>
    </div>
    <div class="surface-head">
      <div>
        <div class="section-title">${state.lang==='th'?'สินค้าแนะนำ':'Featured Products'}</div>
        <p>${state.lang==='th'?'พร้อมจัดส่งและเลือกดูได้ทันที':'Ready to browse and quick to add to cart.'}</p>
      </div>
    </div>
    <div class="collection-shell">
      <div class="product-grid">${featured.map(p=>renderProductCard(p)).join('')}</div>
    </div>
    <div style="text-align:center;margin-top:20px">
      <button class="btn btn-outline" onclick="navigate('products')">${state.lang==='th'?'ดูสินค้าทั้งหมด':'View All Products'} →</button>
    </div>
  </div>`;
}

function renderProductCard(p){
  const inCart=state.cart.find(c=>c.productId===p.id);
  const stockBadge=p.stock===0?`<span class="badge badge-red">${t('outOfStock')}</span>`:p.stock<=5?`<span class="badge badge-orange">${t('lowStock')}</span>`:`<span class="badge badge-green">${t('inStock')}</span>`;
  return `<div class="product-card" onclick="openModal('product',{id:${p.id}})" style="cursor:pointer">
    <img class="product-img" src="${p.image}" alt="${p.name}">
    <div class="product-info">
      <div class="product-name">${pname(p)}</div>
      <div class="product-desc">${pdesc(p)}</div>
      <div class="product-meta"><div style="display:flex;align-items:end;gap:6px"><span class="product-price">฿${p.price}</span><span class="product-unit">/${p.unit}</span></div>${stockBadge}</div>
      ${state.user?.role==='customer'?`<button class="btn btn-primary btn-sm" style="width:100%;margin-top:8px" onclick="event.stopPropagation();addToCart(${p.id})" ${p.stock===0?'disabled':''}>${p.stock===0?t('outOfStock'):inCart?`${t('addToCart')} (${inCart.qty})`:t('addToCart')}</button>`:''}
    </div>
  </div>`;
}

function renderProducts(){
  const q=state.searchQ.toLowerCase();
  const f=state.productFilter;
  let prods=state.products.filter(p=>pname(p).toLowerCase().includes(q)||p.name.toLowerCase().includes(q)).filter(p=>f==='all'||p.category===f);
  return `<div class="page">
    <div class="surface-head">
      <div>
        <div class="section-title">${t('products')}</div>
        <p>${state.lang==='th'?'เลือกสินค้าจากหมูสดและหมูแปรรูปในเลย์เอาต์ใหม่ที่อ่านง่ายขึ้น':'Browse fresh cuts and processed items in a cleaner catalog layout.'}</p>
      </div>
      <span class="pill-note">🥩 ${prods.length} ${state.lang==='th'?'รายการ':'items'}</span>
    </div>
    <div class="search-bar"><input id="search-input" placeholder="${t('searchPlaceholder')}" value="${state.searchQ}" oninput="doSearch(this.value)"/></div>
    <div class="tab-bar">
      <button class="tab${state.productFilter==='all'?' active':''}" onclick="state.productFilter='all';render()">${t('all')}</button>
      <button class="tab${state.productFilter==='fresh'?' active':''}" onclick="state.productFilter='fresh';render()">${t('fresh')}</button>
      <button class="tab${state.productFilter==='processed'?' active':''}" onclick="state.productFilter='processed';render()">${t('processed')}</button>
    </div>
    ${prods.length===0?`<div class="empty-state"><div class="icon">🔍</div>${t('noProducts')}</div>`:`<div class="collection-shell"><div class="product-grid">${prods.map(p=>renderProductCard(p)).join('')}</div></div>`}
  </div>`;
}

function renderProductModal(p){
  const stockBadge=p.stock===0?`<span class="badge badge-red">${t('outOfStock')}</span>`:p.stock<=5?`<span class="badge badge-orange">${t('lowStock')} (${p.stock} left)</span>`:`<span class="badge badge-green">${t('inStock')}</span>`;
  const inCart=state.cart.find(c=>c.productId===p.id);
  return `<div class="modal-header"><span style="font-size:18px">${pname(p)}</span><button class="btn btn-ghost" onclick="closeModal()">✕</button></div>
  <div class="modal-body">
    <img src="${p.image}" style="width:100%;height:220px;object-fit:cover;border-radius:14px;margin-bottom:14px;">
    <p style="color:var(--muted);font-size:14px;margin-bottom:12px">${pdesc(p)}</p>
    <table style="width:100%;font-size:14px">
      <tr><td style="color:var(--muted);padding:4px 0">${t('price')}</td><td style="font-weight:700;color:var(--primary)">฿${p.price} / ${p.unit}</td></tr>
      <tr><td style="color:var(--muted);padding:4px 0">${t('stock')}</td><td>${stockBadge}</td></tr>
      <tr><td style="color:var(--muted);padding:4px 0">Category</td><td><span class="badge badge-blue">${p.category==='fresh'?t('fresh'):t('processed')}</span></td></tr>
    </table>
  </div>
  <div class="modal-footer">
    <button class="btn btn-outline" onclick="closeModal()">${t('back')}</button>
    ${state.user?.role==='customer'?`<button class="btn btn-primary" onclick="addToCart(${p.id});closeModal()" ${p.stock===0?'disabled':''}>${p.stock===0?t('outOfStock'):inCart?`${t('addToCart')} (${inCart.qty})`:t('addToCart')}</button>`:''}
  </div>`;
}

function renderCart(){
  // Keep the first parts of your cart render the same (Login check and Success view)
  if(!state.user||state.user.role!=='customer')return `<div class="page"><div class="empty-state"><div class="icon">🔒</div>Please <a href="#" onclick="openModal('login')" style="color:var(--primary)">login</a> to view cart</div></div>`;
  if(state.orderConfirmed){
    const o=state.orderConfirmed;
    return `<div class="page"><div class="card" style="padding:28px;text-align:center;margin-bottom:20px">
      <div style="font-size:48px;margin-bottom:12px">✅</div>
      <h2 style="color:var(--success);margin-bottom:8px">${t('orderConfirmed')}</h2>
      <p style="color:var(--muted);font-size:14px;margin-bottom:16px">${t('successOrder')}</p>
      <div style="background:#f5f4f0;border-radius:8px;padding:14px;text-align:left;margin-bottom:16px">
        <div style="font-weight:600;margin-bottom:8px">Order ID: <span style="color:var(--primary)">${o.id}</span></div>
        <div style="font-size:13px;color:var(--muted)">Total: ฿${o.total} &nbsp;|&nbsp; ${t('pointsEarned')}: ${o.pointsEarned} pts</div>
        ${o.isBangkok?`<div style="margin-top:6px"><span class="badge badge-green">🚀 ${t('within24h')}</span></div>`:''}
      </div>
      <button class="btn btn-primary" onclick="state.orderConfirmed=null;navigate('orders')">${t('orderHistory')}</button>
    </div></div>`;
  }
  if(state.checkoutStep>0)return renderCheckout();
  if(state.cart.length===0)return `<div class="page"><div class="empty-state"><div class="icon">🛒</div>${state.lang==='th'?'ตะกร้าว่างเปล่า':'Your cart is empty'}</div><div style="text-align:center"><button class="btn btn-primary" onclick="navigate('products')">${t('products')}</button></div></div>`;
  const sub=getCartTotal();
  
  // Here we replace the emoji span with an img tag for the cart items
  return `<div class="page">
    <div class="section-title">${t('cart')}</div>
    <div class="card" style="padding:0 16px;margin-bottom:16px">
      ${state.cart.map(c=>{const p=state.products.find(x=>x.id===c.productId);if(!p)return '';return `<div class="cart-item"><img src="${p.image}" style="width:54px;height:54px;border-radius:8px;object-fit:cover"><div style="flex:1"><div style="font-weight:600;font-size:14px">${pname(p)}</div><div style="color:var(--muted);font-size:13px">฿${p.price} / ${p.unit}</div></div><div class="qty-ctrl"><button class="qty-btn" onclick="updateQty(${p.id},-1)">−</button><span style="font-weight:600;min-width:20px;text-align:center">${c.qty}</span><button class="qty-btn" onclick="updateQty(${p.id},1)">+</button></div><div style="font-weight:700;color:var(--primary);min-width:60px;text-align:right">฿${p.price*c.qty}</div><button class="btn btn-ghost btn-sm" onclick="removeFromCart(${p.id})" style="color:#c0392b">✕</button></div>`;}).join('')}
    </div>
    <div class="card" style="padding:16px;margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;font-size:15px;margin-bottom:8px"><span>${t('subtotal')}</span><strong>฿${sub}</strong></div>
      <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:700;color:var(--primary)"><span>${t('total')}</span><span>฿${sub}</span></div>
    </div>
    <button class="btn btn-primary" style="width:100%;padding:12px;font-size:16px" onclick="state.checkoutStep=1;render()">${t('checkout')} →</button>
  </div>`;
}

function renderCheckout(){
  const step=state.checkoutStep,sub=getCartTotal(),pts=getUserPoints();
  const ptsToUse=state.checkoutData.usePoints?Math.min(pts,Math.floor(sub/10)*10):0;
  const disc=ptsToUse/10,total=Math.max(0,sub-disc);
  return `<div class="page">
    <div class="section-title">${t('checkout')}</div>
    <div class="checkout-steps">
      <div class="ck-step${step>=1?' active':''}">1. ${t('deliveryAddress')}</div>
      <div class="ck-step${step>=2?' active':''}">2. ${t('paymentMethod')}</div>
      <div class="ck-step${step>=3?' active':''}">3. ${state.lang==='th'?'ยืนยัน':'Confirm'}</div>
    </div>
    ${step===1?`<div class="card" style="padding:20px;margin-bottom:16px">
      <div class="form-group"><label class="form-label">${t('address')}</label><input value="${state.checkoutData.address}" oninput="state.checkoutData.address=this.value" placeholder="${t('enterAddress')}"/></div>
      <div class="form-group"><label class="form-label">${t('city')}</label><select onchange="state.checkoutData.city=this.value"><option${state.checkoutData.city==='Bangkok'?' selected':''}>Bangkok</option><option${state.checkoutData.city==='กรุงเทพฯ'?' selected':''}>กรุงเทพฯ</option><option${state.checkoutData.city==='Chiang Mai'?' selected':''}>Chiang Mai</option><option${state.checkoutData.city==='Phuket'?' selected':''}>Phuket</option><option${state.checkoutData.city==='Pattaya'?' selected':''}>Pattaya</option></select></div>
      ${['Bangkok','กรุงเทพฯ'].includes(state.checkoutData.city)?`<div><span class="badge badge-green">🚀 ${t('within24h')}</span></div>`:''}
    </div>
    <div style="display:flex;gap:10px"><button class="btn btn-outline" onclick="state.checkoutStep=0;render()">${t('back')}</button><button class="btn btn-primary" style="flex:1" onclick="if(!state.checkoutData.address){alert(t('errorEmpty'))}else{state.checkoutStep=2;render()}">${state.lang==='th'?'ถัดไป':'Next'} →</button></div>`:''}
    ${step===2?`<div class="card" style="padding:20px;margin-bottom:16px">
      <div class="form-group"><label class="form-label">${t('paymentMethod')}</label>
        <div style="display:flex;flex-direction:column;gap:10px">${['creditCard','bankTransfer','cashOnDelivery'].map(pm=>`<label style="display:flex;align-items:center;gap:10px;padding:12px;border:1.5px solid ${state.checkoutData.payment===pm?'var(--primary)':'var(--border)'};border-radius:8px;cursor:pointer" onclick="state.checkoutData.payment='${pm}';render()"><span style="font-size:20px">${pm==='creditCard'?'💳':pm==='bankTransfer'?'🏦':'💵'}</span><span style="font-weight:${state.checkoutData.payment===pm?'600':'400'}">${t(pm)}</span></label>`).join('')}</div>
      </div>
      ${pts>0?`<div style="margin-top:16px;padding:12px;background:#fff8f0;border-radius:8px;border:1px solid #f5cba7"><label style="display:flex;align-items:center;gap:10px;cursor:pointer"><input type="checkbox" ${state.checkoutData.usePoints?'checked':''} onchange="state.checkoutData.usePoints=this.checked;render()" style="width:auto"/><span style="font-size:14px">${t('redeemPoints')} (${pts} pts = ฿${Math.floor(pts/10)} off)</span></label>${state.checkoutData.usePoints?`<div style="font-size:13px;color:var(--success);margin-top:6px">✓ ${t('appliedDiscount')}: ฿${disc}</div>`:''}</div>`:''}
    </div>
    <div style="display:flex;gap:10px"><button class="btn btn-outline" onclick="state.checkoutStep=1;render()">${t('back')}</button><button class="btn btn-primary" style="flex:1" onclick="state.checkoutStep=3;render()">${state.lang==='th'?'ถัดไป':'Next'} →</button></div>`:''}
    ${step===3?`<div class="card" style="padding:20px;margin-bottom:16px">
      <div style="font-weight:600;margin-bottom:12px">${state.lang==='th'?'สรุปคำสั่งซื้อ':'Order Summary'}</div>
      ${state.cart.map(c=>{const p=state.products.find(x=>x.id===c.productId);return p?`<div style="display:flex;justify-content:space-between;font-size:14px;padding:4px 0"><span>${pname(p)} × ${c.qty}</span><span>฿${p.price*c.qty}</span></div>`:''}).join('')}
      <div style="border-top:1px solid var(--border);margin:10px 0;padding-top:10px">
        <div style="display:flex;justify-content:space-between;font-size:14px;color:var(--muted)"><span>${t('subtotal')}</span><span>฿${sub}</span></div>
        ${disc>0?`<div style="display:flex;justify-content:space-between;font-size:14px;color:var(--success)"><span>${t('discount')} (${ptsToUse} pts)</span><span>−฿${disc}</span></div>`:''}
        <div style="display:flex;justify-content:space-between;font-size:17px;font-weight:700;color:var(--primary);margin-top:6px"><span>${t('total')}</span><span>฿${total}</span></div>
      </div>
      <div style="font-size:13px;color:var(--muted);border-top:1px solid var(--border);padding-top:10px">
        <div>📍 ${state.checkoutData.address}, ${state.checkoutData.city}</div>
        <div>💳 ${t(state.checkoutData.payment)}</div>
        ${['Bangkok','กรุงเทพฯ'].includes(state.checkoutData.city)?`<div style="margin-top:6px"><span class="badge badge-green">🚀 ${t('within24h')}</span></div>`:''}
      </div>
    </div>
    <div style="display:flex;gap:10px"><button class="btn btn-outline" onclick="state.checkoutStep=2;render()">${t('back')}</button><button class="btn btn-primary" style="flex:1;padding:12px" onclick="placeOrder()">✓ ${t('placeOrder')} (฿${total})</button></div>`:''}
  </div>`;
}

function renderOrders(){
  if(!state.user||state.user.role!=='customer')return `<div class="page"><div class="empty-state"><div class="icon">🔒</div>Please login</div></div>`;
  const orders=getOrdersForUser(state.user.id);
  const sc={placed:'badge-blue',packed:'badge-orange',shipped:'badge-orange',outForDelivery:'badge-orange',delivered:'badge-green',cancelled:'badge-red'};
  return `<div class="page">
    <div class="section-title">${t('orderHistory')}</div>
    ${orders.length===0?`<div class="empty-state"><div class="icon">📦</div>${t('noOrders')}</div>`:''}
    ${orders.slice().reverse().map(o=>{
      const myRefund=state.refunds.find(r=>r.orderId===o.id&&r.userId===state.user.id);
      return `<div class="card" style="margin-bottom:14px;padding:16px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
          <div><div style="font-weight:700;color:var(--primary)">${o.id}</div><div style="font-size:12px;color:var(--muted)">${o.date}</div></div>
          <span class="badge ${sc[o.status]||'badge-gray'}">${o.status}</span>
        </div>
        <div style="font-size:13px;color:var(--muted);margin-bottom:10px">${o.items.map(i=>{const p=state.products.find(x=>x.id===i.productId);return p?`${pname(p)} ×${i.qty}`:''}).join(' • ')}</div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-weight:700;color:var(--primary)">฿${o.total}</span>
          <div style="display:flex;gap:8px;align-items:center">
            <span style="font-size:12px;color:var(--muted)">+${o.pointsEarned} pts</span>
            <button class="btn btn-outline btn-sm" onclick="openModal('tracking',{id:'${o.id}'})">${state.lang==='th'?'ติดตาม':'Track'}</button>
            ${o.status==='delivered'&&!myRefund?`<button class="btn btn-sm" style="background:#fadbd8;color:#922b21;border-radius:6px" onclick="openModal('refund',{id:'${o.id}'})">${t('refundRequest')}</button>`:''}
            ${myRefund?`<span class="badge ${myRefund.status==='approved'?'badge-green':myRefund.status==='rejected'?'badge-red':'badge-orange'}">${myRefund.status==='rejected'?`Rejected: ${myRefund.rejectionReason}`:myRefund.status}</span>`:''}
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

function renderTracking(ordId){
  const o=state.orders.find(x=>x.id===ordId);if(!o)return '';
  const steps=[t('orderPlaced'),t('packed'),t('shipped'),t('outForDelivery'),t('delivered')];
  return `<div class="modal-header"><span>📦 ${ordId}</span><button class="btn btn-ghost" onclick="closeModal()">✕</button></div>
  <div class="modal-body">
    <div class="order-timeline">
      ${steps.map((s,i)=>`<div class="timeline-step${i<o.trackingStatus?' done':i===o.trackingStatus?' active':''}">
        <div class="step-dot${i<o.trackingStatus?' done':i===o.trackingStatus?' active':''}">${i<o.trackingStatus?'✓':i+1}</div>
        <div style="padding-top:3px"><div style="font-weight:500;font-size:14px">${s}</div>${i===o.trackingStatus?`<div style="font-size:12px;color:var(--primary)">${state.lang==='th'?'สถานะปัจจุบัน':'Current status'}</div>`:''}</div>
      </div>`).join('')}
    </div>
    ${o.isBangkok?`<span class="badge badge-green">🚀 ${t('within24h')}</span>`:''}
    <div style="margin-top:14px;font-size:13px;color:var(--muted)">📍 ${o.address}, ${o.city}</div>
  </div>`;
}

function renderRefundModal(ordId){
  return `<div class="modal-header"><span>${t('refundRequest')}</span><button class="btn btn-ghost" onclick="closeModal()">✕</button></div>
  <div class="modal-body">
    <div class="form-group"><label class="form-label">${t('refundReason')}</label>
      <select id="refund-reason-sel">
        <option>${state.lang==='th'?'สินค้าเสียหาย':'Product was damaged'}</option>
        <option>${state.lang==='th'?'ได้รับสินค้าผิด':'Wrong product received'}</option>
        <option>${state.lang==='th'?'คุณภาพไม่ตรงตามที่โฆษณา':'Quality not as advertised'}</option>
        <option>${state.lang==='th'?'สินค้าหมดอายุ':'Product expired'}</option>
        <option>${state.lang==='th'?'อื่นๆ':'Other'}</option>
      </select>
    </div>
    <div class="form-group"><label class="form-label">${state.lang==='th'?'รายละเอียดเพิ่มเติม':'Additional details'}</label><textarea id="refund-detail" rows="3" placeholder="${state.lang==='th'?'อธิบายปัญหา...':'Describe the issue...'}"></textarea></div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-outline" onclick="closeModal()">${t('cancel')}</button>
    <button class="btn btn-primary" onclick="submitRefund('${ordId}',document.getElementById('refund-reason-sel').value+': '+document.getElementById('refund-detail').value)">${t('submit')}</button>
  </div>`;
}

function renderProfile(){
  if(!state.user||state.user.role!=='customer')return `<div class="page"><div class="empty-state">Please login</div></div>`;
  const u=state.users.find(x=>x.id===state.user.id);
  const notifs=state.notifications.filter(n=>n.userId===state.user.id);
  return `<div class="page">
    <div class="surface-head">
      <div>
        <div class="section-title">${t('profile')}</div>
        <p>${state.lang==='th'?'ข้อมูลลูกค้า คะแนนสะสม และการแจ้งเตือนล่าสุด':'Customer details, loyalty points, and recent notifications.'}</p>
      </div>
    </div>
    <div class="card" style="padding:20px;margin-bottom:16px;display:flex;align-items:center;gap:16px">
      <div style="width:56px;height:56px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700">${u.name[0].toUpperCase()}</div>
      <div>
        <div style="font-size:18px;font-weight:700">${u.name}</div>
        <div style="color:var(--muted);font-size:14px">✉️ ${u.email}</div>
        ${u.mobile?`<div style="color:var(--muted);font-size:14px">📱 ${u.mobile}</div>`:''}
      </div>
    </div>
    <div class="stat-cards">
      <div class="stat-card"><div class="stat-val">${u.points}</div><div class="stat-label">${t('points')}</div></div>
      <div class="stat-card"><div class="stat-val">${getOrdersForUser(u.id).length}</div><div class="stat-label">${t('orderHistory')}</div></div>
      <div class="stat-card"><div class="stat-val">${state.refunds.filter(r=>r.userId===u.id).length}</div><div class="stat-label">Refunds</div></div>
    </div>
    <div class="section-title" style="margin-top:20px">${t('notifications')}</div>
    ${notifs.length===0?`<div class="empty-state" style="padding:24px">No notifications</div>`:''}
    <div class="card" style="padding:0">${notifs.slice().reverse().map(n=>`<div class="notif-item" onclick="n.read=true;render()" style="cursor:pointer"><div class="notif-dot${n.read?' read':''}"></div><div><div style="font-size:14px;font-weight:${n.read?400:600}">${state.lang==='th'?n.msgTh:n.msg}</div><div style="font-size:12px;color:var(--muted)">${n.date}</div></div></div>`).join('')}</div>
  </div>`;
}

function renderNotifications(){
  if(!state.user)return `<div class="page"><div class="empty-state">Please login</div></div>`;
  const notifs=state.notifications.filter(n=>n.userId===state.user.id);
  return `<div class="page">
    <div class="section-title">${t('notifications')}</div>
    ${notifs.length===0?`<div class="empty-state"><div class="icon">🔔</div>No notifications</div>`:''}
    <div class="card" style="padding:0">${notifs.slice().reverse().map(n=>`<div class="notif-item" onclick="n.read=true;render()" style="cursor:pointer"><div class="notif-dot${n.read?' read':''}"></div><div><div style="font-size:14px;font-weight:${n.read?400:600}">${state.lang==='th'?n.msgTh:n.msg}</div><div style="font-size:12px;color:var(--muted)">${n.date}</div></div></div>`).join('')}</div>
  </div>`;
}

function renderAdmin(){
  if(state.user?.role!=='admin')return `<div class="page"><div class="empty-state">Unauthorized</div></div>`;
  return `<div class="page">
    <div class="surface-head">
      <div>
        <div class="section-title">⚙️ ${t('admin')} ${state.lang==='th'?'แดชบอร์ด':'Dashboard'}</div>
        <p>${state.lang==='th'?'ภาพรวมร้านและการจัดการสินค้าในมุมมองที่อ่านง่ายขึ้น':'Store overview and product management in a more polished dashboard.'}</p>
      </div>
    </div>
    <div class="stat-cards">
      <div class="stat-card"><div class="stat-val">${state.products.length}</div><div class="stat-label">${t('products')}</div></div>
      <div class="stat-card"><div class="stat-val">${state.orders.length}</div><div class="stat-label">${t('orders')}</div></div>
      <div class="stat-card"><div class="stat-val">${state.users.filter(u=>u.role==='customer').length}</div><div class="stat-label">Customers</div></div>
      <div class="stat-card"><div class="stat-val">${state.products.filter(p=>p.stock===0).length}</div><div class="stat-label">Out of Stock</div></div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <div class="section-title" style="margin:0">${state.lang==='th'?'จัดการสินค้า':'Product Management'}</div>
      <button class="btn btn-primary btn-sm" onclick="openModal('addProduct')">${t('addProduct')}</button>
    </div>
    <div class="card" style="overflow:auto">
      <table class="admin-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead><tr style="background:#f5f4f0"><th style="padding:10px 12px;text-align:left">Product</th><th style="padding:10px 12px;text-align:right">Price</th><th style="padding:10px 12px;text-align:right">${t('stock')}</th><th style="padding:10px 12px;text-align:center">Status</th><th style="padding:10px 12px;text-align:center">Actions</th></tr></thead>
        <tbody>${state.products.map(p=>`<tr style="border-top:1px solid var(--border)">
          <td style="padding:10px 12px;display:flex;align-items:center;gap:10px"><img src="${p.image}" style="width:36px;height:36px;object-fit:cover;border-radius:6px;"> ${pname(p)}</td>
          <td style="padding:10px 12px;text-align:right;color:var(--primary);font-weight:600">฿${p.price}</td><td style="padding:10px 12px;text-align:right">${p.stock}</td><td style="padding:10px 12px;text-align:center">${p.stock===0?'<span class="badge badge-red">Out</span>':p.stock<=5?'<span class="badge badge-orange">Low</span>':'<span class="badge badge-green">OK</span>'}</td><td style="padding:10px 12px;text-align:center"><button class="btn btn-sm" style="background:#eee;margin-right:4px" onclick="openModal('editProduct',{id:${p.id}})">✏️</button><button class="btn btn-sm" style="background:#fadbd8;color:#922b21" onclick="if(confirm('Remove product?')){state.products=state.products.filter(x=>x.id!==${p.id});render()}">🗑</button></td></tr>`).join('')}</tbody>
      </table>
    </div>
  </div>`;
}

function renderProductForm(editing){
  const p=editing||{id:Date.now(),name:'',nameTh:'',category:'fresh',price:0,unit:'500g',stock:0,image:'',desc:'',descTh:''};
  return `<div class="modal-header"><span>${editing?t('editProduct'):t('addProduct')}</span><button class="btn btn-ghost" onclick="closeModal()">✕</button></div>
  <div class="modal-body">
    <div class="form-group"><label class="form-label">Name (EN)</label><input id="pf-name" value="${p.name}"/></div>
    <div class="form-group"><label class="form-label">ชื่อ (TH)</label><input id="pf-nameth" value="${p.nameTh}"/></div>
    <div class="form-group"><label class="form-label">Category</label><select id="pf-cat"><option value="fresh"${p.category==='fresh'?' selected':''}>Fresh</option><option value="processed"${p.category==='processed'?' selected':''}>Processed</option></select></div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
      <div class="form-group"><label class="form-label">Price (฿)</label><input id="pf-price" type="number" value="${p.price}"/></div>
      <div class="form-group"><label class="form-label">Unit</label><input id="pf-unit" value="${p.unit}"/></div>
      <div class="form-group"><label class="form-label">${t('stock')}</label><input id="pf-stock" type="number" value="${p.stock}"/></div>
    </div>
    <div class="form-group"><label class="form-label">Image URL</label><input id="pf-image" value="${p.image || ''}" placeholder="https://..."/></div>
    <div class="form-group"><label class="form-label">Description (EN)</label><textarea id="pf-desc" rows="2">${p.desc}</textarea></div>
    <div class="form-group"><label class="form-label">คำอธิบาย (TH)</label><textarea id="pf-descth" rows="2">${p.descTh}</textarea></div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-outline" onclick="closeModal()">${t('cancel')}</button>
    <button class="btn btn-primary" onclick="saveProduct(${editing?editing.id:p.id},${!!editing})">${t('save')}</button>
  </div>`;
}

function renderWarehouse(){
  if(state.user?.role!=='warehouse')return `<div class="page"><div class="empty-state">Unauthorized</div></div>`;
  const pending=state.orders.filter(o=>o.status==='placed');
  const packed=state.orders.filter(o=>o.status==='packed');
  return `<div class="page">
    <div class="surface-head">
      <div>
        <div class="section-title">📦 ${t('warehouse')}</div>
        <p>${state.lang==='th'?'โฟลว์จัดเตรียมออเดอร์ที่ดูเป็นระบบมากขึ้น':'A cleaner workflow for packing and dispatching orders.'}</p>
      </div>
    </div>
    <div class="stat-cards">
      <div class="stat-card"><div class="stat-val">${pending.length}</div><div class="stat-label">Pending Orders</div></div>
      <div class="stat-card"><div class="stat-val">${packed.length}</div><div class="stat-label">Packed</div></div>
    </div>
    <div class="section-title" style="margin-top:8px">${state.lang==='th'?'ออเดอร์รอดำเนินการ':'Pending Orders'}</div>
    ${pending.length===0?`<div class="empty-state" style="padding:24px"><div class="icon">✅</div>No pending orders</div>`:''}
    ${pending.map(o=>`<div class="card" style="padding:14px;margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <div>
          <div style="font-weight:700;color:var(--primary)">${o.id}</div>
          <div style="font-size:13px;color:var(--muted)">${o.date} • ${o.items.length} item(s)</div>
          <div style="font-size:13px;margin-top:4px">${o.items.map(i=>{const p=state.products.find(x=>x.id===i.productId);return p?`${p.emoji} ${pname(p)} ×${i.qty}`:''}).join(', ')}</div>
          <div style="font-size:13px;color:var(--muted);margin-top:3px">📍 ${o.address}, ${o.city}</div>
          ${o.isBangkok?`<span class="badge badge-green" style="margin-top:4px;font-size:11px">🚀 24h delivery</span>`:''}
        </div>
        <button class="btn btn-primary btn-sm" onclick="markPacked('${o.id}')">${t('markPacked')}</button>
      </div>
    </div>`).join('')}
    ${packed.length>0?`<div class="section-title" style="margin-top:16px">${state.lang==='th'?'แพ็คแล้ว':'Packed Orders'}</div>${packed.map(o=>`<div class="card" style="padding:12px;margin-bottom:8px;opacity:.75"><span class="badge badge-orange">Packed</span> <strong>${o.id}</strong> — ${o.address}, ${o.city}</div>`).join('')}`:''}
  </div>`;
}

function renderStaff(){
  if(state.user?.role!=='staff')return `<div class="page"><div class="empty-state">Unauthorized</div></div>`;
  const refunds=state.refunds;
  return `<div class="page">
    <div class="surface-head">
      <div>
        <div class="section-title">🎧 ${t('staffReview')}</div>
        <p>${state.lang==='th'?'ติดตามคำขอคืนสินค้าด้วยเลย์เอาต์ที่ชัดเจนขึ้น':'Track refund requests in a clearer, calmer review layout.'}</p>
      </div>
    </div>
    <div class="stat-cards">
      <div class="stat-card"><div class="stat-val">${refunds.filter(r=>r.status==='pending').length}</div><div class="stat-label">Pending</div></div>
      <div class="stat-card"><div class="stat-val">${refunds.filter(r=>r.status==='approved').length}</div><div class="stat-label">Approved</div></div>
      <div class="stat-card"><div class="stat-val">${refunds.filter(r=>r.status==='rejected').length}</div><div class="stat-label">Rejected</div></div>
    </div>
    ${refunds.length===0?`<div class="empty-state"><div class="icon">📋</div>No refund requests yet</div>`:''}
    ${refunds.map(r=>{
      const o=state.orders.find(x=>x.id===r.orderId);
      const u=state.users.find(x=>x.id===r.userId);
      return `<div class="refund-item">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
          <div><div style="font-weight:700">${r.id}</div><div style="font-size:12px;color:var(--muted)">${r.date} • ${u?.name||'Unknown'} (${u?.email||''})</div></div>
          <span class="badge ${r.status==='pending'?'badge-orange':r.status==='approved'?'badge-green':'badge-red'}">${r.status}</span>
        </div>
        <div style="font-size:13px;margin-bottom:6px"><strong>Order:</strong> ${r.orderId} • ฿${o?.total||'?'}</div>
        <div style="font-size:13px;color:var(--muted);margin-bottom:10px;background:#f9f9f7;padding:8px;border-radius:6px">${r.reason}</div>
        ${r.status==='pending'?`<div style="display:flex;gap:8px;align-items:flex-end"><div style="flex:1"><input id="rej-${r.id}" placeholder="${t('rejectionReason')} (required if rejecting)" style="font-size:13px"/></div><button class="btn btn-sm" style="background:#d5f5e3;color:#1e8449;white-space:nowrap" onclick="reviewRefund('${r.id}',true,'')">${t('approve')}</button><button class="btn btn-sm" style="background:#fadbd8;color:#922b21;white-space:nowrap" onclick="reviewRefund('${r.id}',false,document.getElementById('rej-${r.id}').value)">${t('reject')}</button></div>`:`${r.status==='rejected'&&r.rejectionReason?`<div style="font-size:12px;color:#922b21;padding:6px 8px;background:#fadbd8;border-radius:5px">Rejection reason: ${r.rejectionReason}</div>`:''}`}
      </div>`;
    }).join('')}
  </div>`;
}

function renderLoginModal(){
  return `<div class="modal-header"><span style="font-size:18px">🐷 ${t('login')}</span><button class="btn btn-ghost" onclick="closeModal()">✕</button></div>
  <div class="modal-body">
    <div class="form-group"><label class="form-label">${t('email')}</label><input id="l-email" placeholder="you@example.com" type="email" autocomplete="email"/></div>
    <div class="form-group"><label class="form-label">${t('password')}</label><input id="l-pw" type="password" autocomplete="current-password"/></div>
    <div id="login-error" style="display:none;color:#922b21;font-size:13px;margin-top:4px;background:#fadbd8;padding:8px 12px;border-radius:6px">Invalid email or password. Please try again.</div>
    <div class="login-hint">
      <b>Demo accounts:</b>
      Customer: customer@demo.com / demo<br>
      Admin: admin@jubjub.com / admin<br>
      Warehouse: warehouse@jubjub.com / warehouse<br>
      Staff: staff@jubjub.com / staff
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-outline" onclick="closeModal();openModal('signup')">${t('signup')}</button>
    <button class="btn btn-primary" onclick="doLogin(document.getElementById('l-email').value,document.getElementById('l-pw').value)">${t('login')}</button>
  </div>`;
}

function renderSignupModal(){
  return `<div class="modal-header"><span style="font-size:18px">🐷 ${t('signup')}</span><button class="btn btn-ghost" onclick="closeModal()">✕</button></div>
  <div class="modal-body">
    <div class="form-group"><label class="form-label">${t('name')}</label><input id="s-name" autocomplete="name"/></div>
    <div class="form-group"><label class="form-label">${t('email')}</label><input id="s-email" type="email" placeholder="you@example.com" autocomplete="email"/></div>
    <div class="form-group"><label class="form-label">${t('mobile')}</label><input id="s-mobile" placeholder="0812345678" type="tel"/></div>
    <div class="form-group"><label class="form-label">${t('password')}</label><input id="s-pw" type="password" autocomplete="new-password"/></div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-outline" onclick="closeModal();openModal('login')">${t('login')}</button>
    <button class="btn btn-primary" onclick="doSignup(document.getElementById('s-name').value,document.getElementById('s-email').value,document.getElementById('s-mobile').value,document.getElementById('s-pw').value)">${t('signup')}</button>
  </div>`;
}

function renderModal(){
  if(!state.modal)return '';
  const m=state.modal;
  let content='';
  if(m.type==='login')content=renderLoginModal();
  else if(m.type==='signup')content=renderSignupModal();
  else if(m.type==='product'){const p=state.products.find(x=>x.id===m.data.id);if(p)content=renderProductModal(p);}
  else if(m.type==='tracking')content=renderTracking(m.data.id);
  else if(m.type==='refund')content=renderRefundModal(m.data.id);
  else if(m.type==='addProduct')content=renderProductForm(null);
  else if(m.type==='editProduct'){const p=state.products.find(x=>x.id===m.data.id);if(p)content=renderProductForm(p);}
  return `<div class="modal-overlay" onclick="if(event.target===this)closeModal()"><div class="modal">${content}</div></div>`;
}

function render(){
  let pageHtml='';
  if(state.page==='home')pageHtml=renderHome();
  else if(state.page==='products')pageHtml=renderProducts();
  else if(state.page==='cart')pageHtml=renderCart();
  else if(state.page==='orders')pageHtml=renderOrders();
  else if(state.page==='profile')pageHtml=renderProfile();
  else if(state.page==='notifications')pageHtml=renderNotifications();
  else if(state.page==='admin')pageHtml=renderAdmin();
  else if(state.page==='warehouse')pageHtml=renderWarehouse();
  else if(state.page==='staffpanel')pageHtml=renderStaff();
  document.getElementById('app').innerHTML=renderNav()+pageHtml+renderModal();
}

// ==========================================
// 5. INITIALIZATION (Previously main.js)
// ==========================================
// Kickstart the application
render();
