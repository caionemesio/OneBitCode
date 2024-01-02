interface GetApi {
  id: number
  login: string
  name: string
  bio: string
  public_repos: number
  repos_url: string
}

interface GetRepos {
  name: string
  description: string
  fork: boolean
  stargazers_count: number
}
const users: GetApi[] = []

async function getUserGit(name: string): Promise<GetApi> {
  try {
    const response = await fetch(`https://api.github.com/users/${name}`)

    if (!response.ok) {
      throw new Error('User not found')
    }
    const data = await response.json()

    const user: GetApi = {
      id: data.id,
      login: data.login,
      name: data.name,
      bio: data.bio || "Não preenchida",
      public_repos: data.public_repos,
      repos_url: data.repos_url
    }
    users.push(user)
    return user

  } catch (error) {
    console.error(error)
    throw error
  }
}

function findUser(name: string): GetApi | null {
  const userFound = users.find((user) => user.login === name)
  if (userFound === undefined) {
    console.log(`O usuário ${name} não foi encontrado`)
  }
  return userFound || null
}

async function getRepository(user: GetApi) {
  const response = await fetch(user.repos_url)
  const data = await response.json()
  const userRepos: GetRepos[] = data.slice(0, 2).map((repo: any) => ({
    name: repo.name,
    description: repo.description || "Sem descrição",
    fork: repo.fork,
    stargazers_count: repo.stargazers_count
  }))

  if (user.public_repos > 1) {
    console.log(`Alguns repositórios de ${user.name}:`)
    userRepos.forEach((repo, index) => {
      console.log(`Repositório ${index + 1}:
      Nome:${repo.name}
      Descrição:${repo.description}
      Fork:${repo.fork ? 'Sim' : 'Não'}
      Stargazers Count: ${repo.stargazers_count}`)

    })
  }
  else if (user.public_repos === 1) {
    console.log(`Repositório existente de ${user.name}:\n
    Nome:${userRepos[0].name}
    Descrição:${userRepos[0].description}
    Fork:${userRepos[0].fork ? 'Sim' : 'Não'}
    Stargazers Count:${userRepos[0].stargazers_count}`)
  }
  else {
    console.log("O usuário não possui repositórios")
  }
}

async function showUserInfos(nameUser: string) {
  let user = findUser(nameUser)
  if (!user) {
    return
  }
  console.log(`Dados do usuário \nNome:${user.name} \nLogin:${user.login} \n ID:${user.id} \n Bio:${user.bio} \n Número de Repositórios:${user.public_repos}`)
  await getRepository(user)

}

async function showAllUsers() {
  console.log("Todos os Usuários:")
  for (const user of users) {
    console.log(`Dados do usuário \nNome:${user.name} \nLogin:${user.login} \nID:${user.id} \nBio:${user.bio} \nNúmero de Repositórios:${user.public_repos}`)
    await getRepository(user)
  };
}

function sumRepo() {
  const repostTotal = users.reduce((accumulator, user) => accumulator + user.public_repos, 0)
  console.log(`A soma dos repositórios dos usuários é: ${repostTotal}`)
}

function top5Users() {
  const top5Users = users.sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)

  let message = `Top ${top5Users.length} usuários com mais repositórios\n`
  top5Users.forEach(element => {
    message += `${element.name}:${element.public_repos} repositórios\n`
  });
  console.log(message)
}


// getUserGit('caionemesio')
// getUserGit('Guilherme-leo')
//showUserInfos('caionemesio')
// sumRepo()
// top5Users()




