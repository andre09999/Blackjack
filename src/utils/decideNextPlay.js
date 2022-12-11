import { DRAW_CARD, fetchDeckAPI } from '../services/fetchDeckAPI';
import getCardValues from './getCardValues';

export const sumTotal = (cards) => {
  let sum = 0;
  cards.forEach((({ value }) => {
    sum += getCardValues(value);
  }));
  return sum
};

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const buyCard = async (deckId) => {
  const { cards } = await fetchDeckAPI(`/${deckId}${DRAW_CARD}`);
  return cards;
}

export default async function decideNextPlay(cards, deckId) {
  const sum = sumTotal(cards);
  const fear = getRandomInt(sum + 5);
  const risk = 21 - sum;
  if (fear < risk) {
    const newCard = await buyCard(deckId)
    return newCard;
  };
  return 'give up';
}