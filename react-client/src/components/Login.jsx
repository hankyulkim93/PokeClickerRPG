import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Game from './Game.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.username);
    console.log('needs to move to the next page or sequence of actual game');
    console.log('username needs to be stored in database');

    $.ajax({
      type: 'POST',
      url: '/usernames',
      data: this.state.username,
      dataType: JSON,
      success: function() {
        console.log('success');
      }
    })

  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });

  }

  render() {
    return (
      <Router>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <Link to="/game">
            <button>Submit</button>
          </Link>
          <Switch>
            <Route path="/game" component={Game}></Route>
          </Switch>
        </form>
      </Router>
    );
  }
}

export default Login;