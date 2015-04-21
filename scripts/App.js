import React from 'react';
import { RouteHandler } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <RouteHandler {...this.props} key={this.props.pathname}/>
    );
  }

;
}
