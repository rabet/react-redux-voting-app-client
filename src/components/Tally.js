import React, { Component } from 'react';

export default class Tally extends Component {

  getPair() {
    return this.props.pair || [];
  }

  getVotes(entry) {
    const { tally } = this.props;
    if (tally && tally.has(entry)) {
      return tally.get(entry);
    }
    return 0;
  }

  render() {
    const { restart, next } = this.props;
    return (
      <div className="results">
        <div className="tally">
        {this.getPair().map(entry =>
          <div key={entry} className="entry">
            <h1>{entry}</h1>
            <div className="voteCount">
              {this.getVotes(entry)}
            </div>
          </div>
        )}
        </div>
        <div className="management">
          <button ref="restart"
                  onClick={restart}>
            Restart
          </button>
          <button ref="next"
                  className="next"
                  onClick={next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}