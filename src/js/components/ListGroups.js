import React from "react";

import Group from "./Group";

export default class ListGroups extends React.Component {
  constructor() {
    super()
    this.state = {
      groups: [
        {groupName: "Group A", headPlayer: { name: "Gaspar", team: "Arsenal"}, newPlayer: [], "count": 1},
        {groupName: "Group B", headPlayer: { name: "Gonza", team: "Barcelona"}, newPlayer: [], "count": 1},
        {groupName: "Group C", headPlayer: { name: "Beto", team: "Juventus"}, newPlayer: [], "count": 1},
        {groupName: "Group D", headPlayer: { name: "Agustin", team: "Borussia" }, newPlayer: [], "count": 1}
      ]
    }
  }

  chooseGroup () {
    var foundIndex;
    const randomGroup = this.state.groups[Math.round(Math.random() * (this.state.groups.length - 1))];
    randomGroup.count++;
    foundIndex = this.state.groups.findIndex(x => x.groupName === randomGroup.groupName);
    return foundIndex
  }

  render() {
    if(this.props.newPlayer.randomPlayer !== undefined) {
      const newPlayer = this.props.newPlayer
      const player = {headPlayer: newPlayer.randomPlayer, team: "Random Team"}
      this.state.groups[this.chooseGroup()].newPlayer.push(player)
    }
    const GroupsRender = this.state.groups.map((group, i) => <Group key={i} group={group}/> );

    return (
      <section class="section">
        <div class="container">
          <h1 class="title">Grupos</h1>
          <div class="columns is-multiline">
            {GroupsRender}
          </div>
        </div>
      </section>
    );
  }
}
