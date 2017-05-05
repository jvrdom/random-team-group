import React from "react";

import Group from "./Group";

export default class ListGroups extends React.Component {
  constructor() {
    super()
  }

  render() {
    const Groups = [
      {groupName: "Group 1", headPlayer: "Gaspar", team: "Arsenal"},
      {groupName: "Group 2", headPlayer: "Gonza", team: "Barcelona"},
      {groupName: "Group 3", headPlayer: "Beto", team: "Juventus"},
      {groupName: "Group 4", headPlayer: "Agustin", team: "Borussia"}
    ]
    if(this.props.player !== "") {
      const player = {groupName: "Group 1", headPlayer: this.props.player, team: "CACA"}
    }
    const GroupsRender = Groups.map((group, i) => <Group key={i} group={group}/> );

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
