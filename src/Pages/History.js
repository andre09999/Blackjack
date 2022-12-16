import React, { useContext } from 'react';
import Context from '../Context/context';

export default function History() {
  const { balanceHistory } = useContext(Context);

  return (
    <div className='historic-center'>
      <ul className='Lista'>
        <h1 className='h'>History Bet</h1>
      <li className='historic'>
        {balanceHistory.map((balance, index) => <li key={ `${balance}${index}` }>{ balance }</li>)}
      </li>
      </ul>
      <a className='button aq' href="/home" >Back</a>
    </div>
  );
}

