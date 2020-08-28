import React from "react";
import mainlogo from "../images/main-logo.png";

function Header() {
  return (
    <div>
      <header className="headersection">
        <div className="container">
          <nav>
            <div className="navigation-bar">
              <div className="navigation-bar__logo">
                <img src={mainlogo} alt="logo" />
              </div>
              {/* <!-- <div className="navigation-bar__links">
                <ul>
                  <li><a href="/">Find Recipe </a></li>
                  <li><a href="/">Share Recipe </a></li>
                  <li><a href="/"> Make Recipe</a></li>
                  <li><a href="/">Recreate Recipe </a></li>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Contact</a></li>
                  <li><a href="/">Login</a></li>
                  <li><span>Register</span></li>
                </ul>
              </div> --> */}
              {/* <!-- ------------------------ begin  copd nav  ------------> */}
              <div className="header-area">
                {/* <!-- site-navbar start --> */}
                <div className="navbar-area">
                  <div className="header-area__container">
                    <nav className="site-navbar">
                      {/* <!-- site menu/nav --> */}
                      <ul>
                        <li>
                          <a href="/">Find Recipe </a>
                        </li>
                        <li>
                          <a href="/">Share Recipe </a>
                        </li>
                        <li>
                          <a href="/"> Make Recipe</a>
                        </li>
                        <li>
                          <a href="/">Recreate Recipe </a>
                        </li>
                        <li>
                          <a href="/">About</a>
                        </li>
                        <li>
                          <a href="/">Contact</a>
                        </li>
                        <li>
                          <a href="/">Login</a>
                        </li>
                        <li>
                          <a href="/">Register</a>
                        </li>
                      </ul>
                      {/* 
                      <!-- nav-toggler for mobile version only --> */}
                      <button className="nav-toggler">
                        <span></span>
                      </button>
                    </nav>
                  </div>
                </div>
                {/* <!-- navbar-area end --> */}
              </div>
              {/* <!-------------------------- end  copd nav  --------------------> */}
            </div>
          </nav>

          <section className="headersection__feature">
            <div className="headersection__feature__box">
              <h1>
                Customize Every
                <span className="headersection__recipe">recipe!</span>
              </h1>

              <p>
                Make your own version of a favorite recipe without doing all the
                dishes
              </p>
              <div>
                <a href="/" className="headersection__button">
                  Get Started!
                </a>
              </div>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}

export default Header;
