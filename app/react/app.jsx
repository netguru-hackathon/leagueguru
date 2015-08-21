import React from 'react';
import DashboardMain from './dashboard/main.jsx';
import LeagueMain from './league/main.jsx';

export default class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      currentPage: 'dashboard'
    };
  }
  showPage() {
    if(this.state.currentPage == 'dashboard'){
      return <DashboardMain leagues={this.props.leagues} openLeague={this.openLeague.bind(this)}></DashboardMain>;
    } else {
      return <LeagueMain></LeagueMain>;
    }
  }
  openLeague() {
    this.setState({
      currentPage: 'league'
    });
  }
  render() {
    return this.showPage()
  }
};
