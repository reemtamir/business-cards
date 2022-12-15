import  { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteCard } from '../userService/card';

const CardDeleteCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) return;
    const remove = async () => {
      await deleteCard(id);
      toast('Card was deleted');
      navigate('/my-cards');
    };

    remove();
  }, []);
};

export default CardDeleteCard;
