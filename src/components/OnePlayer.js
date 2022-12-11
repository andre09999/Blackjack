import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Card from '../components/Card';
import Count from '../components/Count';
import Deck from '../components/Deck';
import StopButton from '../components/StopButton';
import LoseMessage from './LoseMessage';


export default function OnePlayer({ stop, setStop }) {
  const [total, setTotal] = useState(0);
  const [cards, setCards] = useState([])

  return (
    <div className='One'>
      { (total < 21) ? (
        <>
        { (stop === true || total === 21) && <Navigate to="/finish" replace={ true } /> }
          <div className='center-play One'>
          <Count cards={ cards } total={ total } setTotal={ setTotal } />
          <Deck allCards={ cards } drawCard={ setCards } inTurn={ true } />
          <StopButton setStop={ setStop } total={ total } inTurn/>
          </div>
          <div className='center-cards One'>
          { cards.map((card) => <Card card={ card } key={ card.code } />) }
          </div>
        </>
      ) : (
      <div className='finsh'>
        <LoseMessage />
      </div>
    ) }
  </div>
  )
}
