import React from "react";

export default class Group extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const { group } = this.props;
    var trRowRender;
    if (group.players.length > 0) {
      trRowRender = group.players.map((player, i) => <tr class="is-selected" key={i}><td>{player.name}</td><td></td></tr>);
    }

    return (
      <div class="column is-one-quarter">
        <div className="box">
          <h5>{group.name}</h5>
          <table class="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Equipo</th>
              </tr>
            </thead>
            <tbody>
              {trRowRender}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
