import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import { Link } from 'react-router';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
        <Link className="toResults" to={`/results`}>Results</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.getIn(['myVote', 'entry']),
    winner: state.get('winner')
  };
}

export default connect(mapStateToProps, actionCreators)(Voting);