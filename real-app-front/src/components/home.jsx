import useMyCards from "../hooks/useMyCards";
import Card from "./CardManage/card";
import PageHeader from "./common/pageHeader";
import { useAuth } from "./context/auth.context";
const Home = () => {
  const { user } = useAuth();
  const cards = useMyCards();
  return (
    <div>
      <PageHeader
        title={
          <>
            Card <i className="bi bi-person-vcard"></i> App
          </>
        }
        description={
          <>
            <h3>Welcome to card app</h3>
            Manage your cards easily
          </>
        }
      />

      <div className="row d-flex flex-wrap flex-row justify-content-center">
        {cards.length > 0 && (
          <span className="mt-3 text-danger-emphasis">
            <h3>Your recent cards</h3>
            <p>To manage your cards, please go to the My-Cards page</p>
          </span>
        )}
        {user?.biz ? (
          <>
            <div className="row d-flex flex-wrap flex-row justify-content-around">
              {!cards.length ? (
                <>
                  <p>no cards..</p>
                  <p>go to My-Cards page to create a cards</p>
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
        ) : (
          <span className="mt-3 text-danger-emphasis">
            <p>You are not signed or not a business user</p>
            <p> Register as a business user to view and manage your cards</p>
          </span>
        )}
      </div>
    </div>
  );
};

export default Home;
