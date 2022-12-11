export default function getCardValues(value) {
  if (value === 'KING') return 10;
  if (value === 'QUEEN') return 10;
  if (value === 'JACK') return 10;
  if (value === 'ACE') return 1;
  return Number(value);
}