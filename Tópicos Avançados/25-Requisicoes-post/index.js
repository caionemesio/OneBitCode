function renderArticle(articleData){
  const article = document.createElement('article')
  article.classList.add('article')
  article.id=`article-${articleData.id}`

  const title = document.createElement('h3')
  title.classList.add('article-title')
  title.textContent=articleData.title

  const content = document.createElement('div')
  content.classList.add('article-content')
  content.innerHTML=articleData.content

  const author = document.createElement('div')
  author.classList.add('article-author')
  author.textContent=articleData.author

  article.append(title,author,content)
  document.getElementById('articles').append(article)
}

//Função get para mostrar todos os artigos
async function fetchArticles(){
//Outro jeito de fazer:
// const articles = await fetch('http://localhost:3000/articles').then(res=>res.json())
  const response = await fetch('http://localhost:3000/articles')
  const articles = await response.json()

  articles.forEach(renderArticle)

}
document.addEventListener('DOMContentLoaded',()=>{
  fetchArticles()
})


//Função para salvar o arquivo e mostrar na tela sem ir para outra pagina
const form = document.querySelector('form')
form.addEventListener('submit',async (ev)=>{
  ev.preventDefault()

  const articleData={
    title:document.querySelector('#title').value,
    author:document.querySelector('#author').value,
    content:document.querySelector('#content').value
  }

  const response= await fetch('http://localhost:3000/articles',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(articleData)
  })

  const savearticle= await response.json()
  form.reset()
  renderArticle(savearticle)
  console.log(savearticle)
})