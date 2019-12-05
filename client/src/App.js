import React, {useState, useEffect} from 'react';
import {useFetchData} from './hooks/useFetchData'

import './App.css';

function App() {

  const [players, setPlayers] = useFetchData([])



  console.log(players)

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
