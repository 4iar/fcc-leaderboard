import React from 'react';
import {connect} from 'react-redux';

const getLeaderboard = (state) => {
  return {
    users: state.leaderboard.users,
    status: state.leaderboard.status,
  };
};

@connect(getLeaderboard, null, null, {withRef: true})
export default class LeaderboardPage extends React.Component {
  render() {
    return (
      <p>Hello World! {this.props.status} </p>
    );
  }
}
