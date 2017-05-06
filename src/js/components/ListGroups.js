import React from "react";

import Group from "./Group";

export default class ListGroups extends React.Component {
  constructor() {
    super()
  }

  render() {
    const Groups = [
      {index:"A", groupName: "Group A", headPlayer: "Gaspar", team: "Arsenal"},
      {index:"B", groupName: "Group B", headPlayer: "Gonza", team: "Barcelona"},
      {index:"C", groupName: "Group C", headPlayer: "Beto", team: "Juventus"},
      {index:"D", groupName: "Group D", headPlayer: "Agustin", team: "Borussia"}
    ]
    if(this.props.newPlayer.randomPlayer !== undefined) {
      var newPlayer = this.props.newPlayer
      const player = {groupName: "Group 1", headPlayer: newPlayer.randomPlayer, team: "CACA"}
      Groups[this.props.newPlayer.randomGroup].newPlayer = player;
    }
    const GroupsRender = Groups.map((group, i) => <Group key={i} group={group} /> );

    return (
      <div>
        <h1>Groups</h1>
        <div class="container">
          {GroupsRender}
        </div>
      </div>
    );
  }
}
