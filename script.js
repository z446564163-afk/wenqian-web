const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  toggle?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: .12 });
document.querySelectorAll('.section, .principles').forEach(section => observer.observe(section));
