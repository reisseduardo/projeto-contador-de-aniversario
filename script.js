const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDays() {
    const hoje = new Date()
    const dia = hoje.getDate().toString().padStart(2, '0')
    const mes = String(hoje.getMonth() + 1).padStart(2, '0')
    const ano = hoje.getFullYear()
    const dataAtual = `${dia} / ${mes} / ${ano}`
    let date_end = new Date(document.form_main.date_end.value);

    let diff = date_end.getTime() - hoje.getTime();

    document.getElementById('days').innerText = Math.floor(diff / day);
}

const trocaModal = () => {
    const modal = document.querySelector('.modal');
    const estiloAtual = modal.style.display;
    event.preventDefault();
    countDays();
    if (estiloAtual == 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}
const botao = document.querySelector('#btn');
botao.addEventListener("click", trocaModal)

window.onclick = function (event) {
    const modal = document.querySelector('.modal');
    if (event.target == modal) {
        trocaModal();
    }
}
const corPadrao = document.querySelector('#corPadrao');
corPadrao.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightgrey";
})
const corAzul = document.querySelector('#corAzul');
corAzul.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
})
const corAmarela = document.querySelector('#corAmarela');
corAmarela.addEventListener("click", function () {
    document.body.style.backgroundColor = "yellowgreen";
})
