import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import '../styles/react-bootstrap-table.scss';
import '../styles/leaderboard-page.scss';


export default class LeaderboardTable extends React.Component {
  constructor() {
    super();
    this.rowNumber = 0;
  }

  formatUsername(cell, row) {
    const profileUrl = 'https://freecodecamp.com/' + cell;
    return (
      <a href={profileUrl}>
        <img className="img-rounded avatar" src={row.img}></img> {cell}
      </a>
    );
  }

  formatRowNumber() {
    this.rowNumber += 1;
    return this.rowNumber;
  }

  resetRowNumber() {
    this.rowNumber = 0;
  }

  render() {
    return (
      <BootstrapTable data={this.props.data} striped={true} hover={true} options={{onSortChange: this.resetRowNumber.bind(this)}} >
        <TableHeaderColumn dataField="rank" width="50" dataAlign="left" dataSort={false} dataFormat={this.formatRowNumber.bind(this)} condensed={true}>#</TableHeaderColumn>
        <TableHeaderColumn dataField="username" isKey={true} dataAlign="left" dataSort={true} dataFormat={this.formatUsername}>Camper Name</TableHeaderColumn>
        <TableHeaderColumn dataField="recent" dataAlign="left" dataSort={true} >Points in past 30 days</TableHeaderColumn>
        <TableHeaderColumn dataField="alltime" dataAlign="left" dataSort={true}>All time points</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
