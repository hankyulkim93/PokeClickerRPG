import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h1>PokéClickerRPG</h1>
      <Login />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));