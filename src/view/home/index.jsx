import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div>
            <h1>It's the homepage in our site</h1>
            <Link to="posts">Go to posts page</Link>
        </div>
    )
}