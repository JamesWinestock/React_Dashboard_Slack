import React, { Component } from 'react';
import Navigation from './Navigation/navigation';

export default class App extends Component {
  render() {
    return (
      <div>Slackbot
      <Navigation />
      {this.props.children}
      </div>
    );
  }
}
