import React from "react";

export default class Group extends React.Component {
  render() {
    const { group } = this.props;
    var trRow;
    if (group.newPlayer) {
      trRow = <tr><td>{group.newPlayer.headPlayer}</td><td>{group.newPlayer.team}</td></tr>
    }
    return (
      <div>
        <div class="col-xs-6">
          <h5>{group.groupName}</h5>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              <tr class="success">
                <td>{group.headPlayer}</td>
                <td>{group.team}</td>
              </tr>
              {trRow}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
