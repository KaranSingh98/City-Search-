import React from 'react';
import logo from './logo.svg';
import './App.css';
import CitySearch from './components/citySearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> City Search </h1>
        <CitySearch />
      </header>
    </div>
  );
}

export default App;
