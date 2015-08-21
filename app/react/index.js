import React from 'react';
import DashboardMain from './dashboard/main.jsx';
import NewLeagueForm from './components/new-league-form.jsx';

window.React = React;
window.ReactComponents = {
  'dashboard-main': DashboardMain,
  'new-league-form': NewLeagueForm
};
