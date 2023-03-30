import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {Home} from "./Home"
import { Podcast } from './Podcast';
import { MovieList } from './MovieList';
import './App.css';


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/Podcast">Podcasts</Link>
          <li>
            <Link to="/MovieList">Movies</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Podcast" element={<Podcast/>} />
        <Route path="/MovieList" element={<MovieList/>} />
      </Routes>
    
    </>
  );
}

export default App;
