var spaceships = [];
function saveSpaceship(name, pilot, crewLimit) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    return spaceship;
}
function addCrew(name, spaceship) {
    if (spaceship.crew.length < spaceship.crewLimit) {
        spaceship.crew.push(name);
        alert("O tripulante ".concat(name, " foi adicionado com sucesso"));
    }
    else {
        alert("N\u00E3o foi possivel adicionar o tripulante ".concat(name, ", A tripula\u00E7\u00E3o chegou no limite m\u00E1ximo"));
    }
}
function sendSpaceship(spaceship) {
    if (spaceship.inMission === false && spaceship.crew.length >= Math.floor(1 / 3 * spaceship.crewLimit)) {
        alert("A espa\u00E7onave ".concat(spaceship.name, " foi enviada para uma miss\u00E3o"));
        spaceship.inMission = true;
    }
    else if (spaceship.crew.length < Math.floor(1 / 3 * spaceship.crewLimit)) {
        alert("A espa\u00E7onave ".concat(spaceship.name, " n\u00E3o possui tripulantes suficientes para a miss\u00E3o"));
    }
    else {
        alert("A espa\u00E7onave ".concat(spaceship.name, " j\u00E1 est\u00E1 em miss\u00E3o"));
    }
}
function listSpaceships(spaceships) {
    var mensagem = "";
    spaceships.forEach(function (spaceship) {
        var missao = spaceship.inMission ? "Em missão" : "Aguardando missão";
        mensagem += "Nave ".concat(spaceship.name, "\n");
        mensagem += "Piloto: ".concat(spaceship.pilot, "\n");
        mensagem += "Tripulantes: ".concat(spaceship.crew.length, "\n");
        mensagem += "Tamanho m\u00E1ximo: ".concat(spaceship.crewLimit, "\n");
        mensagem += "Status: ".concat(missao, "\n\n");
    });
    alert(mensagem);
}
var option;
var _loop_1 = function () {
    option = prompt("Escolha uma opção:\n1-Adicionar Aeronave\n2-Adicionar tripulante\n" +
        "3-Enviar aeronave para missão\n4-Listar aeronaves\n5-Encerrar programa");
    switch (option) {
        case "1":
            var spaceshipName = prompt("Qual o nome da nave?");
            var spaceshipPilot = prompt("Qual o nome do piloto?");
            var crewLimit = Number(prompt("Qual o número máximo de tripulantes?"));
            saveSpaceship(spaceshipName, spaceshipPilot, crewLimit);
            break;
        case "2":
            var nameCrew = prompt("Qual nome do tripulante que deseja adicionar?");
            var nameSpaceship_1 = prompt("Qual nome da nave que deseja adicionar o tripulante?");
            var foundSpaceship = spaceships.find(function (spaceship) { return spaceship.name === nameSpaceship_1; });
            if (foundSpaceship) {
                addCrew(nameCrew, foundSpaceship);
            }
            else {
                alert("A nave ".concat(nameSpaceship_1, " n\u00E3o existe!"));
            }
            break;
        case "3":
            var spaceshipToMission_1 = prompt("Qual o nome da espaçonave que deseja enviar em missão?");
            var foundSpaceship2 = spaceships.find(function (spaceship) { return spaceship.name === spaceshipToMission_1; });
            if (foundSpaceship2) {
                sendSpaceship(foundSpaceship2);
            }
            else {
                alert("A nave ".concat(spaceshipToMission_1, " n\u00E3o existe!"));
            }
            break;
        case "4":
            listSpaceships(spaceships);
            break;
        case "5":
            alert("Encerrando o programa...");
            break;
        default:
            alert("Opção não encontrada, tente novamente");
    }
};
do {
    _loop_1();
} while (option !== "5");
