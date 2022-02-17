import './style.css'

export default function Comment({id, name, body}){
  return (
    <div className="comment">
      <span>ID: {id}</span>
      <h3>{name}</h3>
      <p>{body}</p>
    </div>
  )
}