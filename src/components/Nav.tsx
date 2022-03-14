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
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <span className="decksize">Deck size: </span>
              <select>
                <option>20</option>
              </select>
            </li>
            <li className="nav-item">
              <button className="w-800 btn btn-lg start">
                <Link className="nav-link" to="/game">
                  Start New Game
                </Link>
              </button>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Nav;
