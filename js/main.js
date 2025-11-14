// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.style.display = expanded ? 'none' : 'grid';
  });
  // Close on link click (mobile)
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (window.innerWidth < 900) {
      navMenu.style.display = 'none';
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }));
}

// IntersectionObserver for reveal animations
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  }
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Smooth scrolling offset for anchors (CSS smooth scroll is on)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 60; // header offset
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.pushState(null, '', href);
    }
  });
});

// Contact form handling (optional Formspree)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const data = new FormData(form);
    const action = form.getAttribute('action') || '';

    // Simple client-side validation
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();
    const emailOk = /.+@.+\..+/.test(email);
    const setError = (id, msg) => {
      const el = form.querySelector(`#${id} ~ .error`);
      if (el) el.textContent = msg || '';
    };
    setError('name', !name ? 'Please enter your name' : '');
    setError('email', !emailOk ? 'Please enter a valid email' : '');
    setError('message', !message ? 'Please enter a message' : '');
    if (!name || !emailOk || !message) return;

    if (action.includes('{{FORMSPREE_ID}}')) {
      // No endpoint configured: fallback to mailto
      window.location.href = `mailto:your.email@example.com?subject=Portfolio%20Contact%20-%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
      if (status) status.textContent = 'Opening your email client…';
      return;
    }

    try {
      if (status) status.textContent = 'Sending…';
      const res = await fetch(action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        form.reset();
        if (status) status.textContent = 'Thanks! Your message has been sent.';
      } else {
        if (status) status.textContent = 'Something went wrong. Please try again later.';
      }
    } catch (err) {
      if (status) status.textContent = 'Network error. Please try again later.';
    }
  });
}
