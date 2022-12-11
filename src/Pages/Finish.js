import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import RetryButton from '../components/RetryButton';
import Context from '../Context/context';
import earningModifier from '../utils/earningModifier';

export default function Finish() {
  const { 
    retry, 
    betValue, 
    players, 
    balance, 
    setBalance, 
    opResult, 
    balanceHistory, 
    setBalanceHistory 
  } = useContext(Context);

  const [result, setResult] = useState();

  useEffect(() => {
    const getEarnings = () => {
      let earning;
      if (players > 1) {
        earning = Math.round(betValue * (players - 1));
      } else {
        const modifier = earningModifier(opResult);
        earning = Math.round(betValue * modifier);
      }
      setBalance(balance + earning);
      setBalanceHistory([...balanceHistory, `+ ${earning}`]);
      setResult(earning);
    }
    getEarnings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='finsh'>

      <h1>You have earned: { result }</h1>
      <RetryButton />
      { retry && <Navigate to="/play" replace={ true } /> }
    </div>
  )
}
