const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const form = document.querySelector('.contact-form');
const statusText = document.querySelector('.form-status');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    statusText.textContent = 'Please complete all fields correctly.';
    return;
  }

  statusText.textContent = 'Thanks! Your message has been sent.';
  form.reset();
});
