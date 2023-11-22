let count=0;
function confirmacao(){
  const confirmacao=confirm("Você confirma a escalação desse jogador?")

  if (confirmacao){
    addJogador()
    limparForm()
  }
}

function limparForm(){
  document.getElementById('posicao').value=""
  document.getElementById('namePlayer').value=""
  document.getElementById('camisa').value=""
}


function addJogador(){
  count++
 const playersSection=document.getElementById('players-list')
  const h2= document.createElement('h2')
  
  h2.innerHTML="Jogador "+count
  
  const ul= document.createElement('ul')
  const posicaoLi=document.createElement('li')
  posicaoLi.innerHTML="Posição do jogador: "
  const posicaoTxt=document.createElement('p')
  posicaoTxt.innerHTML=document.getElementById('posicao').value
  posicaoLi.appendChild(posicaoTxt)
  ul.appendChild(posicaoLi)

  
  const nameLi=document.createElement('li')
  nameLi.innerHTML="Nome do jogador: "
  const nameTxt=document.createElement('p')
  nameTxt.innerHTML=document.getElementById('namePlayer').value
  nameLi.appendChild(nameTxt)
  ul.appendChild(nameLi)

  const camisaLi=document.createElement('li')
  const number=document.getElementById('camisa').value
  camisaLi.setAttribute('data-number', number);
  camisaLi.innerHTML="Número da camisa: "
  const camisaTxt=document.createElement('p')
  camisaTxt.innerHTML=document.getElementById('camisa').value
  camisaLi.appendChild(camisaTxt)
  ul.appendChild(camisaLi)


  playersSection.append(h2, ul)
  
}

function removeplayer() {
  const number = document.getElementById('numberToRemove').value;
  const players = document.querySelectorAll('[data-number="' + number + '"]');

  if (players.length > 0) {
    const confirmation = confirm('Remover o jogador ' + players[0].innerText + "?");

    if (confirmation) {
      players[0].parentNode.removeChild(players[0]);
      document.getElementById('numberToRemove').value = "";
    }
  }
}


// function removeplayer(){
//   const number= document.getElementById('numberToRemove').value
//   const players = document.querySelectorAll('[data-number="' + number + '"]');

//   if (playerToRemove){
//   const confirmation = confirm('Remover o jogador '+playerToRemove.innerText+"?")

//   if (confirmation){
//     players[0].parentNode.removeChild(players[0]);
//     document.getElementById('numberToRemove').value=""
//      }
//   }
// }

        
          



