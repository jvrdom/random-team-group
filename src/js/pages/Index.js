import React from "react";

import ListPlayers from "../components/ListPlayers";
import ListGroups from "../components/ListGroups";

export default class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      players : [
        "Javier",
        "Jorge",
        "Stefania"
      ],
      player: ""
    }
  }

  choosePlayer(e) {
    const randomPlayer = this.state.players[Math.round( Math.random() * (this.state.players.length-1) )];
    let arr = this.state.players.filter(item => item !== randomPlayer)
    this.setState({players: arr})
    this.setState({player: randomPlayer})
  }

  render() {
    return (
      <div>
        <ListPlayers players={this.state.players} choosePlayer={this.choosePlayer.bind(this)}/>
        <ListGroups player={this.state.player}/>
      </div>
    );
  }
}
