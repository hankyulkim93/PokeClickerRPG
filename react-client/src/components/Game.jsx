import React from 'react';
import Battle from './Battle.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      PKMN: null,
      level: 1,
      required: 10,
      auto: 0
    }
    this.click = this.click.bind(this);
    this.buyPKMN = this.buyPKMN.bind(this);
    this.levelUp = this.levelUp.bind(this);
    this.addBall = this.addBall.bind(this);
    this.buyAuto = this.buyAuto.bind(this);
    this.battle = this.battle.bind(this);
    setInterval(this.addBall, 3000);
  };

  battle(e) {
    e.preventDefault();
    if (this.state.counter >= 100) {
      this.setState({
        counter: this.state.counter - 100
      })
    }

  }

  buyAuto(e) {
    e.preventDefault();
    if (this.state.counter >= 20) {
      this.setState({
        counter: this.state.counter - 20,
        auto: this.state.auto + 1
      });
    };
  };

  addBall() {
    this.setState({
      counter: this.state.counter + this.state.auto,
    });
  };

  click(e) {
    e.preventDefault();
    this.setState({
      counter: this.state.counter + 1
    });
  };

  buyPKMN(e) {
    e.preventDefault();
    let pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","NidoranF","Nidorina","Nidoqueen","NidoranM","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr.Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
    if (this.state.counter >= 10) {
      let index = Math.floor(Math.random() * 152);
      let newPKMN = pokemon[index]
      this.setState({
        counter: this.state.counter - 10,
        PKMN: newPKMN
      })
    };
    console.log(this.state);
  };

  levelUp(e) {
    e.preventDefault();
    if (this.state.counter >= this.state.required) {
      this.setState({
        counter: this.state.counter - this.state.required,
        level: this.state.level + 1,
        required: this.state.required + 10
      });
    };
  }

  render() {
    if (this.state.PKMN === null) {
      return(<div>
        <h1>Begin your adventure !</h1>
        <button><img src="https://vignette.wikia.nocookie.net/pokemon/images/4/44/Pok%C3%A9_Ball.jpg/revision/latest?cb=20090507215041" alt='pokeball' onClick={this.click} /></button>
        <div>Pokéballs:{this.state.counter}</div>
        <div><button onClick={this.buyPKMN}>Buy Pokemon (10)</button></div>
        </div>
      );
    } else if (this.state.PKMN !== null) {
      return(<div>
        <h1>Begin your adventure!</h1>
        <button><img src="https://vignette.wikia.nocookie.net/pokemon/images/4/44/Pok%C3%A9_Ball.jpg/revision/latest?cb=20090507215041" alt='pokeball' onClick={this.click} /></button>
        <div>Pokéballs:{this.state.counter}</div>
        <div><button onClick={this.buyAuto}>Buy Auto Ball Collector (20)</button></div>
        <div>
          <h4>Pokémon</h4>
          <div>{this.state.PKMN}</div><span>Level: {this.state.level}</span>
          <button onClick={this.levelUp}>Level Up ({this.state.required})</button>
        </div>
        <div>
          <Battle battle={this.battle} counter={this.state.counter} />
        </div>
      </div>
      );
    }
  }
}

export default Game;