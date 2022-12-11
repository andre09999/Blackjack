import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context/context';

export default function History() {
  const { balanceHistory } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className='historic-center'>
      <ul className='Lista'>
        <h1 className='h'>History Bet</h1>
      <li className='historic'>
        {balanceHistory.map((balance, index) => <li key={ `${balance}${index}` }>{ balance }</li>)}
      </li>
      </ul>
      <button className='button' type="button" onClick={() => navigate('/home')} >Back</button>
    </div>
  );
}
