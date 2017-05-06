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
      newPlayer: {}
    }
  }

  choosePlayer(e) {
    const groups = ["A","B","C","D"]
    const randomPlayer = this.state.players[Math.round( Math.random() * (this.state.players.length-1) )];
    const randomGroup = Math.round( Math.random() * (groups.length-1) )
    let arr = this.state.players.filter(item => item !== randomPlayer)
    this.setState({players: arr})
    this.setState({newPlayer: {randomPlayer, randomGroup}})
  }

  render() {
    return (
      <div>
        <ListPlayers players={this.state.players} choosePlayer={this.choosePlayer.bind(this)}/>
        <ListGroups newPlayer={this.state.newPlayer}/>
      </div>
    );
  }
}
