import React from 'react';
import './App.css';
import NavBar from './NavBar';
import MovieList from './API/MovieList';

function App() {
  return (
    <div>
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;
