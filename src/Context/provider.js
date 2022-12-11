import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './context';

function Provider({ children }) {
  const [gameName, setGameName] = useState('nomebonito')
  const [name, setName] = useState('nome')
  const [deckId, setDeckId] = useState('');
  const [betValue, setBetValue] = useState(0);
  const [loginNumber, SetloginNumber]= useState();
  const [DataResult, SetDataResult] = useState('');
  const [retry, setRetry] = useState(false);
  const [players, setPlayers] = useState();
  const [balance, setBalance] = useState(0);
  const [opResult, setOpResult] = useState();
  const [balanceHistory, setBalanceHistory] = useState([]);

  // const endPoint = 'https://api.testnet.klever.finance/swagger/index.html';
  
  useEffect( () => {
    if(loginNumber){   
      fetch(`https://api.testnet.klever.finance/address/${loginNumber}`)
      .then((res) => res.json()).then((data) => {
        SetDataResult(data);
        setBalance(data.data.account.balance)
      });
    }
  },[loginNumber]);
  
  const context = {
    setGameName,
    gameName,
    setName,
    name,
    deckId,
    loginNumber,
    SetloginNumber,
    DataResult,
    setDeckId,
    betValue,
    setBetValue,
    retry,
    setRetry,
    players,
    setPlayers,
    balance,
    setBalance,
    opResult,
    setOpResult,
    balanceHistory,
    setBalanceHistory,
  };


  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
