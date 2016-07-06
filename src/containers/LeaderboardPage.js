import React from 'react';

import LeaderboardTable from '../components/LeaderboardTable';
import { LEADERBOARD_API_ENDPOINT } from '../constants/endpoints';

export default class LeaderboardPage extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.request = $.get(LEADERBOARD_API_ENDPOINT, function (result) {
      this.setState({
        users: result
      });
    }.bind(this));
  }

  render() {
    return (
      <LeaderboardTable data={this.state.users} />
    );
  }
}
