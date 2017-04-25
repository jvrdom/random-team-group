import React from "react";

export default class Group extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <div class="col-xs-6">
          <h5>{name}</h5>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
