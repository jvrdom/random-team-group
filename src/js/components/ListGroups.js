import React from "react";
import _ from "lodash";

import Group from "./Group";

export default class ListGroups extends React.Component {
  constructor () {
    super();
  }

  render () {
    const { groups } = this.props;
    const GroupsRender = groups.map((group, i) => <Group key={i} group={group}/> );

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
