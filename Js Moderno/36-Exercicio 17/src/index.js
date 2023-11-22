import dayjs from "dayjs";
import './styles/index.css'
document.addEventListener('DOMContentLoaded', ()=> {
  const section = document.getElementById('content');
  const dataNaTela = document.createElement('h1');
  dataNaTela.classList.add('styleClass')
  dataNaTela.innerHTML ="Hoje é "+ dayjs().format('DD/MM/YYYY');
  section.appendChild(dataNaTela);
});

// alert('Hoje é: '+dayjs().format('DD/MM/YYYY'))