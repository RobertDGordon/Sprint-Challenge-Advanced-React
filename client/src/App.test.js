import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerCard from './components/PlayerCard'

import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('Renders App without crashing',() =>{
  render(<App />)
})

it('Expects Players to be defined', () =>{
  const players = <PlayerCard />;
  expect(players).toBeDefined();
})

it('Renders PlayerCard without crashing',() =>{
  render(<PlayerCard />)
})

it('Renders show the players button', () =>{
  const wrapper = render(<App />);
  expect(wrapper.getByText(/show the players/i))
})

it('Fires show players button', () => {

  const { getByText } =  render(<App />);
  const showPlayersButton = getByText(/show the players/i);

  fireEvent.click(showPlayersButton)

  expect(showPlayersButton)
})