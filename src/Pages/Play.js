import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import FourPlayers from '../components/FourPlayers';
import Header from '../components/Header';
import OnePlayer from '../components/OnePlayer';
import Context from '../Context/context';
import '../styles/play.css';

export default function Play() {
  const [stop, setStop] = useState(false);
  const { retry, players } = useContext(Context);

  return (
    <div className='game'>
      <Header inGame={ true } />

      { players === 1 ? (
        <OnePlayer stop={stop} setStop={setStop} />
      ) : (
        <FourPlayers />
      ) }
      { retry && <Navigate to="/home" replace={ true } /> }
    </div>
  )
}
