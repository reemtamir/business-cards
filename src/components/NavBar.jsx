import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const NavBar = () => {
  const { user } = useAuth();

  return (
    <>
      <nav className="navbar w-100 navbar-expand-lg navbar-light bg-light mt-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Cards
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              {user?.biz && (
                <li className="nav-item">
                  <Link to="my-cards" className="nav-link">
                    My cards
                  </Link>
                </li>
              )}
            </ul>

            <ul className="navbar-nav ms-auto">
              {user ? (
                <li className="nav-item">
                  <Link to="log-out" className="nav-link">
                    Log out
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to="sign-in"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Sign in
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="sign-up" className="nav-link">
                      Sign up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
