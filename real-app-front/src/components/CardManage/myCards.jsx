import { Link } from "react-router-dom";
import PageHeader from "../common/pageHeader";
import { useMyCards } from "../../hooks/useMyCards";
import Card from "./card";

const MyCards = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title="my cards"
        description="your cards are in the list below"
      />

      <div className="row">
        <Link className="btn btn-success" to="/create-card">
          create a new card
        </Link>
      </div>
      <div className="row d-flex flex-wrap flex-row gap-2 justify-content-center">
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
