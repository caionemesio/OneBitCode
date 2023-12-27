// type Planet = string
// type Planet = {
//   name: string
//   sattelites: string[]
// }

interface CelestialBody {
  name: string
  mass: number
}

interface Star extends CelestialBody {
  age: number
  planets: string[]
}

interface Planet extends CelestialBody {
  population: number
  createSatellite: (name: String) => void
}

let sun: Star
sun.name = "sol"
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10 ** 9)
sun.planets = ["venus", "terra", "marte"]


// type Asteroid = CelestialBody & {
//   size: number
// }


// let asteroid:Asteroid
// asteroid.name

class MilkWayPlanet implements Planet {
  name: string
  mass: number
  population: number
  constructor(name: string, mass: number, population: number) {
    this.name = name
    this.mass = mass
    this.population = population
  }
  createSatellite(name: String) {

  }
}