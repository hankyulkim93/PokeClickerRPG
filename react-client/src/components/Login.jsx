import React from 'react';

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
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;