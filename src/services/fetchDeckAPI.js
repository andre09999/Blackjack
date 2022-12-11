const deckEndPoint = 'https://www.deckofcardsapi.com/api/deck';
export const NEW_DECK = '/new/shuffle/?deck_count=1';
export const DRAW_CARD = '/draw/?count=1'

export async function fetchDeckAPI(request) {
  try {
    const response = await fetch(`${deckEndPoint}${request}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}