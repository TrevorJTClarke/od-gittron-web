import React, { Component } from 'react';
import BotArmyListItem from './BotArmyListItem';
import './BotArmyList.scss';

class BotArmyList extends Component {
  renderArmy() {
    return this.props.army.map((armyBot) => {
      return <BotArmyListItem armyBot={armyBot} key={armyBot.tokenId} />;
    });
  }

  render() {
    const army = this.renderArmy();

    return (
      <div className="ArmyList">
        {army}
      </div>
    );
  }
}

export default BotArmyList;
