function isMobile() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent,
  );
}

document
  .getElementById("form-whatsapp")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `
    Olá, gostaria de mais informações. 

    Nome: ${nome}
    Email: ${email}
    Telefone: ${telefone}
    Mensagem: ${mensagem}`;

    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = "5514988060686"; // DDI + DDD + número

    let url = "";

    if (isMobile()) {
      // Mobile → App do WhatsApp
      url = `whatsapp://send?phone=${numeroWhatsApp}&text=${textoCodificado}`;
    } else {
      // Desktop → WhatsApp Web
      url = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${textoCodificado}`;
    }

    window.open(url, "_blank");
  });
