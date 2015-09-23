import React, { Component } from 'react';
import { ConnectionStateContainer } from './ConnectionState';
//import {List, Map} from 'immutable';

export class App extends Component {
  render() {
    const { location, children } = this.props;
    /*
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 1, '28 Days Later': 4});
    const winner = "The Dark Knight";

    {children && React.cloneElement(children, {
            pair: pair,
            tally: tally,
            winner: winner
          })}
    */

    return (
      <div className="main">
        <ConnectionStateContainer />
          {children}
      </div>
    );
  }
}