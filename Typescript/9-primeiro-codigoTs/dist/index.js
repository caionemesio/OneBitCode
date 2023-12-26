function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name));
    }
}
var spaceshipName = prompt("Insira o nome da nave para ser enviada");
var spaceshipCaptain = prompt("Insira o nome do capitão da nave");
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt('Insira a velocidade que deseja acelerar'));
accelerate(speed, currentShip);
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
