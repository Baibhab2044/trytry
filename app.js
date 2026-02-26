const ACCOUNTS = [
  { name:'Priya Sharma',   email:'priya@ecoyatra.np',   role:'user',    avatar:'P', city:'Kathmandu' },
  { name:'Sunita Rai',     email:'sunita@ecoyatra.np',  role:'hotel',   avatar:'S', city:'Pokhara'   },
  { name:'Dev Khadka',     email:'dev@ecoyatra.np',     role:'ev',      avatar:'D', city:'Lalitpur'  },
  { name:'Aarav Thapa',    email:'aarav@ecoyatra.np',   role:'cleanup', avatar:'A', city:'Biratnagar'},
  { name:'Bikash Tamang',  email:'bikash@ecoyatra.np',  role:'driver',  avatar:'B', city:'Kathmandu' },
];

const HOTELS = [
  {id:1, name:'Himalayan Eco Summit Lodge', loc:'Namche Bazaar, Koshi', price:6400, orig:7200, eco:5, rating:4.9, rev:312, amenities:['Solar Energy','Water Recycling','Composting','Organic Food','Reforestation'], img:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=75', badge:'Top Rated'},
  {id:2, name:'Lakeside Green Resort',      loc:'Pokhara, Gandaki',    price:4200, orig:5000, eco:5, rating:4.8, rev:489, amenities:['Wind Energy','Water Conservation','Zero-Plastic','Local Sourcing','Bike Hire'], img:'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&q=75', badge:'Best Value'},
  {id:3, name:'Chitwan Jungle Eco Camp',    loc:'Sauraha, Bagmati',    price:5100, orig:5800, eco:4, rating:4.7, rev:276, amenities:['Solar Panels','Composting','Tree Planting','Wildlife Reserve'], img:'https://images.unsplash.com/photo-1630839437035-dac17da580d0?w=500&q=75', badge:'Eco Pick'},
  {id:4, name:'Lumbini Peace Sanctuary',    loc:'Lumbini Province',    price:3600, orig:4100, eco:5, rating:4.9, rev:198, amenities:['Solar','Rainwater Harvesting','Zero-Plastic','Organic Garden'], img:'https://images.unsplash.com/photo-1548013146-72479768bada?w=500&q=75', badge:'UNESCO'},
  {id:5, name:'Thamel Heritage Boutique',   loc:'Kathmandu, Bagmati',  price:2850, orig:3200, eco:3, rating:4.5, rev:641, amenities:['LED Lighting','Waste Sorting','Bicycle Hire'], img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=75', badge:null},
  {id:6, name:'Mustang Desert Glamping',    loc:'Lo Manthang, Gandaki',price:8900, orig:10000,eco:4, rating:4.8, rev:94,  amenities:['Solar Power','Water Conservation','Local Cuisine','Stargazing'], img:'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&q=75', badge:'Exclusive'},
  {id:7, name:'Annapurna Base Teahouse',    loc:'Chhomrong, Gandaki',  price:1800, orig:2100, eco:3, rating:4.4, rev:523, amenities:['Solar Water Heater','Composting','Local Food'], img:'https://images.unsplash.com/photo-1594138671710-86a74ee60b2c?w=500&q=75', badge:"Trekkers' Fave"},
  {id:8, name:'Bardia Wilderness Lodge',    loc:'Thakurdwara, Karnali',price:4800, orig:5500, eco:5, rating:4.7, rev:142, amenities:['Solar','Water Recycling','Tree Planting','Organic Food'], img:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500&q=75', badge:'Hidden Gem'},
  {id:9, name:'Patan Cultural Eco Inn',     loc:'Patan, Bagmati',      price:2400, orig:2800, eco:4, rating:4.6, rev:380, amenities:['LED Lighting','Waste Recycling','Rainwater','Local Crafts'], img:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=75', badge:null},
];

const WASTE_REPORTS = [
  {id:'WR-241', lat:28.2096, lng:83.9856, loc:'Phewa Lake Trail, Pokhara',   type:'🧴 Plastic & Single-use', time:'1h ago',  status:'pending',     by:'Priya S.', photo:null},
  {id:'WR-240', lat:27.7172, lng:85.3240, loc:'Thamel Backstreets, KTM',     type:'🗑️ Mixed General Waste',  time:'3h ago',  status:'in_progress', by:'Maya T.',  photo:null},
  {id:'WR-239', lat:27.5291, lng:84.3542, loc:'Chitwan Buffer Zone',          type:'🏚️ Construction Debris',  time:'6h ago',  status:'resolved',    by:'Rohan P.', photo:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=60'},
  {id:'WR-238', lat:27.8063, lng:86.7140, loc:'Namche Bazaar Trail',          type:'🍺 Glass & Bottles',       time:'1d ago',  status:'resolved',    by:'Sita L.',  photo:null},
  {id:'WR-237', lat:27.7211, lng:85.3622, loc:'Boudhanath Stupa Area',        type:'📦 Cardboard & Paper',     time:'1d ago',  status:'resolved',    by:'Dev K.',   photo:null},
  {id:'WR-236', lat:28.2137, lng:83.9725, loc:'Fewa Lakeside Market',         type:'🧴 Plastic & Single-use',  time:'2d ago',  status:'resolved',    by:'Priya R.', photo:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=60'},
  {id:'WR-235', lat:28.1082, lng:85.3120, loc:'Langtang Valley Entry',        type:'🥫 Metal & Cans',          time:'3d ago',  status:'resolved',    by:'Bibek M.', photo:null},
  {id:'WR-234', lat:28.2690, lng:83.9800, loc:'Sarangkot Road, Pokhara',      type:'🗑️ Mixed General Waste',   time:'4d ago',  status:'resolved',    by:'Sunita G.',photo:null},
];

const EV_VEHICLES = [
  {id:'EV-01', name:'BYD Atto 3', loc:'Kathmandu', status:'available', range:'420 km', img:'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=70'},
  {id:'EV-02', name:'Tata Nexon EV', loc:'Pokhara', status:'on_trip', range:'312 km', img:'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&q=70'},
  {id:'EV-03', name:'MG ZS EV', loc:'Chitwan', status:'available', range:'380 km', img:'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&q=70'},
  {id:'EV-04', name:'BYD Seal', loc:'Biratnagar', status:'maintenance', range:'570 km', img:'https://images.unsplash.com/photo-1592805144716-feeccccef5ac?w=400&q=70'},
  {id:'EV-05', name:'Tata Tigor EV', loc:'Lalitpur', status:'available', range:'250 km', img:'https://images.unsplash.com/photo-1491888489890-2e20d0bd1ee4?w=400&q=70'},
  {id:'EV-06', name:'Hyundai Kona EV', loc:'Pokhara', status:'on_trip', range:'484 km', img:'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&q=70'},
];

// Dummy driver locations for EV Admin map
const EV_DRIVER_LOCATIONS = [
  { id:'EV-01', driver:'Bikash Tamang',  vehicle:'BYD Atto 3',     status:'on_trip',    lat:27.7172, lng:85.3240, from:'Kathmandu', to:'Pokhara',    passenger:'Priya Sharma',  km:200, eta:'4h 20m', battery:'72%' },
  { id:'EV-02', driver:'Ramesh Gurung',  vehicle:'Tata Nexon EV',  status:'on_trip',    lat:28.1096, lng:83.9856, from:'Pokhara',   to:'Annapurna',  passenger:'James Wilson',  km:85,  eta:'2h 10m', battery:'58%' },
  { id:'EV-03', driver:'Sita Shrestha',  vehicle:'MG ZS EV',       status:'on_trip',    lat:27.5291, lng:84.3542, from:'Chitwan',   to:'Lumbini',    passenger:'Sarah Lee',     km:120, eta:'3h 00m', battery:'81%' },
  { id:'EV-04', driver:'Nabin Karki',    vehicle:'BYD Seal',       status:'available',  lat:26.4525, lng:87.2718, from:'Biratnagar',to:'—',          passenger:'—',             km:0,   eta:'—',      battery:'95%' },
  { id:'EV-05', driver:'Maya Lama',      vehicle:'Tata Tigor EV',  status:'available',  lat:27.6588, lng:85.3247, from:'Lalitpur',  to:'—',          passenger:'—',             km:0,   eta:'—',      battery:'88%' },
  { id:'EV-06', driver:'Dipak Rai',      vehicle:'Hyundai Kona EV',status:'maintenance',lat:28.2096, lng:83.9725, from:'Pokhara',   to:'—',          passenger:'—',             km:0,   eta:'—',      battery:'45%' },
];

// Driver's trip data (for driver role)
const DRIVER_TRIPS = [
  { id:'TR-01', from:'Kathmandu', fromLat:27.7172, fromLng:85.3240, to:'Pokhara', toLat:28.2096, toLng:83.9856, passenger:'Priya Sharma', km:200, status:'active',    date:'Today',     co2Saved:42 },
  { id:'TR-02', from:'Pokhara',   fromLat:28.2096, fromLng:83.9856, to:'Chitwan', toLat:27.5291, toLng:84.3542, passenger:'Ram Bahadur',  km:150, status:'upcoming',  date:'Tomorrow',  co2Saved:31 },
  { id:'TR-03', from:'Lalitpur',  fromLat:27.6588, fromLng:85.3247, to:'Bhaktapur',toLat:27.6726,toLng:85.4293, passenger:'Sita Maya',   km:15,  status:'upcoming',  date:'Mar 16',    co2Saved: 3 },
  { id:'TR-04', from:'Kathmandu', fromLat:27.7172, fromLng:85.3240, to:'Pokhara', toLat:28.2096, toLng:83.9856, passenger:'Rajesh Kumar', km:200, status:'completed', date:'Yesterday', co2Saved:42 },
  { id:'TR-05', from:'Chitwan',   fromLat:27.5291, fromLng:84.3542, to:'Kathmandu',toLat:27.7172,toLng:85.3240, passenger:'Anna Mueller',km:160, status:'completed', date:'3d ago',    co2Saved:34 },
];

let driverTotalCo2  = 76; // from completed trips
let driverTotalKm   = 360;
let driverTrips     = 2;
let mapDriver       = null;
let mapDriverInit   = false;
let mapEvAdmin      = null;
let mapEvAdminInit  = false;

const EV_BOOKINGS = [
  {customer:'Priya Sharma', from:'Kathmandu', to:'Pokhara', km:200, date:'Today',      status:'active'},
  {customer:'Ram Bahadur',  from:'Pokhara',   to:'Chitwan', km:150, date:'Yesterday',  status:'completed'},
  {customer:'Sita Maya',    from:'Kathmandu', to:'Bhaktapur',km:15, date:'2d ago',     status:'completed'},
  {customer:'Bikram Gurung',from:'Biratnagar',to:'Dharan',  km:80,  date:'3d ago',     status:'completed'},
  {customer:'Laxmi Thapa',  from:'Lalitpur',  to:'Kirtipur',km:12,  date:'4d ago',     status:'completed'},
];

const HOTEL_BOOKINGS = [
  {customer:'James Wilson',  nights:3, checkin:'Today',     checkout:'Mar 16', status:'checked_in'},
  {customer:'Sarah Lee',     nights:2, checkin:'Tomorrow',  checkout:'Mar 17', status:'upcoming'},
  {customer:'Rajesh Kumar',  nights:5, checkin:'Mar 18',    checkout:'Mar 23', status:'upcoming'},
  {customer:'Anna Mueller',  nights:1, checkin:'Yesterday', checkout:'Today',  status:'checked_out'},
  {customer:'David Park',    nights:4, checkin:'Mar 20',    checkout:'Mar 24', status:'upcoming'},
];


let currentUser      = null;
let selectedAccount  = null;
let map              = null;
let mapCleanup       = null;
let mapInitialized   = false;
let cleanupMapInit   = false;
let pendingLatLng    = null;
let uploadedPhotoDataUrl = null;
let reportCounter    = 241;
let activeTagFilter  = '';
let markers          = [];
let cleanupMarkers   = [];

// User EcoScore state
let userEcoScore   = 0;
let userCarbonSaved = 0;
let userEvKm       = 0;
let userHotelNights = 0;
let userPins       = 0;
let userEcoLog     = [];

// Hotel admin eco state
let hotelEcoActivities = [false,false,false,false,false,false,false];


const ROLE_CONFIG = {
  user: {
    badge: 'Traveller',
    badgeBg: 'var(--g50)',
    badgeClr: 'var(--g700)',
    defaultView: 'user-dash',
    topNav: [
      {label:'Dashboard', view:'user-dash'},
      {label:'Eco Hotels', view:'user-hotels'},
      {label:'Waste Map', view:'user-waste'},
      {label:'Carbon Footprint', view:'user-carbon'},
    ],
    sidebar: [
      { section:'Explore', links:[
        {icon:'🏡', label:'Dashboard',       view:'user-dash',    badge:null},
        {icon:'🏨', label:'Eco Hotels',      view:'user-hotels',  badge:'9'},
        {icon:'🗺️', label:'Waste Map',       view:'user-waste',   badge:null},
      ]},
      { section:'My Impact', links:[
        {icon:'⭐', label:'EcoScore',         view:'user-dash',    badge:null},
        {icon:'🌱', label:'Carbon Footprint', view:'user-carbon',  badge:null},
      ]},
    ],
    sidebarNature: { title:'🌍 Your EcoScore', text:'Earn points every time you book, rent EV or pin waste', statId:'sidebar-user-score' },
  },

  hotel: {
    badge: 'Hotel Admin',
    badgeBg: 'rgba(201,148,58,0.15)',
    badgeClr: '#92640a',
    defaultView: 'hotel-dash',
    topNav: [
      {label:'Dashboard', view:'hotel-dash'},
      {label:'Add Hotel', view:'hotel-add'},
    ],
    sidebar: [
      { section:'Hotel Management', links:[
        {icon:'🏨', label:'Dashboard',       view:'hotel-dash', badge:null},
        {icon:'➕', label:'Add Hotel',       view:'hotel-add',  badge:null},
        {icon:'👥', label:'Customers',       view:'hotel-dash', badge:'312'},
        {icon:'🍃', label:'Eco Score',       view:'hotel-dash', badge:null},
      ]},
    ],
    sidebarNature: { title:'🍃 Green Badge', text:'Current eco activities determine your badge level', statId:'sidebar-hotel-eco' },
  },

  ev: {
    badge: 'EV Admin',
    badgeBg: '#eff6ff',
    badgeClr: '#1d4ed8',
    defaultView: 'ev-dash',
    topNav: [
      {label:'Dashboard', view:'ev-dash'},
      {label:'Fleet', view:'ev-fleet'},
      {label:'📍 Driver Map', view:'ev-map'},
    ],
    sidebar: [
      { section:'EV Management', links:[
        {icon:'⚡', label:'Dashboard',        view:'ev-dash',   badge:null},
        {icon:'🚗', label:'Fleet',            view:'ev-fleet',  badge:'18'},
        {icon:'📍', label:'Driver Locations', view:'ev-map',    badge:null},
        {icon:'👥', label:'Bookings',         view:'ev-dash',   badge:'248'},
        {icon:'🌱', label:'Carbon Offset',    view:'ev-dash',   badge:null},
      ]},
    ],
    sidebarNature: { title:'⚡ Fleet CO₂ Offset', text:'Total carbon avoided by your EV fleet this month', statId:'sidebar-ev-co2' },
  },


  driver: {
    badge: 'EV Driver',
    badgeBg: '#f0fdf4',
    badgeClr: '#15803d',
    defaultView: 'driver-dash',
    topNav: [
      {label:'Dashboard', view:'driver-dash'},
      {label:'Navigation', view:'driver-map'},
    ],
    sidebar: [
      { section:'My Trips', links:[
        {icon:'🚗', label:'Dashboard',       view:'driver-dash',  badge:null},
        {icon:'🗺️', label:'Navigation Map',  view:'driver-map',   badge:null},
        {icon:'🌱', label:'Carbon Savings',  view:'driver-dash',  badge:null},
        {icon:'⚡', label:'Battery Status',  view:'driver-dash',  badge:null},
      ]},
    ],
    sidebarNature: { title:'🌱 CO₂ Saved', text:'Carbon emissions avoided on your EV trips', statId:'sidebar-driver-co2' },
  },

  cleanup: {
    badge: 'Cleanup Org',
    badgeBg: '#fef2f2',
    badgeClr: '#991b1b',
    defaultView: 'cleanup-dash',
    topNav: [
      {label:'Dashboard', view:'cleanup-dash'},
      {label:'Waste Map', view:'cleanup-map'},
    ],
    sidebar: [
      { section:'Cleanup Management', links:[
        {icon:'🗑️', label:'Dashboard',        view:'cleanup-dash', badge:null},
        {icon:'🗺️', label:'Waste Map',        view:'cleanup-map',  badge:null},
        {icon:'⏳', label:'Pending',          view:'cleanup-dash', badge:null, badgeId:'sb-pending-count'},
        {icon:'✅', label:'Resolved',         view:'cleanup-dash', badge:null},
      ]},
    ],
    sidebarNature: { title:'🗑️ Today\'s Impact', text:'Waste reports resolved this week', statId:'sidebar-cleanup-resolved' },
  },
};


// Floating leaves
const leavesContainer = document.getElementById('login-leaves');
for (let i = 0; i < 12; i++) {
  const leaf = document.createElement('div');
  leaf.className = 'login-leaf';
  leaf.textContent = ['🌿','🍃','🍂','🌱','🍀'][Math.floor(Math.random()*5)];
  leaf.style.left = Math.random()*100 + '%';
  leaf.style.animationDuration = (8 + Math.random()*12) + 's';
  leaf.style.animationDelay = (Math.random()*10) + 's';
  leaf.style.fontSize = (1.2 + Math.random()*2) + 'rem';
  leavesContainer.appendChild(leaf);
}

// Render account chips
const grid = document.getElementById('accounts-grid');
const roleLabels = {user:'Traveller', hotel:'Hotel Admin', ev:'EV Admin', cleanup:'Cleanup Org', driver:'EV Driver'};
const badgeClass  = {user:'rb-traveler', hotel:'rb-admin', ev:'rb-ev', cleanup:'rb-cleanup', driver:'rb-driver'};
ACCOUNTS.forEach((acc, i) => {
  const chip = document.createElement('div');
  chip.className = 'account-chip';
  chip.dataset.idx = i;
  chip.innerHTML = `
    <div class="chip-name">${acc.name}</div>
    <div class="chip-role">
      <span class="chip-role-badge ${badgeClass[acc.role]}">${roleLabels[acc.role]}</span>
      ${acc.city}
    </div>`;
  chip.onclick = () => {
    document.querySelectorAll('.account-chip').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
    selectedAccount = acc;
    document.getElementById('l-email').value = acc.email;
    document.getElementById('l-pass').value  = 'green123';
  };
  grid.appendChild(chip);
});

function doLogin() {
  const email = document.getElementById('l-email').value.trim();
  const pass  = document.getElementById('l-pass').value.trim();
  if (!email) { showToast('Please enter your email address'); return; }
  if (pass !== 'green123' && pass !== '') { showToast('Incorrect password. Hint: green123'); return; }
  let acc = ACCOUNTS.find(a => a.email === email);
  if (!acc && selectedAccount) acc = selectedAccount;
  if (!acc) acc = {name: email.split('@')[0], email, role:'user', avatar: email[0].toUpperCase(), city:'Nepal'};
  currentUser = acc;

  const cfg = ROLE_CONFIG[acc.role] || ROLE_CONFIG.user;

  // Set topbar
  document.getElementById('tb-name').textContent   = acc.name.split(' ')[0];
  document.getElementById('dash-name').textContent  = acc.name.split(' ')[0];
  document.getElementById('tb-avatar').textContent  = acc.avatar;
  const badge = document.getElementById('tb-badge');
  badge.textContent   = cfg.badge;
  badge.style.background = cfg.badgeBg;
  badge.style.color      = cfg.badgeClr;

  // Build topbar nav
  const tnav = document.getElementById('topbar-nav');
  tnav.innerHTML = cfg.topNav.map((n,i) =>
    `<button class="tnav${i===0?' active':''}" onclick="showView('${n.view}',this)">${n.label}</button>`
  ).join('');

  // Build sidebar
  const sb = document.getElementById('sidebar');
  let sbHtml = '';
  cfg.sidebar.forEach(sec => {
    sbHtml += `<div class="sidebar-section"><div class="sidebar-label">${sec.section}</div>`;
    sec.links.forEach((lnk, li) => {
      const badgeHtml = lnk.badgeId
        ? `<span class="slink-badge" id="${lnk.badgeId}">0</span>`
        : lnk.badge
          ? `<span class="slink-badge">${lnk.badge}</span>`
          : '';
      sbHtml += `<button class="slink${li===0?' active':''}" onclick="showView('${lnk.view}',null,this)">
        <span class="slink-icon">${lnk.icon}</span>${lnk.label}${badgeHtml}
      </button>`;
    });
    sbHtml += `</div>`;
  });
  sbHtml += `<div class="sidebar-nature">
    <div class="sn-title">${cfg.sidebarNature.title}</div>
    <div class="sn-text">${cfg.sidebarNature.text}</div>
    <div class="sn-stat" id="${cfg.sidebarNature.statId}">—</div>
  </div>`;
  sb.innerHTML = sbHtml;

  // Date chip
  const dateStr = new Date().toLocaleDateString('en-US',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  document.querySelectorAll('.date-chip').forEach(el => el.textContent = dateStr);

  // Init role-specific data
  if (acc.role === 'user') {
    renderDashUser();
    renderHotels(HOTELS);
    renderWpList();
    updateUserEcoDisplay();
  } else if (acc.role === 'hotel') {
    renderHotelDash();
    renderHotelEcoChecklist();
  } else if (acc.role === 'ev') {
    renderEvDash();
    renderEvFleet();
  } else if (acc.role === 'driver') {
    renderDriverDash();
  } else if (acc.role === 'cleanup') {
    renderCleanupDash();
    updateCleanupStats();
  }

  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app').classList.add('visible');
  showView(cfg.defaultView);
  showToast('Welcome, ' + acc.name.split(' ')[0] + '! 🌿');
}

function signOut() {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('app').classList.remove('visible');
  if (map) { map.remove(); map = null; mapInitialized = false; }
  if (mapCleanup) { mapCleanup.remove(); mapCleanup = null; cleanupMapInit = false; }
  if (mapDriver)  { mapDriver.remove();  mapDriver = null;   mapDriverInit  = false; }
  if (mapEvAdmin) { mapEvAdmin.remove(); mapEvAdmin = null;  mapEvAdminInit = false; }
  markers = []; cleanupMarkers = [];
  showToast('Signed out. Safe travels! 👋');
}


function showView(name, topBtn, sideBtn) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('view-' + name);
  if (target) target.classList.add('active');

  if (topBtn) {
    document.querySelectorAll('.tnav').forEach(b => b.classList.remove('active'));
    topBtn.classList.add('active');
  }
  if (sideBtn) {
    document.querySelectorAll('.slink').forEach(b => b.classList.remove('active'));
    sideBtn.classList.add('active');
  }

  if (name === 'driver-map' && !mapDriverInit) {
    setTimeout(initDriverMap, 80);
  }
  if (name === 'ev-map' && !mapEvAdminInit) {
    setTimeout(initEvAdminMap, 80);
  }

  if (name === 'user-waste' && !mapInitialized) {
    setTimeout(initMap, 80);
  }
  if (name === 'cleanup-map' && !cleanupMapInit) {
    setTimeout(initCleanupMap, 80);
  }
}


function renderDashUser() {
  const hr = document.getElementById('dash-hotel-rows');
  hr.innerHTML = HOTELS.slice(0,6).map(h => `
    <div class="hotel-row">
      <img class="hotel-row-img" src="${h.img}&auto=format&w=80" alt="${h.name}" loading="lazy">
      <div class="hotel-row-info">
        <div class="hotel-row-name">${h.name}</div>
        <div class="hotel-row-loc">📍 ${h.loc}</div>
      </div>
      <div class="hotel-row-eco">${leavesSmall(h.eco)}</div>
      <div class="hotel-row-price">NPR ${h.price.toLocaleString()}</div>
    </div>`).join('');
}

function updateUserEcoDisplay() {
  document.getElementById('user-ecoscore-num').textContent = userEcoScore;
  document.getElementById('user-ecoscore-delta').textContent = userEcoScore === 0 ? 'Start booking to earn!' : `+${userEcoScore} points total`;
  document.getElementById('user-carbon-num').textContent = userCarbonSaved + 'kg';
  document.getElementById('user-carbon-delta').textContent = userCarbonSaved > 0 ? 'CO₂ saved vs standard' : 'vs standard travel';

  // Sidebar stat
  const sbStat = document.getElementById('sidebar-user-score');
  if (sbStat) sbStat.textContent = userEcoScore + ' pts';

  // Carbon footprint view
  document.getElementById('cf-saved').textContent   = userCarbonSaved + ' kg';
  document.getElementById('cf-ev-km').textContent   = userEvKm + ' km';
  document.getElementById('cf-hotel-nights').textContent = userHotelNights;
  document.getElementById('cf-pins').textContent    = userPins;
  document.getElementById('ct-value').textContent   = userCarbonSaved + ' kg';

  // EcoScore breakdown
  const bd = document.getElementById('user-ecoscore-breakdown');
  if (userEcoLog.length === 0) {
    bd.innerHTML = '<div style="padding:1.5rem;text-align:center;color:var(--muted);font-size:.85rem">No activity yet — book a hotel, rent an EV or pin waste to earn EcoScore points.</div>';
  } else {
    bd.innerHTML = userEcoLog.map(entry => `
      <div class="ecoscore-item">
        <div class="ecoscore-dot"></div>
        <div class="ecoscore-body">
          <div class="ecoscore-title">${entry.action}</div>
          <div class="ecoscore-meta">${entry.detail}</div>
        </div>
        <div class="ecoscore-pts">+${entry.pts} pts</div>
      </div>`).join('');
  }

  // Carbon footprint log
  const cfl = document.getElementById('cf-activity-log');
  if (userEcoLog.length === 0) {
    cfl.innerHTML = '<div style="padding:2rem;text-align:center;color:var(--muted);font-size:.88rem">No activity yet — book a hotel, rent an EV or pin waste to start tracking.</div>';
  } else {
    cfl.innerHTML = userEcoLog.map(entry => `
      <div class="activity-item">
        <div class="act-dot dot-resolved"></div>
        <div class="act-body">
          <div class="act-title">${entry.action}</div>
          <div class="act-meta">${entry.detail}</div>
          <div class="act-time">${entry.time}</div>
        </div>
        <div class="act-status s-resolved">+${entry.carbon} kg CO₂ saved</div>
      </div>`).join('');
  }
}


function leavesSmall(n) {
  let s = '';
  for (let i = 1; i <= 5; i++) s += `<span class="hl${i>n?' off':''}">🍃</span>`;
  return s;
}
function leafFull(n) {
  let s = '<div style="display:flex;gap:1px">';
  for (let i = 1; i <= 5; i++) s += `<span style="font-size:.85rem;${i>n?'opacity:.2':''}">🍃</span>`;
  return s + '</div>';
}
const ecoLabels = {5:'Platinum',4:'Excellent',3:'Good',2:'Standard',1:'Basic'};

function renderHotels(list) {
  const g = document.getElementById('hotels-grid');
  if (!g) return;
  if (!list.length) { g.innerHTML='<p style="padding:2rem;color:var(--muted)">No hotels match your search.</p>'; return; }
  g.innerHTML = list.map(h => `
    <div class="hcard">
      <div class="hcard-img">
        <img src="${h.img}&auto=format" alt="${h.name}" loading="lazy">
        ${h.badge ? `<div class="hcard-badge">${h.badge}</div>` : ''}
        <div class="hcard-eco">${leafFull(h.eco)}</div>
      </div>
      <div class="hcard-body">
        <div class="hcard-name">${h.name}</div>
        <div class="hcard-loc">📍 ${h.loc}</div>
        <div class="hcard-tags">${h.amenities.map(a=>`<span class="htag">${a}</span>`).join('')}</div>
        <div class="hcard-footer">
          <div>
            <div class="hcard-price">NPR ${h.price.toLocaleString()}</div>
            <div class="hcard-pnight">per night · <span style="text-decoration:line-through;color:var(--muted);font-size:.7rem">NPR ${h.orig.toLocaleString()}</span></div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.5rem">
            <div class="hcard-rating">⭐ ${h.rating} (${h.rev})</div>
            <button class="btn-book" onclick="openBooking(${h.id})">Book Now</button>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function filterHotels() {
  const q = (document.getElementById('hotel-q') || {}).value || '';
  let list = HOTELS.filter(h =>
    h.name.toLowerCase().includes(q.toLowerCase()) ||
    h.loc.toLowerCase().includes(q.toLowerCase()) ||
    h.amenities.some(a => a.toLowerCase().includes(q.toLowerCase()))
  );
  if (activeTagFilter) list = list.filter(h => h.amenities.some(a => a.includes(activeTagFilter)) || h.loc.includes(activeTagFilter));
  renderHotels(list);
}

function filterTag(btn, tag) {
  document.querySelectorAll('.fpill').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  activeTagFilter = tag;
  filterHotels();
}

function openBooking(id) {
  const h = HOTELS.find(x => x.id === id); if (!h) return;
  document.getElementById('bm-img').src            = h.img + '&auto=format&w=400';
  document.getElementById('bm-name').textContent   = h.name;
  document.getElementById('bm-loc').textContent    = '📍 ' + h.loc;
  let lv = '';
  for (let i = 1; i <= 5; i++) lv += (i <= h.eco ? '🍃' : '<span style="opacity:.25">🍃</span>');
  document.getElementById('bm-eco').innerHTML   = lv + ` <small style="color:var(--muted)">${ecoLabels[h.eco]}</small>`;
  document.getElementById('bm-price').textContent  = 'NPR ' + h.price.toLocaleString();
  document.getElementById('bm-rating').textContent = '⭐ ' + h.rating + ' (' + h.rev + ' reviews)';
  const today = new Date(); today.setDate(today.getDate() + 1);
  const nxt   = new Date(today); nxt.setDate(nxt.getDate() + 3);
  document.getElementById('bm-checkin').value  = today.toISOString().slice(0,10);
  document.getElementById('bm-checkout').value = nxt.toISOString().slice(0,10);
  document.getElementById('book-modal').classList.add('open');
  document.getElementById('book-modal')._hotelId = id;
}

function confirmBooking() {
  const id = document.getElementById('book-modal')._hotelId;
  const h  = HOTELS.find(x => x.id === id);
  const checkin  = document.getElementById('bm-checkin').value;
  const checkout = document.getElementById('bm-checkout').value;
  const nights   = h ? Math.max(1, Math.round((new Date(checkout) - new Date(checkin)) / 86400000)) : 1;

  // EcoScore + Carbon
  const pts    = 60;
  const carbon = nights * 8;
  userEcoScore    += pts;
  userCarbonSaved += carbon;
  userHotelNights += nights;
  userEcoLog.unshift({
    action: `🏨 Booked ${h ? h.name : 'Eco Hotel'}`,
    detail: `${nights} night${nights>1?'s':''} · ${h ? h.loc : ''}`,
    pts,
    carbon,
    time: 'Just now'
  });

  closeModal('book-modal');
  updateUserEcoDisplay();
  showToast(`🎉 Booking confirmed! +${pts} EcoScore · ${carbon} kg CO₂ saved 🌱`);
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}


function initMap() {
  mapInitialized = true;
  map = L.map('map', { center:[28.2, 84.0], zoom:7, minZoom:6, maxZoom:18 });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  WASTE_REPORTS.forEach(r => {
    const m = L.marker([r.lat, r.lng], {icon: makeIcon(statusColors[r.status])}).addTo(map);
    m.bindPopup(buildPopup(r), {maxWidth:260});
    markers.push({marker:m, report:r});
  });

  map.on('click', function(e) {
    pendingLatLng = e.latlng;
    document.getElementById('pin-ind').textContent =
      `📍 ${e.latlng.lat.toFixed(4)}°N, ${e.latlng.lng.toFixed(4)}°E — ready`;
    if (window._previewMarker) map.removeLayer(window._previewMarker);
    window._previewMarker = L.marker([e.latlng.lat, e.latlng.lng], {icon: makeIcon('#f59e0b', 24)})
      .addTo(map).bindPopup('📍 New report location').openPopup();
  });
}

function initCleanupMap() {
  cleanupMapInit = true;
  mapCleanup = L.map('map-cleanup', { center:[28.2, 84.0], zoom:7, minZoom:6, maxZoom:18 });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(mapCleanup);

  WASTE_REPORTS.forEach(r => {
    const m = L.marker([r.lat, r.lng], {icon: makeIcon(statusColors[r.status])}).addTo(mapCleanup);
    m.bindPopup(buildPopupCleanup(r), {maxWidth:260});
    cleanupMarkers.push({marker:m, report:r});
  });
}

const statusColors = {pending:'#d4a843', in_progress:'#3b82f6', resolved:'#4a9e62'};

function makeIcon(color, size) {
  const s = size || 28;
  return L.divIcon({
    className:'',
    html:`<div style="width:${s}px;height:${s}px;background:${color};border:3px solid white;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 3px 10px rgba(0,0,0,0.3)"></div>`,
    iconSize:[s, s], iconAnchor:[s/2, s], popupAnchor:[0, -s],
  });
}

function buildPopup(r) {
  const statusLabel = {pending:'⏳ Pending', in_progress:'🔄 In Progress', resolved:'✅ Resolved'};
  const statusBg    = {pending:'#fef3c7', in_progress:'#eff6ff', resolved:'var(--g50)'};
  const statusClr   = {pending:'#92640a', in_progress:'#1d4ed8', resolved:'var(--g600)'};
  return `
    <div class="popup-title">${r.loc}</div>
    ${r.photo ? `<img src="${r.photo}" class="popup-photo" loading="lazy">` : ''}
    <div class="popup-type">${r.type}</div>
    <div class="popup-status" style="background:${statusBg[r.status]};color:${statusClr[r.status]}">${statusLabel[r.status]}</div>
    <div class="popup-meta">${r.id} · ${r.time} · ${r.by}</div>`;
}

function buildPopupCleanup(r) {
  const base = buildPopup(r);
  return base + `<button class="popup-btn" onclick="resolveReport('${r.id}')">Update Status</button>`;
}

function renderWpList() {
  const el = document.getElementById('wp-list');
  if (!el) return;
  el.innerHTML = WASTE_REPORTS.map(r => `
    <div class="wp-item ${r.status}" onclick="focusReport('${r.id}')">
      <div class="wp-top">
        <span class="wp-id">${r.id}</span>
        <span class="wp-badge wb-${r.status}">${r.status==='pending'?'⏳ Pending':r.status==='in_progress'?'🔄 Progress':'✅ Done'}</span>
      </div>
      <div class="wp-name">${r.loc}</div>
      <div class="wp-type">${r.type}</div>
      <div class="wp-time">${r.time} · ${r.by}</div>
      ${r.photo ? `<img src="${r.photo}" class="wp-photo" loading="lazy" alt="waste photo">` : ''}
    </div>`).join('');
}

function focusReport(id) {
  const m = markers.find(x => x.report.id === id);
  if (m && map) { map.setView([m.report.lat, m.report.lng], 14, {animate:true}); m.marker.openPopup(); }
}

function handlePhoto(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    uploadedPhotoDataUrl = ev.target.result;
    document.getElementById('photo-preview-img').src = ev.target.result;
    document.getElementById('photo-preview-wrap').style.display = 'block';
    document.getElementById('photo-area').style.display = 'none';
  };
  reader.readAsDataURL(file);
}

function clearPhoto() {
  uploadedPhotoDataUrl = null;
  document.getElementById('photo-input').value = '';
  document.getElementById('photo-preview-wrap').style.display = 'none';
  document.getElementById('photo-area').style.display = 'block';
}

function submitReport() {
  if (!pendingLatLng) { showToast('Click the map to select a location first'); return; }
  const type = document.getElementById('w-type').value;
  const loc  = document.getElementById('w-loc').value || 'Unnamed location';
  if (!type) { showToast('Please select a waste type'); return; }

  const id = 'WR-' + (++reportCounter);
  const newReport = {
    id, lat:pendingLatLng.lat, lng:pendingLatLng.lng,
    loc, type, time:'Just now', status:'pending',
    by: currentUser ? currentUser.name.split(' ')[0] : 'You',
    photo: uploadedPhotoDataUrl
  };
  WASTE_REPORTS.unshift(newReport);

  if (map) {
    const m = L.marker([pendingLatLng.lat, pendingLatLng.lng], {icon: makeIcon('#d4a843')}).addTo(map);
    m.bindPopup(buildPopup(newReport), {maxWidth:260}).openPopup();
    markers.push({marker:m, report:newReport});
    if (window._previewMarker) { map.removeLayer(window._previewMarker); window._previewMarker = null; }
  }

  // EcoScore + Carbon for pinning waste
  const pts = 20;
  userEcoScore    += pts;
  userCarbonSaved += 2;
  userPins        += 1;
  userEcoLog.unshift({
    action: '📌 Pinned Waste Report',
    detail: `${type} · ${loc}`,
    pts,
    carbon: 2,
    time: 'Just now'
  });

  pendingLatLng = null; uploadedPhotoDataUrl = null;
  document.getElementById('pin-ind').textContent = '📍 Click map to select location';
  document.getElementById('w-type').value = '';
  document.getElementById('w-loc').value  = '';
  document.getElementById('w-note').value = '';
  clearPhoto();
  renderWpList();
  updateUserEcoDisplay();
  updateCleanupStats();
  showToast(`${id} submitted! +${pts} EcoScore 📤`);
}


const HOTEL_ECO_ITEMS = [
  '☀️ Solar / Renewable Energy',
  '💧 Water Conservation System',
  '♻️ On-site Waste Recycling',
  '🌾 Local & Organic Food Sourcing',
  '🌱 Composting Programme',
  '🚲 Non-Motorised Transport',
  '🌳 Reforestation / Tree Planting',
  '🚫 Single-use Plastic Ban',
  '🌊 Rainwater Harvesting',
];

function renderHotelDash() {
  // Bookings list
  const bl = document.getElementById('hotel-booking-list');
  if (bl) {
    bl.innerHTML = HOTEL_BOOKINGS.map(b => {
      const statusMap = {checked_in:'s-progress', upcoming:'s-pending', checked_out:'s-resolved'};
      const labelMap  = {checked_in:'Checked In', upcoming:'Upcoming', checked_out:'Checked Out'};
      return `<div class="activity-item">
        <div class="act-dot dot-${b.status==='checked_in'?'progress':b.status==='upcoming'?'pending':'resolved'}"></div>
        <div class="act-body">
          <div class="act-title">${b.customer}</div>
          <div class="act-meta">${b.nights} night${b.nights>1?'s':''} · Check-in: ${b.checkin}</div>
          <div class="act-time">Checkout: ${b.checkout}</div>
        </div>
        <div class="act-status ${statusMap[b.status]}">${labelMap[b.status]}</div>
      </div>`;
    }).join('');
  }
}

function renderHotelEcoChecklist() {
  const cl = document.getElementById('hotel-eco-checklist');
  if (!cl) return;
  cl.innerHTML = HOTEL_ECO_ITEMS.map((item, i) => `
    <div class="am-row">
      <input type="checkbox" id="heco${i}" ${hotelEcoActivities[i]?'checked':''} onchange="updateHotelEco(${i}, this.checked)">
      <label for="heco${i}">${item}</label>
    </div>`).join('');
  recalcHotelEco();
}

function updateHotelEco(idx, checked) {
  hotelEcoActivities[idx] = checked;
  recalcHotelEco();
}

function recalcHotelEco() {
  const n = hotelEcoActivities.filter(Boolean).length;
  const score = n === 0 ? 0 : n <= 1 ? 1 : n <= 3 ? 2 : n <= 5 ? 3 : n <= 7 ? 4 : 5;
  const badge = n <= 1 ? 'None' : n <= 3 ? 'Bronze' : n <= 5 ? 'Silver' : n <= 7 ? 'Gold' : 'Platinum';
  const labels = ['No activities','Basic (1/5)','Standard (2/5)','Good (3/5)','Excellent (4/5)','🏆 Platinum (5/5)'];
  let lv = '';
  for (let i = 1; i <= 5; i++) lv += (i <= score ? '🍃' : '<span style="opacity:.2">🍃</span>');

  const lvEl  = document.getElementById('hotel-ep-lvs');
  const txtEl = document.getElementById('hotel-ep-txt');
  if (lvEl)  lvEl.innerHTML = lv || '<span style="opacity:.2">🍃🍃🍃🍃🍃</span>';
  if (txtEl) txtEl.textContent = n === 0 ? 'Select eco activities…' : labels[score];

  const numEl   = document.getElementById('hotel-eco-score-num');
  const lblEl   = document.getElementById('hotel-eco-score-label');
  const badgeEl = document.getElementById('hotel-badge-status');
  if (numEl)   numEl.textContent = score + '/5';
  if (lblEl)   lblEl.textContent = labels[score] || 'Select activities';
  if (badgeEl) badgeEl.textContent = badge;

  const sbStat = document.getElementById('sidebar-hotel-eco');
  if (sbStat) sbStat.textContent = badge + ' Badge';
}

function saveHotelEco() {
  recalcHotelEco();
  showToast('✅ Eco activities saved! Green Badge updated.');
}

// Hotel add portal
function calcEco() {
  const ids = ['e1','e2','e3','e4','e5','e6','e7'];
  const n = ids.filter(id => document.getElementById(id) && document.getElementById(id).checked).length;
  const score = n===0?0:n<=1?1:n<=2?2:n<=3?3:n<=5?4:5;
  const labels = ['No amenities','Basic (1/5)','Standard (2/5)','Good (3/5)','Excellent (4/5)','🏆 Platinum (5/5)'];
  let lv = '';
  for (let i = 1; i <= 5; i++) lv += (i <= score ? '🍃' : '<span style="opacity:.2">🍃</span>');
  const lvEl  = document.getElementById('ep-lvs');
  const txtEl = document.getElementById('ep-txt');
  if (lvEl)  lvEl.innerHTML = lv || '<span style="opacity:.2">🍃🍃🍃🍃🍃</span>';
  if (txtEl) txtEl.textContent = n === 0 ? 'Select amenities above…' : labels[score];
}

function addHotel() {
  const name  = document.getElementById('nh-name').value.trim();
  const loc   = document.getElementById('nh-loc').value.trim();
  const price = parseInt(document.getElementById('nh-price').value) || 3000;
  if (!name || !loc) { showToast('Please fill in hotel name and location'); return; }
  const ids = ['e1','e2','e3','e4','e5','e6','e7'];
  const tm  = ['Solar Energy','Water Conservation','Waste Recycling','Organic Sourcing','Composting','Eco Transport','Tree Planting'];
  const amenities = ids.map((id,i) => document.getElementById(id) && document.getElementById(id).checked ? tm[i] : null).filter(Boolean);
  const n = amenities.length;
  const eco = n===0?1:n<=1?1:n<=2?2:n<=3?3:n<=5?4:5;
  HOTELS.unshift({
    id:Date.now(), name, loc, price, orig:Math.round(price*1.15),
    eco, rating:+(3.8+Math.random()*.9).toFixed(1), rev:Math.floor(Math.random()*30+5),
    amenities: amenities.length ? amenities : ['Standard Amenities'],
    img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=70',
    badge:'New'
  });
  renderHotels(HOTELS);
  renderHotelDash();
  document.getElementById('nh-name').value = document.getElementById('nh-loc').value = document.getElementById('nh-price').value = '';
  ids.forEach(id => { if (document.getElementById(id)) document.getElementById(id).checked = false; });
  calcEco();
  showToast(`🏨 ${name} listed with Eco Score ${eco}/5!`);
}

function renderAdminTable() {
  const statusBg  = {pending:'#fef3c7', in_progress:'#eff6ff', resolved:'var(--g50)'};
  const statusClr = {pending:'#92640a', in_progress:'#1d4ed8', resolved:'var(--g600)'};
  const tbody = document.getElementById('rpt-tbody');
  if (!tbody) return;
  tbody.innerHTML = WASTE_REPORTS.slice(0,12).map(r => `
    <tr>
      <td style="font-family:'Space Mono',monospace;font-size:.72rem;color:var(--g500)">${r.id}</td>
      <td style="max-width:130px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.loc}</td>
      <td style="font-size:.78rem">${r.type}</td>
      <td><span class="tbl-badge" style="background:${statusBg[r.status]};color:${statusClr[r.status]}">${r.status}</span></td>
      <td><button class="btn-action" onclick="resolveReport('${r.id}')">Action</button></td>
    </tr>`).join('');
}


function renderEvDash() {
  const bl = document.getElementById('ev-booking-list');
  if (bl) {
    bl.innerHTML = EV_BOOKINGS.map(b => `
      <div class="activity-item">
        <div class="act-dot dot-${b.status==='active'?'progress':'resolved'}"></div>
        <div class="act-body">
          <div class="act-title">${b.customer}</div>
          <div class="act-meta">📍 ${b.from} → ${b.to} · ${b.km} km</div>
          <div class="act-time">${b.date}</div>
        </div>
        <div class="act-status ${b.status==='active'?'s-progress':'s-resolved'}">${b.status==='active'?'Active':'Completed'}</div>
      </div>`).join('');
  }

  const ct = document.getElementById('ev-carbon-trips');
  if (ct) {
    ct.innerHTML = EV_BOOKINGS.map(b => {
      const saved = Math.round(b.km * 0.21); // 210g CO2/km for petrol saved
      return `<div class="ev-trip-row">
        <div>
          <div class="ev-trip-dest">${b.from} → ${b.to}</div>
          <div class="ev-trip-km">${b.km} km · ${b.date}</div>
        </div>
        <div class="ev-trip-save">-${saved} kg CO₂</div>
      </div>`;
    }).join('');
  }

  const sbStat = document.getElementById('sidebar-ev-co2');
  if (sbStat) sbStat.textContent = '842 kg';
}

function renderEvFleet() {
  const g = document.getElementById('ev-fleet-grid');
  if (!g) return;
  const statusLabel = {available:'Available', on_trip:'On Trip', maintenance:'Maintenance'};
  const statusClass = {available:'ev-available', on_trip:'ev-on-trip', maintenance:'ev-maintenance'};
  g.innerHTML = EV_VEHICLES.map(v => `
    <div class="ev-card">
      <div class="ev-card-img">
        <img src="${v.img}&auto=format" alt="${v.name}" loading="lazy">
      </div>
      <div class="ev-card-body">
        <div class="ev-card-name">${v.name}</div>
        <div class="ev-card-loc">📍 ${v.loc}</div>
        <div class="ev-status-row">
          <span class="ev-status-badge ${statusClass[v.status]}">${statusLabel[v.status]}</span>
          <span class="ev-range">🔋 ${v.range}</span>
        </div>
      </div>
    </div>`).join('');
}


function updateCleanupStats() {
  const pending  = WASTE_REPORTS.filter(r => r.status === 'pending').length;
  const progress = WASTE_REPORTS.filter(r => r.status === 'in_progress').length;
  const resolved = WASTE_REPORTS.filter(r => r.status === 'resolved').length;
  const total    = WASTE_REPORTS.length;

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  setEl('cu-pending-count', pending);
  setEl('cu-progress-count', progress);
  setEl('cu-resolved-count', resolved);
  setEl('cu-pending-delta', pending > 0 ? `${pending} awaiting action` : 'All clear!');
  setEl('cu-map-filed', total);
  setEl('cu-map-resolved', resolved);
  setEl('cu-map-active', pending + progress);

  const sbStat = document.getElementById('sidebar-cleanup-resolved');
  if (sbStat) sbStat.textContent = resolved + ' sites';
  const sbBadge = document.getElementById('sb-pending-count');
  if (sbBadge) sbBadge.textContent = pending;
}

function renderCleanupDash() {
  const pending  = WASTE_REPORTS.filter(r => r.status === 'pending');
  const resolved = WASTE_REPORTS.filter(r => r.status === 'resolved');

  const pl = document.getElementById('cu-pending-list');
  if (pl) {
    pl.innerHTML = pending.length === 0
      ? '<div style="padding:1.5rem;text-align:center;color:var(--muted);font-size:.85rem">🎉 No pending reports!</div>'
      : pending.map(r => `
        <div class="activity-item">
          <div class="act-dot dot-pending"></div>
          <div class="act-body">
            <div class="act-title">${r.loc}</div>
            <div class="act-meta">${r.type}</div>
            <div class="act-time">${r.time} · By: ${r.by}</div>
          </div>
          <button class="btn-action" onclick="resolveReport('${r.id}')">Action</button>
        </div>`).join('');
  }

  const rl = document.getElementById('cu-resolved-list');
  if (rl) {
    rl.innerHTML = resolved.slice(0,6).map(r => `
      <div class="activity-item">
        <div class="act-dot dot-resolved"></div>
        <div class="act-body">
          <div class="act-title">${r.loc}</div>
          <div class="act-meta">${r.type}</div>
          <div class="act-time">${r.time} · By: ${r.by}</div>
        </div>
        <div class="act-status s-resolved">✅ Done</div>
      </div>`).join('');
  }

  // Cleanup map side panel
  const wcl = document.getElementById('wp-list-cleanup');
  if (wcl) {
    wcl.innerHTML = WASTE_REPORTS.map(r => `
      <div class="wp-item ${r.status}" onclick="focusCleanupReport('${r.id}')">
        <div class="wp-top">
          <span class="wp-id">${r.id}</span>
          <span class="wp-badge wb-${r.status}">${r.status==='pending'?'⏳ Pending':r.status==='in_progress'?'🔄 Progress':'✅ Done'}</span>
        </div>
        <div class="wp-name">${r.loc}</div>
        <div class="wp-type">${r.type}</div>
        <div class="wp-time">${r.time} · ${r.by}</div>
        ${r.photo ? `<img src="${r.photo}" class="wp-photo" loading="lazy" alt="waste photo">` : ''}
      </div>`).join('');
  }
}

function focusCleanupReport(id) {
  const m = cleanupMarkers.find(x => x.report.id === id);
  if (m && mapCleanup) { mapCleanup.setView([m.report.lat, m.report.lng], 14, {animate:true}); m.marker.openPopup(); }
}

function resolveReport(id) {
  const r = WASTE_REPORTS.find(x => x.id === id); if (!r) return;
  r.status = r.status === 'pending' ? 'in_progress' : 'resolved';

  // Update user-side marker
  const um = markers.find(m => m.report.id === id);
  if (um && map) {
    um.marker.setIcon(makeIcon(statusColors[r.status]));
    um.marker.setPopupContent(buildPopup(r));
  }
  // Update cleanup marker
  const cm = cleanupMarkers.find(m => m.report.id === id);
  if (cm && mapCleanup) {
    cm.marker.setIcon(makeIcon(statusColors[r.status]));
    cm.marker.setPopupContent(buildPopupCleanup(r));
  }

  renderWpList();
  renderAdminTable();
  renderCleanupDash();
  updateCleanupStats();
  showToast(`${id} updated to "${r.status.replace('_',' ')}" ✅`);
}

function resolveAllPending() {
  const pending = WASTE_REPORTS.filter(r => r.status === 'pending');
  pending.forEach(r => {
    r.status = 'in_progress';
    const cm = cleanupMarkers.find(m => m.report.id === r.id);
    if (cm && mapCleanup) {
      cm.marker.setIcon(makeIcon(statusColors['in_progress']));
      cm.marker.setPopupContent(buildPopupCleanup(r));
    }
    const um = markers.find(m => m.report.id === r.id);
    if (um && map) {
      um.marker.setIcon(makeIcon(statusColors['in_progress']));
      um.marker.setPopupContent(buildPopup(r));
    }
  });
  renderWpList();
  renderCleanupDash();
  updateCleanupStats();
  showToast(`✅ ${pending.length} report${pending.length>1?'s':''} moved to In Progress`);
}


function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3500);
}

// ─────────────────────────────────────────
// DRIVER ROLE FUNCTIONS
// ─────────────────────────────────────────

function renderDriverDash() {
  // Active trip card
  const activeTrip = DRIVER_TRIPS.find(t => t.status === 'active');
  const tripCard = document.getElementById('driver-active-trip');
  if (tripCard && activeTrip) {
    tripCard.innerHTML = `
      <div class="driver-trip-info">
        <div class="dti-row"><span class="dti-lbl">👤 Passenger</span><span class="dti-val">${activeTrip.passenger}</span></div>
        <div class="dti-row"><span class="dti-lbl">📍 From</span><span class="dti-val">${activeTrip.from}</span></div>
        <div class="dti-row"><span class="dti-lbl">🏁 To</span><span class="dti-val">${activeTrip.to}</span></div>
        <div class="dti-row"><span class="dti-lbl">📏 Distance</span><span class="dti-val">${activeTrip.km} km</span></div>
        <div class="dti-row"><span class="dti-lbl">🌱 CO₂ Saved</span><span class="dti-val" style="color:var(--g600);font-weight:700">${activeTrip.co2Saved} kg</span></div>
      </div>`;
  }

  // Stats
  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl('drv-carbon', driverTotalCo2 + ' kg');
  setEl('drv-km', driverTotalKm + ' km');
  setEl('drv-trips', driverTrips);

  // Sidebar
  const sb = document.getElementById('sidebar-driver-co2');
  if (sb) sb.textContent = driverTotalCo2 + ' kg';

  // Carbon log
  const cl = document.getElementById('drv-carbon-log');
  if (cl) {
    const completed = DRIVER_TRIPS.filter(t => t.status === 'completed');
    cl.innerHTML = completed.length === 0
      ? '<div style="padding:1.5rem;text-align:center;color:var(--muted);font-size:.85rem">No completed trips yet.</div>'
      : completed.map(t => `
        <div class="activity-item">
          <div class="act-dot dot-resolved"></div>
          <div class="act-body">
            <div class="act-title">📍 ${t.from} → ${t.to}</div>
            <div class="act-meta">Passenger: ${t.passenger} · ${t.km} km</div>
            <div class="act-time">${t.date}</div>
          </div>
          <div class="act-status s-resolved">-${t.co2Saved} kg CO₂</div>
        </div>`).join('');
  }
}

function initDriverMap() {
  mapDriverInit = true;
  const activeTrip = DRIVER_TRIPS.find(t => t.status === 'active');
  const center = activeTrip ? [activeTrip.fromLat, activeTrip.fromLng] : [27.7172, 85.3240];

  mapDriver = L.map('map-driver', { center, zoom:8, minZoom:6, maxZoom:18 });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom:19,
  }).addTo(mapDriver);

  if (activeTrip) {
    // Driver current location pin (blue)
    const driverIcon = L.divIcon({
      className:'',
      html:`<div style="width:36px;height:36px;background:#3b82f6;border:3px solid white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.1rem;box-shadow:0 4px 12px rgba(59,130,246,0.5)">🚗</div>`,
      iconSize:[36,36], iconAnchor:[18,18], popupAnchor:[0,-20],
    });
    const destIcon = L.divIcon({
      className:'',
      html:`<div style="width:36px;height:36px;background:#d4a843;border:3px solid white;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 3px 10px rgba(0,0,0,0.3)"></div>`,
      iconSize:[36,36], iconAnchor:[18,36], popupAnchor:[0,-36],
    });

    L.marker([activeTrip.fromLat, activeTrip.fromLng], {icon: driverIcon})
      .addTo(mapDriver)
      .bindPopup(`<div class="popup-title">📍 Your Location</div><div class="popup-meta">${activeTrip.from}</div>`);

    L.marker([activeTrip.toLat, activeTrip.toLng], {icon: destIcon})
      .addTo(mapDriver)
      .bindPopup(`<div class="popup-title">🏁 Destination</div><div class="popup-meta">${activeTrip.to}</div><div class="popup-meta">Passenger: ${activeTrip.passenger}</div>`);

    // Draw dashed route line
    L.polyline([[activeTrip.fromLat, activeTrip.fromLng],[activeTrip.toLat, activeTrip.toLng]], {
      color:'#3b82f6', weight:3, dashArray:'8,8', opacity:0.7
    }).addTo(mapDriver);

    mapDriver.fitBounds([[activeTrip.fromLat, activeTrip.fromLng],[activeTrip.toLat, activeTrip.toLng]], {padding:[40,40]});
  }

  // Update map sidebar stats
  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  if (activeTrip) {
    setEl('drv-map-km', activeTrip.km);
    setEl('drv-map-eta', '4h 20m');
    setEl('drv-map-co2', activeTrip.co2Saved + ' kg');
  }

  // Trip detail in map panel
  const td = document.getElementById('drv-trip-detail');
  if (td && activeTrip) {
    td.innerHTML = `
      <div style="background:var(--g50);border:1.5px solid var(--g100);border-radius:12px;padding:1rem;margin-bottom:.75rem">
        <div style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:700;color:var(--text);margin-bottom:.75rem">🚗 Active Trip</div>
        <div class="dti-row"><span class="dti-lbl">👤 Passenger</span><span class="dti-val">${activeTrip.passenger}</span></div>
        <div class="dti-row"><span class="dti-lbl">📍 From</span><span class="dti-val">${activeTrip.from}</span></div>
        <div class="dti-row"><span class="dti-lbl">🏁 To</span><span class="dti-val">${activeTrip.to}</span></div>
        <div class="dti-row"><span class="dti-lbl">📏 Distance</span><span class="dti-val">${activeTrip.km} km</span></div>
      </div>`;
  }

  // Upcoming trips
  const ul = document.getElementById('drv-upcoming-list');
  if (ul) {
    const upcoming = DRIVER_TRIPS.filter(t => t.status === 'upcoming');
    ul.innerHTML = upcoming.map(t => `
      <div class="activity-item" style="padding:.6rem 0">
        <div class="act-dot dot-pending"></div>
        <div class="act-body">
          <div class="act-title">${t.from} → ${t.to}</div>
          <div class="act-meta">${t.passenger} · ${t.km} km · ${t.date}</div>
        </div>
      </div>`).join('');
  }
}

function completeDriverTrip() {
  const activeTrip = DRIVER_TRIPS.find(t => t.status === 'active');
  if (!activeTrip) { showToast('No active trip to complete'); return; }
  activeTrip.status = 'completed';
  activeTrip.date = 'Just now';
  driverTotalCo2 += activeTrip.co2Saved;
  driverTotalKm  += activeTrip.km;
  driverTrips    += 1;

  // Make next upcoming trip active
  const next = DRIVER_TRIPS.find(t => t.status === 'upcoming');
  if (next) next.status = 'active';

  renderDriverDash();
  showToast(`✅ Trip completed! +${activeTrip.co2Saved} kg CO₂ saved 🌱`);
  if (mapDriverInit && mapDriver) {
    mapDriver.remove(); mapDriver = null; mapDriverInit = false;
  }
}


// ─────────────────────────────────────────
// EV ADMIN MAP — DRIVER LOCATIONS
// ─────────────────────────────────────────

function initEvAdminMap() {
  mapEvAdminInit = true;
  mapEvAdmin = L.map('map-ev-admin', { center:[27.9, 84.5], zoom:7, minZoom:6, maxZoom:18 });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom:19,
  }).addTo(mapEvAdmin);

  EV_DRIVER_LOCATIONS.forEach(drv => {
    const colors = { on_trip:'#3b82f6', available:'#4a9e62', maintenance:'#d93025' };
    const icons  = { on_trip:'🚗', available:'🅿️', maintenance:'🔧' };
    const driverIcon = L.divIcon({
      className:'',
      html:`<div style="width:38px;height:38px;background:${colors[drv.status]};border:3px solid white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1rem;box-shadow:0 4px 14px rgba(0,0,0,0.3)">${icons[drv.status]}</div>`,
      iconSize:[38,38], iconAnchor:[19,19], popupAnchor:[0,-22],
    });

    const statusLabel = {on_trip:'On Trip', available:'Available', maintenance:'Maintenance'};
    const popupContent = `
      <div class="popup-title">${drv.driver}</div>
      <div class="popup-type">🚗 ${drv.vehicle} · ${drv.id}</div>
      <div class="popup-status" style="background:${drv.status==='on_trip'?'#eff6ff':drv.status==='available'?'var(--g50)':'#fef2f2'};color:${drv.status==='on_trip'?'#1d4ed8':drv.status==='available'?'var(--g600)':'#991b1b'}">${statusLabel[drv.status]}</div>
      ${drv.status==='on_trip'?`<div class="popup-meta">📍 ${drv.from} → ${drv.to}</div><div class="popup-meta">👤 ${drv.passenger} · ${drv.km} km · ETA ${drv.eta}</div>`:''}
      <div class="popup-meta">🔋 Battery: ${drv.battery}</div>`;

    const m = L.marker([drv.lat, drv.lng], {icon: driverIcon})
      .addTo(mapEvAdmin)
      .bindPopup(popupContent, {maxWidth:240});

    // If on_trip, show destination marker too
    if (drv.status === 'on_trip') {
      const destTrip = DRIVER_TRIPS.find(t => t.from === drv.from && t.to === drv.to && t.status === 'active')
                    || DRIVER_TRIPS.find(t => t.from === drv.from);
      if (destTrip) {
        const destIcon = L.divIcon({
          className:'',
          html:`<div style="width:28px;height:28px;background:#d4a843;border:3px solid white;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 8px rgba(0,0,0,0.25)"></div>`,
          iconSize:[28,28], iconAnchor:[14,28], popupAnchor:[0,-30],
        });
        L.marker([destTrip.toLat, destTrip.toLng], {icon: destIcon})
          .addTo(mapEvAdmin)
          .bindPopup(`<div class="popup-title">🏁 ${drv.to}</div><div class="popup-meta">Destination for ${drv.driver}</div>`);
        L.polyline([[drv.lat, drv.lng],[destTrip.toLat, destTrip.toLng]], {
          color:'#3b82f6', weight:2, dashArray:'6,6', opacity:0.5
        }).addTo(mapEvAdmin);
      }
    }
  });

  renderEvDriverList();
}

function renderEvDriverList() {
  const el = document.getElementById('ev-driver-list');
  if (!el) return;
  const statusLabel = {on_trip:'🟦 On Trip', available:'🟢 Available', maintenance:'🔴 Maintenance'};
  el.innerHTML = EV_DRIVER_LOCATIONS.map(drv => `
    <div class="wp-item ${drv.status === 'on_trip' ? 'in_progress' : drv.status === 'available' ? 'resolved' : 'pending'}"
         onclick="focusEvDriver('${drv.id}')">
      <div class="wp-top">
        <span class="wp-id">${drv.id}</span>
        <span class="wp-badge ${drv.status==='on_trip'?'wb-in_progress':drv.status==='available'?'wb-resolved':'wb-pending'}">${statusLabel[drv.status]}</span>
      </div>
      <div class="wp-name">${drv.driver}</div>
      <div class="wp-type">🚗 ${drv.vehicle}</div>
      ${drv.status==='on_trip'?`<div class="wp-time">📍 ${drv.from} → ${drv.to} · 👤 ${drv.passenger}</div>`:`<div class="wp-time">📍 ${drv.from} · 🔋 ${drv.battery}</div>`}
    </div>`).join('');
}

function focusEvDriver(id) {
  const drv = EV_DRIVER_LOCATIONS.find(d => d.id === id);
  if (drv && mapEvAdmin) {
    mapEvAdmin.setView([drv.lat, drv.lng], 11, {animate:true});
  }
}

// ─────────────────────────────────────────
// WASTE PIN PERSISTENCE — cleanup status change updates map pins
// ─────────────────────────────────────────
// Waste reports already persist in WASTE_REPORTS array until status='resolved'
// Cleanup admin "resolveReport" changes status — already wired to update both maps.
// Pending/in-progress pins stay on map permanently until resolved.