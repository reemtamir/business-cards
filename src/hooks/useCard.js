import { useEffect, useState } from 'react';
import { getCard } from '../userService/card';

export const useCard = (id) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    const getUserCard = async () => {
      try {
        const { data } = await getCard(id);
        setCard(data);
      } catch ({ response }) {
        console.log(response.data);
      }
    };
    getUserCard();
  }, []);
  return card;
};
