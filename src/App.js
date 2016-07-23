import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/Main';
import { Provider, connect } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
