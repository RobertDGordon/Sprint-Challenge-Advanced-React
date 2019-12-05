import React, {useState, useEffect} from 'react';

import './App.css';

function App() {

  const [players, setPlayers] = useState([])

  // const fetchData = ()=>{
    useEffect(()=>{
      fetch('http://localhost:5000/api/players')
      .then (res => res.json())
      .then (res => setPlayers(res))
      .catch (err => {console.log(err)})
    },[])
  // }

    console.log(players)

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
