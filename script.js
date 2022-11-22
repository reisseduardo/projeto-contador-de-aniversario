const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDays() {
  let date_ini = new Date(document.form_main.date_ini.value);
  let date_end = new Date(document.form_main.date_end.value);

  let diff = date_end.getTime() - date_ini.getTime();

  document.getElementById('days').innerText = Math.floor(diff / day);
}

const trocaModal = () => {
	const modal = document.querySelector('.modal');
	const estiloAtual = modal.style.display;
	event.preventDefault();
	countDays();
	if(estiloAtual == 'block'){
		modal.style.display = 'none';
	}else{
		modal.style.display = 'block';
	}
}
const botao = document.querySelector('#btn');
	botao.addEventListener("click", trocaModal)

window.onclick = function(event){
	const modal = document.querySelector('.modal');
	if(event.target == modal){
		trocaModal();
	}
}
