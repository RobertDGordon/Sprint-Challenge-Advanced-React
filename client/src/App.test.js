import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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