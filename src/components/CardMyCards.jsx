import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAllCards } from '../hooks/useAllCards';
import Card from './Card';

const CardMyCards = () => {
  const [color, setColor] = useState('black');
  const setRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };
  const cards = useAllCards();
  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setColor(setRandomColor());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="container">
        {cards.length ? (
          <Link className="link" to="/create-card">
            <i className="bi bi1 bi-plus-square"></i>
            <p>Add a new card</p>
          </Link>
        ) : (
          <Link to="/create-card">
            <img
              style={{
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
                border: `4px solid #${color}`,
              }}
              src="https://commcontents2.planetart.com/prod/ucd/42/42453/v2/front_sample_475_dc_0_gray.jpg"
              alt="create your card image"
            />
          </Link>
        )}

        {!cards.length ? (
          <h2 style={{marginTop:"8rem"}}>No Cards To Show</h2>
        ) : (
          <div className="cards-container">
            {cards.map((card) => (
              <Card key={card._id} card={card} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CardMyCards;
