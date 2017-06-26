import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import ListPlayers from "../components/ListPlayers";
import ListGroups from "../components/ListGroups";

import { fetchPlayers, setNewPlayersList } from "../actions/PlayersActions";
import { fetchGroups } from "../actions/GroupsActions";

class Index extends React.Component {
  constructor () {
    super();
  }

  componentWillMount() {
    this.props.fetchPlayers();
    this.props.fetchGroups();
  }

  _chooseGroup () {
    var foundIndex;
    const filteredGroups = _.filter(this.props.groups, function returnAvailablesGroups (o) {
      return o.players.length < 5;
    });
    const randomGroup = filteredGroups[Math.round(Math.random() * (filteredGroups.length - 1))];
    foundIndex = this.props.groups.findIndex(x => x.name === randomGroup.name);

    return foundIndex;
  }

  _choosePlayer () {
    const randomPlayer = this.props.players[Math.round(Math.random() * (this.props.players.length - 1))];
    let arr = this.props.players.filter(item => item !== randomPlayer);
    this.props.setNewPlayersList(arr);
    const idGroup = this._chooseGroup();
    this.props.groups[idGroup].players.push({"name": randomPlayer, "team": "Random Team"});
  }

  render () {
    const { groups, players } = this.props;

    return (
      <div class="container">
        <ListPlayers players={players} choosePlayer={this._choosePlayer.bind(this)}/>
        <ListGroups groups={groups} />
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchPlayers: () => {
      dispatch(fetchPlayers());
    },
    fetchGroups: () => {
      dispatch(fetchGroups());
    },
    setNewPlayersList: (players) => {
      dispatch(setNewPlayersList(players));
    }
  };
}

const mapStateToProps = (state) => {
  return {
    players: state.players.players,
    groups: state.groups.groups
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
