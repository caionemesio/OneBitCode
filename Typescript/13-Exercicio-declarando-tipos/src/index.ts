interface Spaceship {
  name: string;
  pilot: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}

const spaceships: Spaceship[] = [];



function saveSpaceship(name: string, pilot: string, crewLimit: number,) {

  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [] as string[],
    inMission: false

  }
  spaceships.push(spaceship)
  alert(`A nave ${spaceship.name} foi registrada`)
}

function addCrew(name: string, spaceship: { crewLimit: number, crew: string[] }) {
  if (spaceship.crew.length < spaceship.crewLimit) {
    spaceship.crew.push(name)
    alert(`O tripulante ${name} foi adicionado com sucesso`)
  } else {
    alert(`Não foi possivel adicionar o tripulante ${name}, A tripulação chegou no limite máximo`)
  }
}

function sendSpaceship(spaceship: { name: string, inMission: boolean, crewLimit: number, crew: string[] }) {
  if (spaceship.inMission === false && spaceship.crew.length >= Math.floor(1 / 3 * spaceship.crewLimit)) {
    alert(`A espaçonave ${spaceship.name} foi enviada para uma missão`)
    spaceship.inMission = true

  } else if (spaceship.crew.length < Math.floor(1 / 3 * spaceship.crewLimit)) {
    alert(`A espaçonave ${spaceship.name} não possui tripulantes suficientes para a missão`)
  }
  else {
    alert(`A espaçonave ${spaceship.name} já está em missão`)
  }
}

function listSpaceships(spaceships: Spaceship[]) {
  let mensagem = ""

  spaceships.forEach(spaceship => {
    const missao = spaceship.inMission ? "Em missão" : "Aguardando missão";
    mensagem += `Nave ${spaceship.name}\n`;
    mensagem += `Piloto: ${spaceship.pilot}\n`;
    mensagem += `Tripulantes: ${spaceship.crew.length}\n`;
    mensagem += `Tamanho máximo: ${spaceship.crewLimit}\n`;
    mensagem += `Status: ${missao}\n\n`;
  })
  alert(mensagem)
}



let option: string
do {

  option = prompt("Escolha uma opção:\n1-Adicionar Aeronave\n2-Adicionar tripulante\n" +
    "3-Enviar aeronave para missão\n4-Listar aeronaves\n5-Encerrar programa")
  switch (option) {
    case "1":
      const spaceshipName = prompt("Qual o nome da nave?")
      const spaceshipPilot = prompt("Qual o nome do piloto?")
      const crewLimit = Number(prompt("Qual o número máximo de tripulantes?"))
      saveSpaceship(spaceshipName, spaceshipPilot, crewLimit)
      break

    case "2":
      const nameCrew = prompt("Qual nome do tripulante que deseja adicionar?")
      const nameSpaceship = prompt("Qual nome da nave que deseja adicionar o tripulante?")

      const foundSpaceship = spaceships.find(spaceship => spaceship.name === nameSpaceship)

      if (foundSpaceship) {
        addCrew(nameCrew, foundSpaceship)
      } else {
        alert(`A nave ${nameSpaceship} não existe!`)
      }
      break

    case "3":
      const spaceshipToMission = prompt("Qual o nome da espaçonave que deseja enviar em missão?")
      const foundSpaceship2 = spaceships.find(spaceship => spaceship.name === spaceshipToMission)
      if (foundSpaceship2) {
        sendSpaceship(foundSpaceship2)
      } else {
        alert(`A nave ${spaceshipToMission} não existe!`)
      }
      break

    case "4":
      listSpaceships(spaceships)
      break

    case "5":
      alert("Encerrando o programa...")
      break

    default:
      alert("Opção não encontrada, tente novamente")

  }

} while (option !== "5")






