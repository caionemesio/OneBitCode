import { format } from 'date-fns'
import { useState } from "react"

export default function useCommentsCCollection() {
  const [comments, setComments] = useState([])

  const addComments = ({ email, comment }) => {
    const id = Math.floor(Math.random() * 1000000)
    const date = new Date()
    const formattedDate = format(date, 'dd/MM/yyyy')
    const formattedTime = format(date, 'HH:mm:ss')

    const commentToArray = { id, email, comment, date: formattedDate, time: formattedTime }
    setComments(state => {
      return [commentToArray, ...state]
    })
  }
  return { comments, addComments }
}