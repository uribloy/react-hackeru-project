import { Link, useParams } from "react-router-dom";
import useCard from "../../hooks/useCard";

const ViewCard = () => {
  const { id } = useParams();
  const card = useCard(id);
  const { bizName, bizDescription, bizAddress, bizPhone, bizImage } = card;
  return (
    <div className="d-flex justify-content-center m-3 py-2">
      <div
        className="card mb-3"
        style={{ background: "bisque", maxWidth: "600px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              style={{ height: "100%", borderRadius: "1rem" }}
              src={bizImage}
              className="img-fluid p-2"
              alt={bizName}
            />
          </div>
          <div className="col-md-8">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link
                to={`/my-cards`}
                className="card-link btn btn-lg position-absolute top-0 end-0"
              >
                <i className="bi bi-x-circle-fill"></i>
              </Link>
            </div>

            <div className="card-body text-center">
              <h5 className="card-title">{bizName}</h5>
              <p className="card-text">{bizDescription}</p>
              <ul className="list-group list-group-flush text-start">
                <li className="list-group-item">
                  <i className="bi bi-geo-alt-fill me-1"></i>
                  {bizAddress}
                </li>
                <li className="list-group-item">
                  <i className="bi bi-telephone-fill me-1"></i>
                  {bizPhone}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewCard;
