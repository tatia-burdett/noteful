import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Notes from './Notes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Notes />
    </BrowserRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div);
});
