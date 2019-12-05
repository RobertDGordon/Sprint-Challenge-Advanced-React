import React, {useState} from 'react';
import {useFetchData} from './hooks/useFetchData'

import PlayerCard from './components/PlayerCard'

import styled from 'styled-components'
import './App.css';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`

function App() {

  const [players] = useFetchData([])
  const [showPlayers, setShowPlayers] = useState(false)

  // console.log(players)

  return (
    <div className="App">
      <header>
        <h1>Women's World Cup</h1>
        <button onClick={()=>{setShowPlayers(!showPlayers)}}>Show the players</button>
      </header>
      <Cards>
        {!showPlayers ? <></> : players.map(player =>{return <PlayerCard key={player.id} {...player} />})}
      </Cards>
    </div>
  );
}

export default App;
