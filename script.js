
  // Language system
  let currentLang = 'en';
  function toggleLang() {
    currentLang = currentLang === 'en' ? 'sw' : 'en';
    const label = currentLang === 'en' ? '🌐 SW' : '🌐 EN';
    document.querySelectorAll('.lang-btn').forEach(b => b.textContent = label);
    document.querySelectorAll('[data-en]').forEach(el => {
      const txt = el.getAttribute('data-' + currentLang);
      if (txt) el.innerHTML = txt;
    });
    document.querySelectorAll('[data-ph-en]').forEach(el => {
      const ph = el.getAttribute('data-ph-' + currentLang);
      if (ph) el.placeholder = ph;
    });
    document.querySelectorAll('select option[data-en]').forEach(opt => {
      const txt = opt.getAttribute('data-' + currentLang);
      if (txt) opt.textContent = txt;
    });
    document.getElementById('html-lang').setAttribute('lang', currentLang === 'sw' ? 'sw' : 'en');
  }

  // Hamburger menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('show');
}

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });

  // Form submit
  function submitForm() {
    const n = document.getElementById('fname').value.trim();
    const p = document.getElementById('fphone').value.trim();
    if (!n || !p) {
      alert(currentLang === 'en' ? 'Please fill in your name and phone number.' : 'Tafadhali jaza jina lako na nambari ya simu.');
      return;
    }
    const prod = document.getElementById('fproduct').value;
    const msg = document.getElementById('fmsg').value;
    const waMsg = encodeURIComponent(
      (currentLang === 'en' ? 'Hello AAS! I am interested in your products.\n' : 'Habari AAS! Ninapenda bidhaa zenu.\n') +
      'Name/Jina: ' + n + '\nPhone/Simu: ' + p +
      (prod ? '\nProduct/Bidhaa: ' + prod : '') +
      (msg ? '\nMessage/Ujumbe: ' + msg : '')
    );
    window.open('https://wa.me/255785439315?text=' + waMsg, '_blank');
    document.getElementById('formSuccess').style.display = 'block';
    setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 5000);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });


