import React, { useContext } from 'react';
import Context from '../Context/context';
import { DRAW_CARD, fetchDeckAPI } from '../services/fetchDeckAPI';
import Card from './Card';

export default function Deck({ allCards, drawCard, inTurn }) {
  const { deckId } = useContext(Context);

  const handleClick = async () => {
    const { cards } = await fetchDeckAPI(`/${deckId}${DRAW_CARD}`);
    drawCard([ ...allCards, ...cards]);
  }

  return (
    <>
    <button type="button" className='One' onClick={ handleClick } disabled={ !inTurn }>
      <Card isUp={ false } />
    </button>
    </>
  )
}
