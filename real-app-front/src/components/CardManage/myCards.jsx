import { Link } from "react-router-dom";
import PageHeader from "../common/pageHeader";
import { useMyCards } from "../../hooks/useMyCards";
import Card from "./card";

const MyCards = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        className="my-2"
        title="my cards"
        description="your cards are in the list below"
      />
      <div className="row-cols-auto d-flex justify-content-center py-2">
        <Link className="btn btn-sm btn-success" to="/create-card">
          add a new card
        </Link>
      </div>
      <div className="row d-flex flex-wrap flex-row  justify-content-evenly">
        {!cards.length ? (
          <p>no cards yet add your cards..</p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};

export default MyCards;
