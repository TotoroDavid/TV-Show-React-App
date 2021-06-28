import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//state
import ShowsContext from './context/shows/ShowsState'


ReactDOM.render(
  <ShowsContext>
    <App />
  </ShowsContext>,
  document.getElementById('root')
);
