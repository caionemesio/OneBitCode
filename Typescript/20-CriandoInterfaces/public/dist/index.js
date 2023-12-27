// type Planet = string
// type Planet = {
//   name: string
//   sattelites: string[]
// }
let sun;
sun.name = "sol";
sun.mass = 1.989 * (10 ** 30);
sun.age = 4.603 * (10 ** 9);
sun.planets = ["venus", "terra", "marte"];
// type Asteroid = CelestialBody & {
//   size: number
// }
// let asteroid:Asteroid
// asteroid.name
class MilkWayPlanet {
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    createSatellite(name) {
    }
}
