import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let tick = ()=>{
  ReactDOM.render(
      <App date={new Date()}/>,
    document.getElementById('root')        
  );

}

setInterval(tick, 1000);

