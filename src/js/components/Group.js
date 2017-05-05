import React from "react";

export default class Group extends React.Component {
  render() {
    const { group } = this.props;
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
              <tr>
                <td>--</td>
                <td>--</td>
              </tr>
              <tr>
                <td>--</td>
                <td>--</td>
              </tr>
              <tr>
                <td>--</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
