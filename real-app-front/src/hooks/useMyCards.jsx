import { useEffect, useState } from "react";
import cardsService from "../services/cardService";
import { useAuth } from "../components/context/auth.context";

export const useMyCards = () => {
  const { user } = useAuth();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getCards = async () => {
      try {
        const { data } = await cardsService.getAll();
        setCards(data);
      } catch ({ response }) {
        return cards;
      }
    };
    if (user?.biz) {
      getCards();
    }
  }, []);

  return cards;
};

export default useMyCards;
