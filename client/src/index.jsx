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
      <h1><img src='/images/title.png' /></h1>
      <Login />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));