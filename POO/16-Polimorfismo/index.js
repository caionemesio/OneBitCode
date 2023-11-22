class Vehicle{
  move(){
    console.log('O veiculo esta se movendo')
  }
}

class Car extends Vehicle{
  move(){
    console.log('O carro está se movendo')
  }

  toString(){
    return 'Veículo'
  }
}

class Ship extends Vehicle{
  move(){
    console.log('O navio está navegando')
  }
  toString() {
    return 'Navio';
  }
}
class Plane extends Vehicle{
  move(speed){
    console.log(`O avião está voando a ${speed}km/h`)
  }
  toString() {
    return 'Avião';
  }
}
const ferrari = new Car()
const titanic = new Ship()
const Aviaozao= new Plane()



function start(vehicle,speed){
  console.log(`Iniciando o ${vehicle}`)
  vehicle.move(speed)
}
start(ferrari)
start(titanic)
start(Aviaozao,500)
