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
      for (let group of groups) {
        // THIS WILL CHANGE
        // console.log(group.headPlayer.name + " " + group.newPlayer[Math.round(Math.random() * (group.newPlayer.length - 1))].headPlayer);
        const player = group.newPlayer[Math.round(Math.random() * (group.newPlayer.length - 1))].headPlayer;
        console.log(player);
        const a = _.remove(group.newPlayer, function (n) {
          return n.headPlayer === player;
        });
        console.log(group.newPlayer);
      }
    }

    return show && <div> Javier </div>;
  }
}
