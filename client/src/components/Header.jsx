import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "nes.css/css/nes.css";

function Header() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <>
            <li>
              <button type="button" className="nes-btn is-error" href="/" onClick={() => Auth.logout()}>
              Logout
              </button>
            </li>
            <li>
              <Link type="button" className="nes-btn is-warning">
                history
              </Link>
            </li>
            <li>
              <Link type="button" className="nes-btn is-warning" to="/create">
                Plan a Day
              </Link>
            </li>
          </>
      </ul>
      );
    } else {
      return (
        <>
        <li>
          <Link type="button" to="/login" className="nes-btn is-primary">
            {" "}
            Login
          </Link>
        </li>
        <li>
          <Link type="button" to="/register" className="nes-btn is-primary">
            {" "}
            Register
          </Link>
        </li>
      </>
      );
    }
  }

  return (
    <header className="header nes-container is-dark">
      <div className="logo">
        <Link type="button" className="nes-btn my" to="/">
          MY:24
        </Link>
      </div>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Header;
