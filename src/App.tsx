import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {Home} from "./Home"
import { Podcast } from './Podcast';
import { Movielist } from './Movie/MovieList';

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
            <Link to="/Movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Podcast" element={<Podcast/>} />
        <Route path="/Movies" element={<Movielist/>} />
      </Routes>
    
    </>
  );
}

export default App;
