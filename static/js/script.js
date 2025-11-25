// Mostrar sección de contacto
document.getElementById('contactBtn').addEventListener('click', () => {
  document.getElementById('contact').classList.remove('hidden');
  document.getElementById('contactBtn').textContent = 'Enviar mensaje';
});

// Simular envío de formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  document.getElementById('formResponse').textContent = `Gracias ${name}, tu mensaje ha sido enviado.`;
  this.reset();
});

// Animación de aparición para las tarjetas de habilidades
const skillCards = document.querySelectorAll('.skill-card');
window.addEventListener('scroll', () => {
  skillCards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});
