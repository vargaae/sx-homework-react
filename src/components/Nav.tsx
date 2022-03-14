import { Link } from "react-router-dom";
import logo from "../images/splendex-logo.svg";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="splendex logo" className="nav-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex justify-content-start align-items-center">
              <span className="decksize">Deck size: </span>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <select
                className="form-select form-select-lg"
                aria-label="deck-size select"
              >
                <option>20</option>
              </select>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="w-800 btn btn-lg start">
                <Link className="nav-link" to="/game">
                  Start New Game
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
