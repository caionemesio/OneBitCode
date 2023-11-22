export class Character{
  constructor(nome,pVida,pAtaque, pDefesa){
    this.nome=nome
    this.pVida=pVida
    this.pAtaque=pAtaque
    this.pDefesa=pDefesa
  }
  atacar(alvo){
    const damage=  this.pAtaque - alvo.pDefesa
    alvo.pVida-=damage 
    alvo.pVida=Math.max(alvo.pVida,0)
  }
}