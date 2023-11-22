import { Character } from "./Character.js";


export class Thief extends Character{
  
  atacar(alvo){
    const damage=  this.pAtaque - alvo.pDefesa
    alvo.pVida-=damage*2
  }
}