import React from 'react';
import Select from 'react-select';

require('../../../node_modules/react-select/dist/default.css');

const { Component } = React;

class NewLeagueForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const aTeamFirst = null, aTeamSecond = null, bTeamFirst = null, bTeamSecond = null;

    return (
      <div className='row'>
        <div className='col-md-12'>
          <h4>Select users:</h4>
          <div className='row'>
            <div className='col-md-6'>
              <h5>Team A:</h5>
              <Select
                name="form-field-name"
                value={aTeamFirst}
                placeholder="Select first player from A Team"
                options={this.props.users}/>
              <Select
                name="form-field-name"
                value={aTeamSecond}
                placeholder="Select second player from A Team"
                options={this.props.users}/>
            </div>
            <div className='col-md-6'>
              <h5>Team B:</h5>
              <Select
                name="form-field-name"
                value={bTeamFirst}
                placeholder="Select first player from B Team"
                options={this.props.users}/>
              <Select
                name="form-field-name"
                value={bTeamSecond}
                placeholder="Select second player from B Team"
                options={this.props.users}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewLeagueForm;
