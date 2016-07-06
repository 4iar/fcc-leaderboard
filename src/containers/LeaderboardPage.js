import React from 'react';

import LeaderboardTable from '../components/LeaderboardTable';
import { LEADERBOARD_API_ENDPOINT } from '../constants/endpoints';

import '../styles/leaderboard-page.scss';

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
      <div className="container-fluid">
      <div className="row">
        <div className="buffer"></div>
        <div className="col-md-offset-1 col-md-10 leaderboard-container">
        <LeaderboardTable data={this.state.users} />
      </div>
        </div>
      </div>
    );
  }
}
