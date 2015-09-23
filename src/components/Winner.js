import React, { Component } from 'react';

export default class Winner extends Component {
  render() {
    return (
    	<div className="winner">
			Winner is <strong>{this.props.winner}</strong>!
		</div>
		);
	}
}