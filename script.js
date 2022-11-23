const segundo = 1000;
const minuto = segundo * 60;
const hora = minuto * 60;
const dia = hora * 24;
const modal = document.querySelector('.modal');

function contaDias() {
 	let hoje = new Date()
 	let dataUsuario = new Date(document.form_main.dataUsuario.value);
 	let contagem = dataUsuario.getTime() - hoje.getTime();

 	document.getElementById('dias').innerText = Math.floor(contagem / dia);
}

const trocaModal = () => {
	const estiloAtual = modal.style.display;
	event.preventDefault();
	contaDias();
	if(estiloAtual == 'block'){
		modal.style.display = 'none';
	}else{
		modal.style.display = 'block';
	}
}
const botao = document.querySelector('#btn');
	botao.addEventListener("click", trocaModal)

window.onclick = function(event){	
	if(event.target == modal){
		trocaModal();
	}
}
const corPadrao = document.querySelector('#corPadrao');
	corPadrao.addEventListener("click", function(){
		document.body.style.backgroundColor = "lightgrey";
	})
const corAzul = document.querySelector('#corAzul');
	corAzul.addEventListener("click", function(){
		document.body.style.backgroundColor = "lightblue";
	})
const corAmarela = document.querySelector('#corAmarela');
	corAmarela.addEventListener("click", function(){
		document.body.style.backgroundColor = "yellowgreen";
	})
