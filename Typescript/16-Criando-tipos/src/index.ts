// let literal:"Hello, world"
// let pi:3.14159

// literal="aa"
// const test=5

// let option:number | boolean

// option=true

// let planet: "MERCURIO" | "VENUS" | "TERRA"
type Planet = "MERCURIO" | "VENUS" | "TERRA"
let planet: Planet


let homePlanet: Planet

function checkPlanet(planet: Planet) {
  if (planet === "TERRA") {
    console.log('ESTAMOS NA TERRA')
  }

}

type GreetingCallback = (name: string) => void
function greet(callbackfn: GreetingCallback) {
  let name = "caio"
  callbackfn(name)
}