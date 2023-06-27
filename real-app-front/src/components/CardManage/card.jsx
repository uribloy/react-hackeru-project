import { Link } from "react-router-dom";
import MouseAlert from "../mouseAlert";
const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <>
      <div
        className="card col-12 col-md-6 col-lg-3 m-2"
        style={{ width: "18rem", backgroundColor: "beige" }}
      >
        <img
          className="card-img-top pt-2"
          style={{ height: 225, borderRadius: 10 }}
          src={bizImage}
          alt={bizName}
        />
        <div className="card-body text-center my-2">
          <h5 className="card-title">{bizName}</h5>
          <p className="card-text">{bizDescription}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="bi bi-geo-alt-fill me-1"></i>
            {bizAddress}
          </li>
          <li className="list-group-item">
            <i className="bi bi-telephone-fill me-1"></i>
            {bizPhone}
          </li>
        </ul>

        <div className="card-body row-cols-auto d-flex justify-content-around mt-2">
          <Link to={`/my-cards/${_id}`} className="card-link">
            <MouseAlert
              msg={"View full details"}
              btnstyle={"btn btn-sm btn-outline-info"}
              value={
                <>
                  View<i className="bi bi-eye-fill ms-1"></i>
                </>
              }
            ></MouseAlert>
          </Link>
          <Link to={`/my-cards/edit/${_id}`} className="card-link">
            <MouseAlert
              msg={"edit this card"}
              btnstyle={"btn btn-sm btn-outline-secondary"}
              value={
                <>
                  Edit<i className="bi bi-pencil-square ms-1"></i>
                </>
              }
            ></MouseAlert>
          </Link>
          <Link to={`/my-cards/delete/${_id}`} className="card-link">
            <MouseAlert
              msg={"delete this card"}
              btnstyle={"btn btn-sm btn-outline-danger"}
              value={
                <>
                  delete<i className="bi bi-trash3-fill ms-1"></i>
                </>
              }
            ></MouseAlert>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
