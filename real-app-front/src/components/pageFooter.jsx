import { Link } from "react-router-dom";
import { useAuth } from "./context/auth.context";
const Footer = () => {
  const { user } = useAuth();

  return (
    <div className="bg-primary-subtle mt-3">
      <footer className="py-2 mt-2 ">
        <ul className="nav justify-content-center mb-1">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          {user?.biz && (
            <li className="nav-item">
              <Link className="nav-link" to="/my-cards">
                My cards
              </Link>
            </li>
          )}
        </ul>
        <p className="text-center text-body-secondary">
          © 2023, hackerU react project
        </p>
      </footer>
    </div>
  );
};

export default Footer;
