import React from 'react';
import LeaguePanel from './league-panel.jsx';

export default class DashboardMain extends React.Component {
  render() {
    const leagues = this.props.leagues.map(league => {
      return <LeaguePanel name={league.name}></LeaguePanel>
    });

    return <div className="row">
      <div className="col-md-offset-3 col-md-6">
        {leagues}
      </div>
    </div>
  }
};
