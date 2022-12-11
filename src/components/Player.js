import React, { useState } from 'react';
import Card from './Card';
import Deck from './Deck';
import Count from './Count';
import StopButton from './StopButton';

export default function Player({ inTurn, stop, setInfo }) {
  const [total, setTotal] = useState(0);
  const [hand, setHand] = useState([]);
  const canPlay = (inTurn && !stop && total <= 21);

  const setStop = () => {
    setInfo({ stop: true, total })
  }

  return (
    <div className='center-player1 One'>
      <div className='cener-fou One'>
      <Deck allCards={ hand } drawCard={ setHand } inTurn={ canPlay } />
      <Count cards={ hand } total={ total } setTotal={ setTotal } />
      <div className='cards'>
      { hand.map((card) => <Card card={ card } key={ card.code } />) }
      </div>
      </div>
      { canPlay && <h3>Your turn!</h3> }
      { total > 21 && setStop() }
      { stop && <span>I pass</span> }
      <StopButton setStop={ setStop } inTurn={ canPlay } />
    </div>
  )
}
