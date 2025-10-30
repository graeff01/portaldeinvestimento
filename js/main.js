const imoveis = [
  { titulo: "Casa Grande em Canoas", preco: "R$ 450.000", cidade: "canoas", img: "images/oportunidades/casa1.jpeg", wa: "5511988888888" },
  { titulo: "Sobrado Familiar - Porto Alegre", preco: "R$ 500.000", cidade: "portoalegre", img: "images/oportunidades/casa2.jpeg", wa: "5511977777777" },
  { titulo: "Cobertura em Santa Mônica", preco: "R$ 850.000", cidade: "santamonica", img: "images/oportunidades/sc.jpg", wa: "5511966666666" },
  { titulo: "Apartamento Moderno - Canoas", preco: "R$ 350.000", cidade: "canoas", img: "images/oportunidades/casa.webp", wa: "5511988888888" },
  { titulo: "Loft Prático - Porto Alegre", preco: "R$ 370.000", cidade: "portoalegre", img: "images/oportunidades/moinhos.jpg", wa: "5511977777777" },
  { titulo: "Studio Compacto - Santa Mônica", preco: "R$ 280.000", cidade: "santamonica", img: "images/oportunidades/sc.jpg", wa: "5511966666666" },
];

function renderImoveis(filtro = null) {
  const lista = document.getElementById('listaImoveis');
  lista.innerHTML = "";
  const filtrados = filtro ? imoveis.filter(im => im.cidade === filtro) : imoveis;
  filtrados.forEach(im => {
    lista.innerHTML += `
      <div class="card">
        <img src="${im.img}" alt="${im.titulo}" />
        <div class="card-body">
          <h3>${im.titulo}</h3>
          <p>${im.preco}</p>
          <a href="https://wa.me/${im.wa}" target="_blank">Falar com a agência</a>
        </div>
      </div>`;
  });
}

function filterImoveis(cidade) {
  renderImoveis(cidade);
  document.getElementById('imoveis').scrollIntoView({ behavior: 'smooth' });
}

function enviarFormulario() {
  document.getElementById('mensagemForm').innerText = "Mensagem enviada com sucesso!";
  return false;
}

function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  menu.style.left = (menu.style.left === '0px') ? '-250px' : '0px';
}

window.addEventListener('scroll', () => {
  const fixedCta = document.getElementById('fixedCta');
  fixedCta.style.display = window.scrollY > 300 ? 'block' : 'none';
});

renderImoveis();

// POPUP LEAD - aparece após 6 segundos
setTimeout(() => {
  const popup = document.getElementById("popupLead");
  if (popup) popup.style.display = "flex";
}, 6000);

function fecharPopup() {
  const popup = document.getElementById("popupLead");
  if (popup) popup.style.display = "none";
}

