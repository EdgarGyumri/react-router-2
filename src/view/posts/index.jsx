import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Post } from '../../components'
import './style.css'

export default function Posts(){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(result => {
            setPosts(result)
          })
    }, [])
    return (
        <div className="container">
            <div className="posts-item">
              {
                posts.map(item => {
                  return (
                    <Link to={'' + item.id} key={item.id}>
                      <Post id={item.id} title={item.title} body={item.body} />
                    </Link>
                  )
                })
              }
            </div>
            <div className='posts-item'>
              <Outlet />
            </div>
        </div>
    )
}