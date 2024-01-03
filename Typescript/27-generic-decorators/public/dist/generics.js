// function first (array){
//     return array[0]
// }
// function last<ArrayType>(array:ArrayType[]): ArrayType | undefined{
//     return array[array.length -1]
// }
// const pilots=["caio","caua","carlito"]
// Se deixássemos sem o tipo Ship desativaríamos
// totalmente o typescript para esse argumento
function cloneShip(ship, newName, newPilot) {
    const newShip = ship;
    newShip.name = newName;
    newShip.pilot = newPilot;
    return newShip;
}
const falcon = {
    name: 'Millenium Falcon',
    pilot: 'Han'
};
const xWing = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
};
// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
const copy1 = cloneShip(falcon, 'Milano', 'Peter');
const copy2 = cloneShip(xWing, 'Black One', 'Poe');
// O tipo Ship não estaria correto aqui
const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy');
// Mas podemos explicitamente passar o tipo para a função
// e agora temos o tipo EnemyShip atribuido corretamente
const enemyCopy2 = cloneShip(falcon, 'Enemy', 'Enemy');
// Aqui temos um erro por conta do tipo Ship
// enemyCopy.flag = 'Imperial'
// Já aqui temos a propriedade opcional flag
enemyCopy2.flag = 'Imperial';
