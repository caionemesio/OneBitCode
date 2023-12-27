const planets = [];
function savePlanet(name, point, situation) {
    const planet = {
        name,
        point,
        situation,
        satellites: []
    };
    planets.push(planet);
}
function findPlanet(name) {
    const planetFinded = planets.find(planet => planet.name === name);
    return planetFinded || null;
}
function updateSituation(newSituation, planet) {
    if (findPlanet(planet.name)) {
        planet.situation = newSituation;
    }
    else {
        alert(`O planeta ${planet.name} não foi encontrado`);
    }
}
function addSatellite(satelliteName, planet) {
    planet.satellites.push(satelliteName);
    alert(`O satélite ${satelliteName} foi adicionado ao planeta ${planet.name}`);
}
function removeSatellite(satelliteName, planet) {
    const satelliteIndex = planet.satellites.findIndex(satellite => satellite === satelliteName);
    if (satelliteIndex !== -1) {
        planet.satellites.splice(satelliteIndex, 1);
        alert(`O satélite ${satelliteName} foi removido com sucesso`);
    }
    else {
        alert(`O satélite ${satelliteName} não existe no platena ${planet.name}`);
    }
}
function ListPlanets() {
    console.log("testando se foi chamada");
    let mensagem = "Planetas registrados: \n";
    planets.forEach(planet => {
        mensagem += `Nome: ${planet.name}\n`;
        mensagem += `Coordenadas: ${planet.point[0]} ${planet.point[1]} ${planet.point[2]} ${planet.point[3]} \n`;
        mensagem += `Situação: ${planet.situation}\n`;
        mensagem += `Quantidade de satélites: ${planet.satellites.length}\n \n`;
    });
    alert(mensagem);
}
function isValidSituation(input) {
    return ["habitado", "habitável", "inabitável", "inexplorado"].includes(input);
}
function verifySituation(SittuationPlanet) {
    let situation = null;
    do {
        if (isValidSituation(SittuationPlanet)) {
            situation = SittuationPlanet;
        }
        else {
            alert("Situação inválida, tente novamente");
            SittuationPlanet = prompt("Qual a situação do planeta?");
        }
    } while (!situation);
    return situation;
}
function case1() {
    const namePlanet = prompt("Qual o nome do planeta?");
    const coord = [];
    coord.push(Number(prompt("Qual o valor da coordenada 1?")));
    coord.push(Number(prompt("Qual o valor da coordenada 2?")));
    coord.push(Number(prompt("Qual o valor da coordenada 3?")));
    coord.push(Number(prompt("Qual o valor da coordenada 4?")));
    const situation = verifySituation(prompt("Qual a situação do planeta?"));
    savePlanet(namePlanet, coord, situation);
    alert(`Planeta ${namePlanet} salvo com sucesso`);
}
function case2() {
    const planetName = prompt("Qual o planeta que deseja alterar?");
    const planetExist = findPlanet(planetName);
    if (planetExist) {
        const newSittuationPlanet = verifySituation(prompt("Qual a nova situação do planeta?"));
        planetExist.situation = newSittuationPlanet;
        alert(`A situação do planeta ${planetName} foi atualizada para ${newSittuationPlanet}`);
    }
    else {
        alert(`O planeta ${planetName} não existe`);
    }
}
function case3() {
    const planetName = prompt("Em qual planeta deseja adicionar o satélite?");
    const planetExist = findPlanet(planetName);
    if (planetExist) {
        const satelliteName = prompt("Qual o nome do satélite que deseja adicionar?");
        addSatellite(satelliteName, planetExist);
    }
    else {
        alert(`O planeta ${planetName} não existe`);
    }
}
function case4() {
    const planetName = prompt("Em qual planeta deseja remover o satélite?");
    const planetExist = findPlanet(planetName);
    if (planetExist) {
        const satelliteName = prompt("Qual o nome do satélite que deseja remover?");
        removeSatellite(satelliteName, planetExist);
    }
    else {
        alert(`O planeta ${planetName} não existe`);
    }
}
let option;
do {
    option = prompt("Escolha uma opção:\n1-Adicionar Planeta\n2-Atualizar situação de um planeta\n" +
        "3-Adicionar satélite\n4-Remover satélite\n5-Listar planetas\n6-Encerrar programa");
    switch (option) {
        case "1":
            case1();
            break;
        case "2":
            case2();
            break;
        case "3":
            case3();
            break;
        case "4":
            case4();
            break;
        case "5":
            ListPlanets();
            break;
        case "6":
            alert("Encerrando o programa...");
            break;
        default:
            alert("Opção não encontrada, tente novamente");
    }
} while (option !== "6");
