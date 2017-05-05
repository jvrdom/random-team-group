import React from "react";

import Player from "./Player";

export default class ListPlayers extends React.Component {
  render() {
    const empty = this.props.players.length == 0;
    const Players = this.props.players.map((name, i) => <Player key={i} name={name}/> );
    const btnDisableClass = empty ? "disabled" : "";
    return (
      <div>
        <h1>Players</h1>
        <div class="row">{Players}</div>
        <button type="button" class={"btn " + btnDisableClass} name="button" onClick={this.props.choosePlayer}>Choose</button>
      </div>
    );
  }
}
