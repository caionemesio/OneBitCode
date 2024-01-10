import Form from "./Components/Form"
import  "./App.css"
import RenderComments from "./Components/RenderComments"
import useCommentsCollection from "./hooks/useCommentsCollection"

export default function App(){
  const{comments,addComments}= useCommentsCollection()
  return(
    <div className="container">
     <h2>Seção de Comentários</h2>
     <Form addComments={addComments}/>
     {comments.length>0 ? comments.map((comment)=>(
        <RenderComments 
        key={comment.id}
        comment={comment.comment}
        email={comment.email}
        date={comment.date}
        time={comment.time}
        />
     )):<p style={{marginTop:"20px"}}>Seja o primeiro a comentar</p>}
    </div>
  )
}