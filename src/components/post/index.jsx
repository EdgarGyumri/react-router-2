import './style.css'

export default function Post({id, title, body}) {
  return (
    <div className='posts-element'>
      <span>ID: {id}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}