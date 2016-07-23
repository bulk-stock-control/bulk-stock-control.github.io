import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

EcwidApp.init({
  app_id: "bulk-stock-control-dev", // place your application namespace here (not clientID)
  autoloadedflag: true,
  autoheight: true,
});
const storeData = EcwidApp.getPayload();
export const storeId = storeData.store_id;
export const accessToken = storeData.access_token;


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
