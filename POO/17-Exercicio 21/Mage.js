import { Character } from "./Character.js";

export class Mage extends Character{
  constructor(nome,pVida,pAtaque, pDefesa,pMagia){
    super(nome,pVida,pAtaque, pDefesa)
    this.pMagia=pMagia
  }
  atacar(alvo){
    const damage=  (this.pAtaque+this.pMagia) - alvo.pDefesa
    alvo.pVida-=damage
  }
  heal(alvo){
    const heal = this.pMagia*2
    alvo.pVida+=heal
  }
}