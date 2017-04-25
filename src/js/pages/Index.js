import React from "react";

import TablePlayers from "../components/TablePlayers";
import ListGroups from "../components/ListGroups";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <TablePlayers/>
        <ListGroups/>
      </div>
    );
  }
}
