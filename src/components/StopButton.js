import React, { useContext } from 'react';
import Context from '../Context/context';

export default function StopButton({ setStop, inTurn, total }) {
  const { setOpResult } = useContext(Context);

  const handleClick = () => {
    if (total) setOpResult(total);
    setStop(true);
  }

  return (

    <button type="button" className='button' onClick={ handleClick } disabled={ !inTurn }>

      Stop
    </button>
  )
}
