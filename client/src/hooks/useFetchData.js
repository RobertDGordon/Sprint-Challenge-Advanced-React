import { useState, useEffect } from 'react';

export const useFetchData = () =>{
    const [players, setPlayers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/api/players')
        .then (res => res.json())
        .then (res => setPlayers(res))
        .catch (err => {console.log(err)})
      },[])
  
      return [players];
}