import React from "react";
import _ from "lodash";

import ListPlayers from "../components/ListPlayers";
import ListGroups from "../components/ListGroups";

export default class Index extends React.Component {
  constructor () {
    super();

    this.state = {
      groups: [
        { name: "Group A", "players": [{ "name": "Gaspar", "team": "Arsenal"}], "count": 1 },
        { name: "Group B", "players": [{ "name": "Gonza", "team": "Barcelona"}], "count": 1 },
        { name: "Group C", "players": [{ "name": "Beto", "team": "Juventus"}], "count": 1 },
        { name: "Group D", "players": [{ "name": "Agustin", "team": "Borussia" }], "count": 1 }
      ],
      players : [ "Javier", "Mathi", "PH", "Nico P", "Nico C", "Tonio", "Vikingo", "Lorena", "Dorian",
        "Dante", "Rafa", "Maxi", "Marketing", "Guille BI" ]
    };
  }

  _chooseGroup () {
    var foundIndex;
    const filteredGroups = _.filter(this.state.groups, function returnAvailablesGroups (o) {
      return o.players.length < 5;
    });
    const randomGroup = filteredGroups[Math.round(Math.random() * (filteredGroups.length - 1))];
    foundIndex = this.state.groups.findIndex(x => x.name === randomGroup.name);

    return foundIndex;
  }

  _choosePlayer () {
    const randomPlayer = this.state.players[Math.round(Math.random() * (this.state.players.length - 1))];
    let arr = this.state.players.filter(item => item !== randomPlayer);
    this.setState({"players": arr});
    const idGroup = this._chooseGroup();
    this.state.groups[idGroup].players.push({"name": randomPlayer, "team": "Random Team"})
  }

  render () {
    const { groups, players } = this.state;

    return (
      <div class="container">
        <ListPlayers players={players} choosePlayer={this._choosePlayer.bind(this)}/>
        <ListGroups groups={groups} newPlayer={this.state.newPlayer}/>
      </div>
    );
  }
}

