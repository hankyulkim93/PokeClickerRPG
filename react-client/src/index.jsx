import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Game from './components/Game.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (<div>
      <h1>PokéClickerRPG</h1>
      <Login />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));