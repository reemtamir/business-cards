import { useEffect, useState } from 'react';
import { getAll } from '../userService/card';

export function useAllCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const { data } = await getAll();

      setCards(data);
    };
    getCards();
  }, []);
  return cards;
}
