import React from 'react';
import NewMatchForm from '../components/new-match-form.jsx';

export default class LeagueMain extends React.Component {
  render() {
    return (
      <div>
        <h1>I AM LEAGUE!</h1>
        <NewMatchForm users={this.props.users}/>
      </div>
    );
  }
};
