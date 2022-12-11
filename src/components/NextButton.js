import React from 'react';

export default function NextButton({ playing, turn, setTurn }) {
  const whoStillPlaying = () => playing.filter(({ player }) => player.stop === false);
  
  const handleClick = () => {
    const stillPlaying = whoStillPlaying();
    const currentTurn = (turn === stillPlaying.length) ? 0 : turn;
    console.log('turn', currentTurn);
    stillPlaying.forEach(({ player, setPlayer }, index) => {
      if (index === currentTurn) {
        setPlayer({ stop: player.stop, total: player.total, inTurn: true })
      } else {
        setPlayer({ stop: player.stop, total: player.total, inTurn: false })
      }
    });
    setTurn(currentTurn + 1);
  }

  return (
    <button className="button" type="button" onClick={ handleClick }>Next</button>
  )
}
