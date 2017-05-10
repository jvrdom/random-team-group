import React from "react";

export default class Group extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { group } = this.props;
    var trRowRender;
    if (group.newPlayer.length > 0) {
      trRowRender = group.newPlayer.map((newPlayer, i) => <tr class="is-selected" key={i}><td>{newPlayer.headPlayer}</td><td>{newPlayer.team}</td></tr>);
    }

    return (
      <div class="column is-one-quarter">
        <div className="box">
          <h5>{group.groupName}</h5>
          <table class="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Equipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{group.headPlayer.name}</td>
                <td>{group.headPlayer.team}</td>
              </tr>
              {trRowRender}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
