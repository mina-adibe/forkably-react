import React from "react";
import instgram from "../images/instgram-icon.png";
import twitter from "../images/twitter-icon.png";
import facebook from "../images/fb-icon.png";
import phone from "../images/phone.png";
import line from "../images/line2.png";
import mainlogo from "../images/main-logo.png";

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-section__row1">
            <div className="footer-section__row1__col1">
              <h2>You have awesome recipe? Let the others know and try!</h2>
              <p>Join millions of self learning cooks on the globe</p>
              <a href="/" className="footer-section__row1__col1__button">
                Register Now!
              </a>
            </div>
            <div className="footer-section__row1__col2">
              <h2>Stay informed with new recipes and culinary news</h2>
              <p>Subscribe to our mailing list, we wont spam.</p>
              <div className="form-group">
                <input
                  className="form-field"
                  type="email"
                  placeholder="your Email adress"
                />
                <span>submit</span>
              </div>
            </div>
          </div>
          <div className="footer-section__row2">
            <div className="footer-section__nav-bar">
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
                  <a href="/">register</a>
                </li>
              </ul>
            </div>
            <div className="footer-section__icons">
              <ul>
                <li>
                  <img src={instgram} alt="" />
                </li>
                <li>
                  <img src={twitter} alt="" />
                </li>
                <li>
                  <img src={facebook} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-section__line">
            <img src={line} alt="" />
          </div>
          <div className="footer-section__row4">
            <div className="footer-section__col1">
              <div className="footer-section__logo">
                <img src={mainlogo} alt="" />
              </div>
              <div className="footer-section__copyright">
                <p>Copyright © 2020-2029 Forkably.com. All Rights Reserved.</p>
                <p>
                  The use of this website requires acceptance of the Terms and
                  Conditions and Privacy Policy.
                </p>
              </div>
            </div>
            <div className="footer-section__col2">
              <div className="footer-section__support">
                <h3>Need help?</h3>
                <p>Call our support</p>
              </div>
              <div className="footer-section__phone">
                <img src={phone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
