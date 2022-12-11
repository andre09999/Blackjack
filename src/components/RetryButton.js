import React, { useContext } from 'react';
import Context from '../Context/context';

export default function RetryButton() {
  const { setRetry } = useContext(Context);

  return (
    <button className='button' type="button" onClick={ () => setRetry(true) }>Try again</button>
  )
}