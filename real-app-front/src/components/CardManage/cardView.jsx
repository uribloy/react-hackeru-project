import { useParams } from "react-router-dom";
import useCard from "../../hooks/useCard";

const ViewCard = () => {
  const { id } = useParams();
  const card = useCard(id);
  const { bizName, bizDescription, bizAddress, bizPhone, bizImage } = card;
  return (
    <div className=" align-content-center my-4 m-auto">
      <div className="row g-0  ">
        <div className="col-md-4">
          <img
            className="img-fluid rounded-start"
            style={{ height: 225, borderRadius: 10 }}
            src={bizImage}
            alt={bizName}
          />
        </div>
        <div className="col-md-4 px-3">
          <div className="card-body">
            <h5 className="card-title">{bizName}</h5>
            <p className="card-text">{bizDescription}</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewCard;
