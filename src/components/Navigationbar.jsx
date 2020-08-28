import React from "react";

function Navigationbar() {
  return (
    <div>
      navigation bar
      <nav>
        <div class="navigation-bar">
          <div class="navigation-bar__logo">
            <img src="./images/main-logo.png" alt="logo" />
          </div>
          {/* <!-- <div class="navigation-bar__links">
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
          <div class="header-area">
            {/* <!-- site-navbar start --> */}
            <div class="navbar-area">
              <div class="header-area__container">
                <nav class="site-navbar">
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

                  {/* <!-- nav-toggler for mobile version only --> */}
                  <button class="nav-toggler">
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
    </div>
  );
}

export default Navigationbar;
