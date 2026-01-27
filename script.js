document
  .getElementById("form-whatsapp")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `
Olá, gostaria de mais informações.

Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Assunto: ${assunto}
Mensagem: ${mensagem}
    `;

    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = "5514988060686"; // DDI + DDD + número

    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    // Abre o WhatsApp corretamente
    window.open(url, "_blank");

    // Limpa o formulário
    event.target.reset();
  });

document.querySelectorAll(".boutique-card").forEach((card) => {
  const track = card.querySelector(".carousel-track");
  const images = card.querySelectorAll(".carousel-track img");
  const prev = card.querySelector(".prev");
  const next = card.querySelector(".next");

  // 🔒 Proteção: se não existir carrossel, ignora o card
  if (!track || images.length <= 1 || !prev || !next) return;

  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateCarousel();
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  });
});
