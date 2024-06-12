const anterior = document.querySelector('.anterior');
const proximo = document.querySelector('.proximo');
const gruposNoticias = document.querySelectorAll('.gruponoticias');
var grupoAtual = 0;

function mostrarGrupo(index) {
    gruposNoticias.forEach((group, idx) => {
        group.classList.toggle('ativo', idx === index);
    });
}

anterior.addEventListener('click', (event) => {
    event.preventDefault();
    grupoAtual = (grupoAtual > 0) ? grupoAtual - 1 : gruposNoticias.length - 1;
    mostrarGrupo(grupoAtual);
});

proximo.addEventListener('click', (event) => {
    event.preventDefault(); 
    grupoAtual = (grupoAtual < gruposNoticias.length - 1) ? grupoAtual + 1 : 0;
    mostrarGrupo(grupoAtual);
});

mostrarGrupo(grupoAtual);

const itensCarrossel = document.querySelectorAll('.itemcarrossel');
var indiceAtual = 0;

function mostrarItemCarrossel(index) {
    itensCarrossel.forEach((item, idx) => {
        item.classList.toggle('ativo', idx === index);
    });
}

function proximoItemCarrossel() {
    indiceAtual = (indiceAtual + 1) % itensCarrossel.length;
    mostrarItemCarrossel(indiceAtual);
}
function expandCard(card){
  card.style.transform = 'scale(1.05)'
}
function maisinfo(button) {
    const infomais = button.nextElementSibling;
    if (infomais.style.display === 'block') {
        infomais.style.display = 'none';
        button.textContent = 'Mostrar mais';
    } else {
        infomais.style.display = 'block';
        button.textContent = 'Mostrar menos';
    }
}
setInterval(proximoItemCarrossel, 5000); 

mostrarItemCarrossel(indiceAtual);

