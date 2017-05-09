import React from "react";

import ListPlayers from "../components/ListPlayers";
import ListGroups from "../components/ListGroups";

export default class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      "players" : [
        "Javier",
        "Mathi",
        "PH",
        "Nico P",
        "Nico C",
        "Tonio",
        "Vikingo",
        "Lorena",
        "Dorian",
        "Dante",
        "Rafa",
        "Maxi",
        "Marketing",
        "Guille BI"
      ],
      "newPlayer": {},
    }
  }

  choosePlayer () {
    const randomPlayer = this.state.players[Math.round(Math.random() * (this.state.players.length - 1))];
    let arr = this.state.players.filter(item => item !== randomPlayer);
    this.setState({"players": arr});
    this.setState({"newPlayer": {randomPlayer}});
  }

  render() {
    return (
      <div class="container">
        <ListPlayers players={this.state.players} choosePlayer={this.choosePlayer.bind(this)}/>
        <ListGroups newPlayer={this.state.newPlayer}/>
      </div>
    );
  }
}

