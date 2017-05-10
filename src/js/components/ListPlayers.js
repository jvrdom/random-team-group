import React from "react";

import Player from "./Player";

export default class ListPlayers extends React.Component {
  render () {
    const disabled = this.props.players.length === 0;
    const Players = this.props.players.map((name, i) => <Player key={i} name={name}/>);

    return (
      <section class="section">
        <div class="container">
          <h1 class="title">Jugadores</h1>
          <div class="columns is-multiline">
            {Players}
          </div>
          <div class="has-text-centered">
            <button type="button" class="button is-primary is-medium is-outlined" name="button" onClick={this.props.choosePlayer} disabled={disabled}>Elegir Jugador</button>
          </div>
        </div>
      </section>
    );
  }
}

