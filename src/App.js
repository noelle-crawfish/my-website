import Home from './Home.js'
import Blog from './Blog.js'
import Projects from './Projects.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
