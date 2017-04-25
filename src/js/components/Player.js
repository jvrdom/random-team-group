import React from "react";

export default class Player extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div class="col-md-4">
        <h4>{name}</h4>
      </div>
    );
  }
}
