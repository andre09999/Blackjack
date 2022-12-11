import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Context from '../Context/context';
import { fetchDeckAPI, NEW_DECK } from '../services/fetchDeckAPI';

export default function StartGame() {
  const { setDeckId, setBetValue, DataResult, setRetry } = useContext(Context);
  const [betInput, setBetInput] = useState('');
  const [start, setStart] = useState(false);
  
  const { data: { account: { balance } } } = DataResult;

  useEffect(() => {
    setRetry(false);
  });

  const validateBetValue = () => {
    const betValue = Number(betInput);
    return (betValue < balance && betValue > 0) ? false : true;
  }

  const handleChange = ({ target }) => {
    setBetInput(target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newDeckId = await fetchDeckAPI(NEW_DECK);
    setBetValue(Number(betInput))
    setDeckId(newDeckId.deck_id);
    setStart(true);
  }

  return (
    <div className='all-start'>
      <Header/>
    <div className='container-play One'>
    <form onSubmit={ handleSubmit } className='form-start'>
      <label htmlFor="bet" className='wallet'>
       <h1 className="h1">Bet value</h1> 
        <input
          id="bet"
          type="number"
          min='0'
          placeholder='Enter your bet'
          onChange={ handleChange }
          className='input'
        />
      </label>
      <button
        type="submit"
        disabled={ validateBetValue() }
        className='button'
      >
        Start
      </button>
      {start && <Navigate to="/play" replace={ true } />}
    </form>
  </div>
  </div>
  );
}
