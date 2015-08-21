import React from 'react';
window.React = React;

class HelloComponent extends React.Component {
    render() {
      return <div>Hello!!!! Guru</div>;
    }
}

window.ReactComponents = {
  hello: HelloComponent
};
