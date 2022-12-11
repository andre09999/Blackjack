import React, { useEffect } from 'react';
import getCardValues from '../utils/getCardValues';

export default function Count({ cards, total, setTotal }) {
  useEffect(() => {
    const sumTotal = () => {
      let sum = 0;
      cards.forEach((({ value }) => {
        sum += getCardValues(value);
      }));
      setTotal(sum);
    };
    sumTotal();
  }, [cards, setTotal]);

  return (
    <h1 className='text-color One'>{total}</h1>
  )
}
