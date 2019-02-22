import React, { Component } from 'react';

import './FeedbackBar.scss';

class FeedbackBar extends Component {
  render() {

    return (
      <div className="FeedbackBar">
        <div className="FeedbackBar__Status">
            Beta
        </div>
        <div className="FeedbackBar__Info">
            <p>Gittron is currently in Beta. Join the <a href="https://discordapp.com/channels/546089230133362698/546089230133362700" target="_blank" rel="noopener noreferrer">Gittron Discord</a> to give us your feedback and bug reports.</p>
        </div>
      </div>
    );
  }
}

export default FeedbackBar;