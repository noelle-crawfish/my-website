import * as React from "react"

import Blog from './Blog.js'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Blog data={data}/>
    /*   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>*/
  );
}

export default App;
