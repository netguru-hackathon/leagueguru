import React from 'react';
import LeaguePanel from './league-panel.jsx';

export default class DashboardMain extends React.Component {
  render() {
    return <div className="row">
      <div className="col-md-offset-3 col-md-6">
        <LeaguePanel name="Some League"></LeaguePanel>
      </div>
    </div>
  }
};
