/* ============================================================
   SHAHIN LATIFI — PORTFOLIO SCRIPTS
   ============================================================ */

// ---------- Mobile Menu ----------
const menuBtn  = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---------- Navbar Scroll Effect ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ---------- 3D Tilt Card ----------
const card   = document.getElementById('card3d');
const visual = card?.parentElement;

if (card && visual) {
  visual.addEventListener('mousemove', (e) => {
    const rect = visual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 25}deg) rotateX(${-y * 25}deg)`;
  });

  visual.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0) rotateX(0)';
  });
}

// ---------- Reveal on Scroll ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      if (entry.target.classList.contains('skill')) {
        const bar = entry.target.querySelector('.skill-bar span');
        if (bar) bar.style.transform = 'scaleX(1)';
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .skill').forEach(el => observer.observe(el));

// ---------- Active Nav Link Highlight ----------
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
  });

  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});