// main.js
document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.social-links i');

  if (!icons.length) return;

  icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.5)';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1)';
    });
  });
});
