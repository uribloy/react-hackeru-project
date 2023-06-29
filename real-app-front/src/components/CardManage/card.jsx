import { Link } from "react-router-dom";
const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <>
      <div
        className="card col-3 col-sm-6 m-2 py-2"
        style={{ width: "16rem", background: "bisque" }}
      >
        <img
          className="card-img-top pt-2"
          style={{ height: 225, borderRadius: 10 }}
          src={bizImage}
          alt={bizName}
        />
        <div className="card-body text-center my-auto">
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
        {window.location.pathname === "/my-cards" && (
          <div
            className="card-body row-cols-auto d-flex justify-content-center p-2 mt-2"
            style={{ maxHeight: "45px" }}
          >
            <Link
              to={`/my-cards/${_id}`}
              className="card-link btn btn-sm btn-outline-info"
            >
              View<i className="bi bi-eye-fill ms-1"></i>
            </Link>
            <Link
              to={`/my-cards/edit/${_id}`}
              className="card-link btn btn-sm btn-outline-secondary"
            >
              Edit<i className="bi bi-pencil-square ms-1"></i>
            </Link>
            <Link
              to={`/my-cards/delete/${_id}`}
              className="card-link btn btn-sm btn-outline-danger"
            >
              Delete<i className="bi bi-trash3-fill ms-1"></i>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
