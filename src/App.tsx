import React from 'react';

import GoBtn from './Components/GoBtn/GoBtn';
import Navbar from './Components/Navbar/Navbar';
import TitleRepos from './Components/TitleRepos/TitleRepos';
import {Routes, Route, Link } from 'react-router-dom';

import {Home} from './Pages'
import About from './Pages/About/About';
import Repolist from './Pages/Repolist/Repolist'

function App() {
  return (
    <>
    <div className="App" >
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/repolist' element={<Repolist/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
