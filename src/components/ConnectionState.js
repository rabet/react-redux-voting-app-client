import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {connect} from 'react-redux';
import {Map} from 'immutable';

export class ConnectionState extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  isVisible() {
    return !this.props.connected;
  }

  getMessage() {
    return `Not connected (${this.props.state})`;
  }

  render() {
    return (
      <div className="connectionState"
                style={{display: this.isVisible() ? 'block' : 'none'}}>
        {this.getMessage()}
      </div>
    );
  }
}

export const ConnectionStateContainer = connect(
  state => state.get('connection', Map()).toJS()
)(ConnectionState);