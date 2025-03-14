import { Link } from "react-router-dom";
import fav from '../assets/favicon.png'
import "./Nav.css";

export default function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/dashboard"  >
            <img src={fav} className="logo me-3" width="30" />
            amaya
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={`/dashboard`}
                  className={`nav-link ${
                    props.active == "home" ? "active" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/article`}
                  className={`nav-link ${
                    props.active == "Catalogue" ? "active" : ""
                  }`}
                >
                  Catalogue
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/facture`}
                  className={`nav-link ${
                    props.active == "facture" ? "active" : ""
                  }`}
                >
                  Factures
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/client`}
                  className={`nav-link ${
                    props.active == "client" ? "active" : ""
                  }`}
                >
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/exercice`}
                  className={`nav-link ${
                    props.active == "exercice" ? "active" : ""
                  }`}
                >
                  Exercices
                </Link>
              </li>
            </ul>
            <Link  className="ms-4 btn btn-outline-success my-2 my-sm-0"  to={`/`}>
         <i className="fas fa-sign-out-alt me-3"></i> augure@gmail.com 
        </Link> 
          </div>
        </div>
      </nav>
    </>
  );
}
