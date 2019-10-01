import React from 'react';
// const ListItem = (props) => (
//   <div>
//     { props.item.description }
//   </div>
// )

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      badge: '',
      counter: 0
    }
    this.click = this.click.bind(this);
  }

  click() {
    console.log('click');
  }

  render() {
    return(<div>
      <h1>This is the Game</h1>
      <button><img src="https://vignette.wikia.nocookie.net/pokemon/images/4/44/Pok%C3%A9_Ball.jpg/revision/latest?cb=20090507215041" alt='pokeball' onClick={this.click} /></button>
    </div>);
  }
}

export default Game;