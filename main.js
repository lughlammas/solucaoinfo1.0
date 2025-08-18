// Faz TODOS os ícones sociais crescerem no hover
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".social-links i");

  icons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.5)";
      icon.style.transition = "transform 0.3s ease";
    });

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1)";
    });
  });
});
