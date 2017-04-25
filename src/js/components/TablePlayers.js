import React from "react";

import Player from "./Player";

export default class TablePlayers extends React.Component {
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
    const empty = this.state.players.length == 0;
    const Players = this.state.players.map((name, i) => <Player key={i} name={name}/> );
    const btnDisableClass = empty ? "disabled" : "";
    return (
      <div>
        <h1>Players</h1>
        <div class="row">{Players}</div>
        <button type="button" class={"btn " + btnDisableClass} name="button" onClick={this.removePlayer.bind(this)}>Choose</button>
      </div>
    );
  }
}
