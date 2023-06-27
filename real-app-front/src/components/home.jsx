import useMyCards from "../hooks/useMyCards";
import Card from "./CardManage/card";
import PageHeader from "./common/pageHeader";
import { useAuth } from "./context/auth.context";
const Home = () => {
  const { user } = useAuth();
  const cards = useMyCards();
  // function Getcards() {
  //   const cards = [];
  //   cards.push(mycards);
  //   return cards;
  // }
  // function car() {
  //   <Getcards />;
  //   // return cards;
  // }
  // car();

  return (
    <>
      <PageHeader
        title={
          <>
            Card <i className="bi bi-person-vcard"></i> App
          </>
        }
        description="Welcome to card app,
        Manage your cards easily"
      />
      {user?.biz && (
        <>
          <div className="row">
            {!cards.length ? (
              <>
                {/* {cards.length > 0 && <h3>the recent cards</h3>} */}
                <p>no cards..</p>
              </>
            ) : (
              cards.toReversed().map((card, i) => {
                if (i < 3) {
                  return <Card key={card._id} card={card} />;
                }
                return null;
              })
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
