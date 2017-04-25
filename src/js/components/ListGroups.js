import React from "react";

import Group from "./Group";

export default class ListGroups extends React.Component {
  constructor() {
    super()
  }

  render() {

    const Groups = [
      "Group 1",
      "Group 2",
      "Group 3",
      "Group 4",
    ].map((name, i) => <Group key={i} name={name}/> );

    return (
      <div>
        <h1>Groups</h1>
        <div class="container">
          {Groups}
        </div>
      </div>
    );
  }
}
