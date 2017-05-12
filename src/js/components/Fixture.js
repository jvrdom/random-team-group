import React from "react";
import _ from "lodash";

export default class Fixture extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { groups } = this.props;
    let show = false;
    if (_.every(groups, ["count", 5])) {
      show = true;
    }

    return show && <div> Javier </div>;
  }
}
