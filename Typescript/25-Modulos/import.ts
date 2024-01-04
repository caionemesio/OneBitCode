import Spaceship from "./export";
import * as _ from "lodash"

interface BattleSpaceship extends Spaceship {
  weapons: number
}

let xwing: BattleSpaceship = {
  name: "X-wing",
  pilot: "Luke skywalker",
  speed: 50,
  weapons: 4
}
console.log(_.camelCase(xwing.pilot))