import React from "react";
import _ from "lodash";

import Group from "./Group";
import Fixture from "./Fixture";

export default class ListGroups extends React.Component {
  constructor () {
    super();
    this.state = {
      "groups": [
        {"groupName": "Group A", "headPlayer": { "name": "Gaspar", "team": "Arsenal"}, "newPlayer": [], "count": 1},
        {"groupName": "Group B", "headPlayer": { "name": "Gonza", "team": "Barcelona"}, "newPlayer": [], "count": 1},
        {"groupName": "Group C", "headPlayer": { "name": "Beto", "team": "Juventus"}, "newPlayer": [], "count": 1},
        {"groupName": "Group D", "headPlayer": { "name": "Agustin", "team": "Borussia" }, "newPlayer": [], "count": 1}
      ]
    };
  }

  chooseGroup () {
    var foundIndex;
    const filteredGroups = _.filter(this.state.groups, function returnAvailablesGroups (o) {
      return o.count < 5;
    });
    const randomGroup = filteredGroups[Math.round(Math.random() * (filteredGroups.length - 1))];
    randomGroup.count++;
    foundIndex = this.state.groups.findIndex(x => x.groupName === randomGroup.groupName);

    return foundIndex;
  }

  render () {
    if (this.props.newPlayer.randomPlayer !== undefined) {
      const newPlayer = this.props.newPlayer;
      const player = {"headPlayer": newPlayer.randomPlayer, "team": "Random Team"};
      this.state.groups[this.chooseGroup()].newPlayer.push(player);
    }
    const GroupsRender = this.state.groups.map((group, i) => <Group key={i} group={group}/> );

    return (
      <section class="section">
        <div class="container">
          <h1 class="title">Grupos</h1>
          <div class="columns is-multiline">
            {GroupsRender}
          </div>
          <Fixture groups={this.state.groups}/>
        </div>
      </section>
    );
  }
}
