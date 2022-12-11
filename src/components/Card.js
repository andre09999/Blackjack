import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ card, isUp }) {
  return (
    isUp ? (
      <img  className='One' width='180px' src={ card.image } alt={ `${card.value} of ${card.suit}` } />
    ) : (
      <img 
      className='One'
        src='https://cutewallpaper.org/24/playing-card-back-png/playing-cards-back-design-in-blue-sticker.png'
        alt='card'
      />
    )
  )
}

Card.propTypes = {
  card: PropTypes.arrayOf(PropTypes.object),
  isUp: PropTypes.bool,
}

Card.defaultProps = {
  card: { image: '', suit: '', value: '' },
  isUp: true,
}
