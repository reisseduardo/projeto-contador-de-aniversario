const botao = document.querySelector('.btn');
const dataUsuario = new Date(document.querySelector('input[type="date"]'));
const date = new Date;
const today = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const todayDate = today + "/" + month + "/" + year;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;



console.log(date);
