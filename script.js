const services = [
  ['General Dental Checkups', 'Preventive checkups that catch issues early and protect long-term oral health.'],
  ['Emergency Dental Care', 'Fast guidance for severe tooth pain, swelling, trauma, and urgent treatment needs.'],
  ['Cosmetic Dentistry', 'Smile-enhancing options tailored for confidence, function, and natural-looking results.'],
  ['Teeth Cleaning & Hygiene', 'Professional cleaning that helps reduce plaque buildup, gum irritation, and bad breath.'],
  ['Dental Implants', 'Stable tooth replacement options designed to restore chewing comfort and smile structure.'],
  ['Root Fillings', 'Careful root treatment to relieve pain and preserve natural teeth whenever possible.'],
  ['Dental Crowns', 'Strong, aesthetic crowns to restore damaged teeth and support daily function.'],
  ['Extractions', 'Safe extractions with clear explanations and supportive aftercare instructions.'],
  ['Periodontal Care', 'Gum-focused treatment plans to improve oral health and prevent further complications.'],
  ['Dental Laboratory Services', 'Precision-made dental restorations coordinated for quality and treatment accuracy.']
];

const serviceImages = [
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1643297654411-fc5a04f7eaf7?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80'
];

const servicesGrid = document.getElementById('services-grid');
services.forEach(([title, description], idx) => {
  const card = document.createElement('article');
  card.className = 'card service-card reveal';
  card.innerHTML = `
    <img src="${serviceImages[idx % serviceImages.length]}" alt="${title} service placeholder image" />
    <div class="body">
      <h3>${title}</h3>
      <p>${description}</p>
      <a class="btn btn-secondary" href="#contact">Ask About This Service</a>
    </div>
  `;
  servicesGrid.appendChild(card);
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
});

const form = document.getElementById('appointment-form');
const success = document.getElementById('form-success');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  success.textContent = 'Thank you. Your demo appointment request was sent successfully.';
  form.reset();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, h2, .hero-copy, .section-note').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});
