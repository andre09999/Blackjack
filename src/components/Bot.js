import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context/context';
import decideNextPlay, { sumTotal } from '../utils/decideNextPlay';
import Card from './Card';

export default function Bot({ inTurn, stop, setInfo }) {
  const [hand, setHand] = useState([]);
  const [playing, setPlaying] = useState(true);
  const { deckId } = useContext(Context)

  useEffect(() => {
    const play = async () => {
      if (inTurn && !stop) {
        const nextPlay = await decideNextPlay(hand, deckId);
        if (nextPlay === 'give up') {
          setInfo({ stop: true, total: sumTotal(hand) });
        } else {
          setHand([...hand, ...nextPlay]);
          setInfo({ stop: false, total: sumTotal(hand) });
        }
      }
    };
    play();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inTurn]);

  useEffect(() => {
    const lost = () => {
      const sum = sumTotal(hand);
      if (sum > 21) setPlaying(false);
    }
    lost();
  }, [hand])

  return (
    playing ? (
      hand.map((card) => (
        <div key={ card.code } className='bot'>
          { stop && <span>I pass</span> }
          <Card card={ card } key={ card.code } isUp={ false } />
        </div>
      ))
    ) : (
      hand.map((card) => <Card card={ card } key={ card.code } isUp={ true } />)
    )
  )
}
