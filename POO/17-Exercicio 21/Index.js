import { Character } from "./Character.js";
import { Mage } from "./Mage.js";
import { Thief } from "./Thief.js";
import { Warrior } from "./Warrior.js";

//Ordem :nome,pVida,pAtaque, pDefesa

const caio = new Character('Caio',100,20,10)

const caua = new Mage('Caua',100,20,10,15)

const carlito= new Thief('Carlito',100,20,10)

const renata = new Warrior('Renata',100,20,10,10,10)

// caio.atacar(caua)
// console.log(caua)

// caua.atacar(caio)
// caua.heal(caio)
// console.log(caio)


// carlito.atacar(caua)
// console.log(caua)
// const section = document.getElementById('section')
// const VidaCaua= document.createElement('h2')
// VidaCaua.innerText= caua.pVida
// section.append(VidaCaua)

renata.atacar(carlito)

console.log(carlito)

renata.chagePosition()

console.log(renata)