const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

function enviarWpp() {
  const nome = document.getElementById('f-nome').value.trim();
  const tel = document.getElementById('f-tel').value.trim();
  const proc = document.getElementById('f-proc').value;
  if (!nome || !tel) {
    alert('Por favor, preencha seu nome e WhatsApp.');
    return;
  }
  const msg = `Olá! Sou ${nome}, meu WhatsApp é ${tel}. Tenho interesse em: ${proc || 'avaliação geral'}. Gostaria de agendar uma consulta!`;
  window.open(`https://wa.me/5511973114444?text=${encodeURIComponent(msg)}`, '_blank');
}
