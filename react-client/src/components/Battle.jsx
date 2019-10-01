import React from 'react';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badges: 0
    }
    this.brock = this.brock.bind(this);
  }

  brock(e) {
    e.preventDefault();
    let gamble = Math.floor(Math.random() * 10);
    if (gamble > 4 && this.props.counter >= 100) {
      this.setState({
        badges: this.state.badges + 1
      });
      this.props.battle(e);
      alert('congrats you beat brock');
    } else if (gamble < 4 && this.props.counter >= 100) {
      this.props.battle(e);
      alert('sorry fam try again');
    } else {
      alert('not enough pokeballs!');
    }
  }


  render() {
    let gymCost = [100,200,300,400,500,600,700,800]
    return (<div>
      <div>
        <button onClick={this.brock}>Challenge Brock ({gymCost[0]})</button>
      </div>
      <div>
        <button onClick={this.brock}>Challenge Misty ({gymCost[1]})</button>
      </div>
      <div>
        <button onClick={this.brock}>Challenge Lt.Surge ({gymCost[2]})</button>
      </div>
      <div>
        <button onClick={this.brock}>Challenge Erika ({gymCost[3]})</button>
      </div>
      <div>
        <button onClick={this.brock}>Challenge Koga ({gymCost[4]})</button>
      </div>
      <div>
        <button onClick={this.brock}>Challenge Sabrina ({gymCost[5]})</button>
      </div>
      <div>
        <button onClick={this.brock}>Challenge Blaine ({gymCost[6]})</button>
      </div>
      <div>
        <button onClick={this.brock}>Challenge Giovanni ({gymCost[7]})</button>
      </div>
    </div>)
  }




}

export default Battle;