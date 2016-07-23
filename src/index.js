import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

EcwidApp.init({
  app_id: "bulk-stock-control-dev", // place your application namespace here (not clientID)
  autoloadedflag: true,
  autoheight: true,
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
