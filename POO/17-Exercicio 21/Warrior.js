import { Character } from "./Character.js";


export class Warrior extends Character{
  constructor(nome,pVida,pAtaque, pDefesa,pShild){
    super(nome,pVida,pAtaque, pDefesa)
    this.pShild=pShild
    this.position=true
    //true é ataque false é defesa
  }
  atacar(alvo){
    if (this.position===true){
      const damage=  this.pAtaque - alvo.pDefesa
      alvo.pVida-=damage 
      alvo.pVida=Math.max(alvo.pVida,0)
      
    }
  }
  chagePosition(){
    if (this.position===true){
      this.position=false
      this.pDefesa+=this.pShild
    }else{
      this.position=true
    }
  }
}