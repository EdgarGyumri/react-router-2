import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Posts } from './view';
import Comments from './components/comments';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=':postId' element={<Comments />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
