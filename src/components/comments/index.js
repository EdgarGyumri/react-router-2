import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../comment/comment";

export default function Comments(){
  const {postId} = useParams()
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
      .then(response => response.json())
      .then(result => {
        setComments(result)
      })
  }, [postId]) 
  return (
    <div>
      {
        comments.map(item => {
          return (
            <Comment key={item.id} id={item.id} name={item.name} body={item.body} />
          )
        })
      }
    </div>
  )
}