import React from 'react';
import Select from 'react-select';

require('../../../node_modules/react-select/dist/default.css');

const { Component } = React;

class MatchTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstUser: null,
      secondUser: null
    };
  }

  updateFirstUser(value) {
    debugger
    const user = this.props.users.filter( (item) => {
      return item.value == value;
    })[0];

    this.setState({
      firstUser: user
    });

    const otherValue = this.state.secondUser ? this.state.secondUser.value : null;
    this.props.updateTeamUser([value, otherValue]);
  }

  updateSecondUser(value) {
    const user = this.props.users.filter( (item) => {
      return item.value == value;
    })[0];

    this.setState({
      secondUser: user
    });

    const otherValue = this.state.firstUser ? this.state.firstUser.value : null;
    this.props.updateTeamUser([otherValue, value]);
  }

  render() {
    return (
      <div>
        <h5>{this.props.teamName}</h5>
        <Select
          name="form-field-name"
          value={this.state.firstUser}
          placeholder={`Select first player from ${this.props.teamName} Team`}
          options={this.props.users}
          onChange={this.updateFirstUser.bind(this)}/>
        <Select
          name="form-field-name"
          value={this.state.secondUser}
          placeholder={`Select second player from ${this.props.teamName} Team`}
          options={this.props.users}
          onChange={this.updateSecondUser.bind(this)}/>
      </div>
    );
  }
}

export default MatchTeamForm;
