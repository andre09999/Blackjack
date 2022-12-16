import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bot from './Bot';
import LoseMessage from './LoseMessage';
import NextButton from './NextButton';
import Player from './Player';

export default function FourPlayers() {
  const navigate = useNavigate();
  const [turn, setTurn] = useState(0);
  const [player, setPlayer] = useState({ stop: false, total: 0, inTurn: false }); 
  const [bot1, setBot1] = useState({ stop: false, total: 0, inTurn: false });
  const [bot2, setBot2] = useState({ stop: false, total: 0, inTurn: false });
  const [bot3, setBot3] = useState({ stop: false, total: 0, inTurn: false });
  const [gameOver, setGameOver] = useState(false);
  const [playerWin, setPlayerWin] = useState(false);

  useEffect(() => {
    const checkWinner = () => {
      if (bot1.stop && bot2.stop && bot3.stop && player.stop ) {
        const bots = [ bot1, bot2, bot3 ];
        const botWon = bots
          .some(({ total }) => (total > player.total && total <= 21) || player.total > 21);
        setGameOver(true);
        setPlayerWin(!botWon);
      }
    };

    checkWinner();
  });

  const redirectToResult = () => {
    if (playerWin) {
      navigate('/finish')
    } else {
      return <LoseMessage />
    }
  }
  
  return (
    <div className='center fourplayers-container One'>
      <div className='alinha'>
      <Player inTurn={ player.inTurn } stop={ player.stop } setInfo={ setPlayer }/>
      <NextButton 
        playing={[
          { player, setPlayer },
          { player: bot1, setPlayer: setBot1 },
          { player: bot2, setPlayer: setBot2 },
          { player: bot3, setPlayer: setBot3 },
        ]}
        turn={ turn }
        setTurn={ setTurn }
      />
      </div>
      <div className='jogadores-bot'>
      <div className='bot One'>
        <p  className='One player-r'>Player 2</p>
        <div className='cardss'>
        <Bot inTurn={ bot1.inTurn } stop={ bot1.stop } setInfo={ setBot1 } />
        </div>
      </div>
      <div  className='bot One'>
        <p  className='One player-r'>Player 3</p>
        <div className='cardss'>
        <Bot inTurn={ bot2.inTurn } stop={ bot2.stop } setInfo={ setBot2 } />
        </div>
      </div>
      <div  className='bot One'>
        <p  className='One player-r'>Player 4</p>
        <div className='cardss'>
        <Bot inTurn={ bot3.inTurn } stop={ bot3.stop } setInfo={ setBot3 } />
        </div>
      </div>
      </div>
      { gameOver && redirectToResult() }
    </div>
  
  )
}
