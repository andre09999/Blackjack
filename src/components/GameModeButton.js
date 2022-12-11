import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context/context';
import Playr1 from '../imgs/download-removebg-preview.png'
import Playr4 from '../imgs/images-removebg-preview.png'

export default function GameModeButton({ amountOfPlayers }) {
  const { setPlayers } = useContext(Context);
  const[foto, Setfoto]= useState('');
  const navigate = useNavigate();

useEffect(()=> {
  if(amountOfPlayers === 1) Setfoto([Playr1])
  if(amountOfPlayers === 4) Setfoto([Playr1,Playr4,Playr4,Playr4])
},[amountOfPlayers])
  const handleClick = () => {
    setPlayers(amountOfPlayers);
    navigate('/start');
  }


  
  return (
    <div className='player'>
      <div className='fourplayer'>
      {foto &&
      foto.map((a) => 
           <img  src={ a } alt='personagem player 1' className='foto'/>
      )}
      </div>
     
      <button  className="player button"  type="button" onClick={ handleClick }>{ amountOfPlayers } Players</button>
    </div>
  )
}
