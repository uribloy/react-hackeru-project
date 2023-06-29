import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardsService from "../../services/cardService";
import { toast } from "react-toastify";

const DeleteCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteCard = async () => {
      await cardsService.deleteCard(id);
      toast.success("card deleted");
      navigate("/my-cards");
    };
    deleteCard();
  }, [id, navigate]);

  return null;
};

export default DeleteCard;
