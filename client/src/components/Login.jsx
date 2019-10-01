import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Game from './Game.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      badges: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    $.ajax({
      type: "POST",
      url: '/api/usernames',
      data: {
        username: this.state.username,
        badges: this.state.badges
      },
      success: () => {
        console.log('added!');
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });

  }

  render() {
    return (
      <Router>
        <form>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleChange} required />
          </label>
          <Link to="/game">
            <button onClick={this.handleSubmit} disabled={!this.state.username}>Submit</button>
          </Link>
          <Switch>
            <Route path="/game" render={(props) => <Game {...props} username={this.state.username} />} />
          </Switch>
        </form>
      </Router>
    );
  }
}

export default Login;