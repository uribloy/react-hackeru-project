import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./context/auth.context";
const Navbar = () => {
  const { user } = useAuth();
  const [mode, setMode] = useState("light");
  const htmlTag = document.getElementsByTagName("html")[0];
  useEffect(() => {
    htmlTag.setAttribute("data-bs-theme", mode);
  }, [mode]);
  return (
    <>
      <nav
        className="navbar navbar-expand-md bg-primary-subtle"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Card <i className="bi bi-person-vcard"></i> App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              {user?.biz && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/my-cards">
                    My cards
                  </NavLink>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              {user ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-out">
                    LogOut
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sign-up">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sign-in">
                      Sign In
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="form-check form-switch m-3">
          <input
            className="form-check-input"
            onChange={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
            type="checkbox"
            id="flexSwitchCheckDefault"
          />{" "}
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {mode === "light" ? (
              <i className="bi bi-brightness-high-fill"></i>
            ) : (
              <i className="bi bi-moon-fill"></i>
            )}
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
