import React, { Component, Fragment } from 'react';

import { get } from '../../../util/requests';

import BotArmyList from './BotArmyList';

import './BotArmy.scss';

class BotArmy extends Component {
  state = {
    buidlArmy: [],
    supportArmy: [],
    generations: [],
  };

  componentDidMount = async () => {
    const { data } = await get(`bots`);

    this.setState({
      buidlArmy: this.army(data, 'buidl'),
      supportArmy: this.army(data, 'support'),
      generations: this.generations(data)
    });
  };

  army = (data, botType) => {
    const army = data
      .filter((bot) => {
        return bot.tokenType === botType && bot.hatched && bot;
      })
      .filter((bot) => {
        return bot.relatedPrimeBot === this.props.relatedPrimeBot.tokenId;
      });

    return army;
  };

  generations = (data) => {
    // if 
    const generations = data
    .filter((bot) => bot.dna === this.props.relatedPrimeBot.dna)
    .filter((bot) => bot.ghid === this.props.relatedPrimeBot.ghid)
    .sort((a, b) => a.generation-b.generation);
    
    return generations
  }

  render() {
    const { buidlArmy, supportArmy, generations } = this.state;

    return (
      <div className="Contain">
        {generations.length ? (
          <Fragment>
            <h3>Generations ({generations.length})</h3>
            <BotArmyList army={generations} />
          </Fragment>
        ) : null}

        <h3>Buidl Bots ({buidlArmy.length})</h3>
        <BotArmyList army={buidlArmy} />
        <h3>Support Bots ({supportArmy.length})</h3>
        <BotArmyList army={supportArmy} />
      </div>
    );
  }
}

export default BotArmy;
