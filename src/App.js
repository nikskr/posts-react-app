import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Posts from './pages/Posts';
import About from './pages/About';
import Navbar from './components/UI/navbar/Navbar';
import Error from './pages/Error';
import PostId from './pages/PostId';


function App() {
  return (
  <div className='App'>
  <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path='posts' element={<Posts />}/>
        <Route exact path='posts/:id' element={<PostId />}/>
        <Route path='about' element={<About />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  </div>
  
  )
}

export default App;
