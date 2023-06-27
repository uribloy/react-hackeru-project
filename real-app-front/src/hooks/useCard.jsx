import { useEffect, useState } from "react";
import cardsService from "../services/cardService";

export const useCard = (id) => {
  const [cards, setCards] = useState({});

  useEffect(() => {
    const getCard = async () => {
      const { data } = await cardsService.getCard(id);
      setCards(data);
    };
    getCard();
  }, [id]);

  return cards;
};

export default useCard;
