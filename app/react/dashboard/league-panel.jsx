import React from 'react';

export default class LeaguePanel extends React.Component {
  render() {
    return <div className="panel panel-default">
      <div className="panel-body container-fluid">
        <div className="row">
          <div className="col-md-8">
            <h5>{this.props.name}</h5>
          </div>
          <div className="col-md-4">
            <button className="btn btn-default pull-right">Open</button>
          </div>
        </div>
      </div>
    </div>
  }
};
