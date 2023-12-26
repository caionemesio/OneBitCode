function sendSpaceship(name:string,captain:string) {
  const spaceship={
    name,
    captain,
    speed:20,
    inMission:true,
    crew:[]

  }
  alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão`)

  return spaceship
}

function accelerate(targetSpeed:number,spaceship:{name:string, speed:number}){
  if (spaceship.speed>targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
  } else if (spaceship.speed<targetSpeed){
    alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
  }else{
    alert(`Mantendo a velocidade da ${spaceship.name}`)
  }
}

const spaceshipName =prompt("Insira o nome da nave para ser enviada")
const spaceshipCaptain =prompt("Insira o nome do capitão da nave")
const currentShip = sendSpaceship(spaceshipName,spaceshipCaptain)

const speed = Number(prompt('Insira a velocidade que deseja acelerar'))
accelerate(speed,currentShip)


//TUPLAS:
// let crew: [string,string,string]
// crew[0]='caio'
// crew[1]='leo'
// crew[2]='caiao'
// crew[3]=;

// let point: [number,number]
// point=[2,5]

// let[x,y]=point




//ENUNS:

// enum Planets{
//   MERCURIO='Mercurio',
//   VENUS='Venus',
//   TERRA='Terra',
//   MARTE='Marte'
// }
// Planets.TERRA

// enum Roles {
//   ADMIN='admin',
//   USER='user'
// }
// Roles.ADMIN


