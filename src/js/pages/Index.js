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
      ]
    }
  }

  removePlayer(e) {
    const randomAd = this.state.players[Math.round( Math.random() * (this.state.players.length-1) )];
    let arr = this.state.players.filter(item => item !== randomAd)
    this.setState({players: arr})
  }

  render() {
    return (
      <div>
        <ListPlayers players={this.state.players} removePlayer={this.removePlayer.bind(this)}/>
        <ListGroups/>
      </div>
    );
  }
}
