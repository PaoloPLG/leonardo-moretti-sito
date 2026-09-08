// Header solido on scroll
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// Active link highlight — only meaningful on pages with in-page sections (index.html)
const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

if (currentPage === 'index.html' || currentPage === '') {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href') || '';
          link.classList.toggle('active', href === '#' + id || href === 'index.html#' + id);
        });
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));
} else {
  // On standalone pages (media.html, contatti.html, biografia.html), keep the
  // server-rendered "active" class already set on the matching nav link.
}

// Contact form — demo only (only present on contatti.html)
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Demo: collega questo form a un servizio come Formspree o Netlify Forms per riceverlo via email.');
  });
}
