import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Winner from './Winner';
import Tally from './Tally';

export class Results extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { pair, tally, winner } = this.props;
    return (
      winner ?
      <Winner ref="winner" winner={winner} /> :
      <Tally {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);