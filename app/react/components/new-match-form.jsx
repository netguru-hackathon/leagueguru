import React from 'react';
import NewTeamForm from './match-team-form.jsx';

const { Component } = React;

class NewLeagueForm extends Component {
  constructor(props) {
    super(props);
    const users = this.props.users;
    this.state = {
      aTeamSelected: [null, null],
      bTeamSelected: [null, null],
      users
    };
  }

  updateATeam(value) {
    debugger
    const users = this.props.users;
    let tempUsers = users.filter( (item) => {
      return (item.value != value[0]) &&
             (item.value != value[1]) &&
             (item.value != this.state.bTeamSelected[0]) &&
             (item.value != this.state.bTeamSelected[1]);
    });

    this.setState({
      users: tempUsers,
      aTeamSelected: value
    });
  }

  updateBTeam(value) {
    debugger
    const users = this.props.users;
    let tempUsers = users.filter( (item) => {
      return (item.value != value[0]) &&
             (item.value != value[1]) &&
             (item.value != this.state.aTeamSelected[0]) &&
             (item.value != this.state.aTeamSelected[1]);
    });

    this.setState({
      users: tempUsers,
      bTeamSelected: value
    });
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <h4>Select users:</h4>
          <div className='row'>
            <div className='col-md-6'>
              <NewTeamForm users={this.state.users} teamName="A" updateTeamUser={this.updateATeam.bind(this)}/>
            </div>
            <div className='col-md-6'>
              <NewTeamForm users={this.state.users} teamName="B" updateTeamUser={this.updateBTeam.bind(this)}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 center'>
              <div className="btn-group" data-toggle="buttons">
                <label className="btn btn-primary active">
                  <input type="radio" name="options" id="option1" checked/> Team A
                </label>
                <label className="btn btn-primary">
                  <input type="radio" name="options" id="option2"/> Team B
                </label>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 center'>
            <input className='btn btn-default' type='submit' value='Goal'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewLeagueForm;
