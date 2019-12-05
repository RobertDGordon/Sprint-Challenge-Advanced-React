import React, {useState} from 'react';
import {useFetchData} from './hooks/useFetchData'

import PlayerCard from './components/PlayerCard'

import './App.css';

function App() {

  const [players] = useFetchData([])
  const [showPlayers, setShowPlayers] = useState(false)



  console.log(players)

  return (
    <div className="App">
      <header>
        <h1>Women's World Cup</h1>
        <button onClick={()=>{setShowPlayers(!showPlayers)}}>Show the players</button>
      </header>
      <div>
        {!showPlayers ? <></> : <div>{players.map(player =>{return <PlayerCard key={player.id} {...player} />})}</div>}
      </div>
    </div>
  );
}

export default App;
