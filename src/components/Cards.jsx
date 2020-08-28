import React from "react";
import imgcard1 from "../images/img-card1.png";
import imgcard2 from "../images/img-card2.png";
import imgcard3 from "../images/img-card3.png";
import heart from "../images/heart.png";
import comment from "../images/comment.png";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";

function Cards() {
  return (
    <div>
      <section className="cardssection">
        <div className="container">
          <div className="cardsection__title">
            <h3>Latest Recipes from the community</h3>
            <p>Newly added recipe for your inspiration</p>
          </div>
          <div className="cards grid-container">
            {/* <!-- card one  --> */}
            <div className="card">
              <div className="card__img_holder">
                <img className="card__image" src={imgcard1} alt="" />
              </div>
              <div className="card__footter">
                <div className="card__social">
                  <ul>
                    <li>
                      <img src={heart} alt="" />
                    </li>
                    <li className="card__social-num">12</li>
                    <li>
                      <img src={comment} alt="" />
                    </li>
                    <li className="card__social-num">5</li>
                  </ul>
                </div>
                <div className="card__text">
                  <h3 className="card__header-txt">
                    Posted by{" "}
                    <span className="card__author">Catelyn Stark</span>
                  </h3>
                  <h2 className="card__tittle-txt">Spicy Posole Rojo</h2>
                  <h2 className="card__desc-txt">Light Meal</h2>
                  <p className="card__main-txt">
                    Spicy combination of beef, beans and tomato sauce.
                  </p>
                  <h3 className="card__view-txt">VIew Recipe >></h3>
                </div>
                <div className="card__avatar">
                  <img src={avatar1} alt="" />
                </div>
              </div>
            </div>
            {/* <!-- card two  --> */}
            <div className="card">
              <div className="card__img_holder">
                <img className="card__image" src={imgcard2} alt="" />
              </div>
              <div className="card__footter">
                <div className="card__social">
                  <ul>
                    <li>
                      <img src={heart} alt="" />
                    </li>
                    <li className="card__social-num">12</li>
                    <li>
                      <img src={comment} alt="" />
                    </li>
                    <li className="card__social-num">5</li>
                  </ul>
                </div>
                <div className="card__text">
                  <h3 className="card__header-txt">
                    Posted by{" "}
                    <span className="card__author">Catelyn Stark</span>
                  </h3>
                  <h2 className="card__tittle-txt">Spicy Posole Rojo</h2>
                  <h2 className="card__desc-txt">Light Meal</h2>
                  <p className="card__main-txt">
                    Spicy combination of beef, beans and tomato sauce.
                  </p>
                  <h3 className="card__view-txt">VIew Recipe >></h3>
                </div>
                <div className="card__avatar">
                  <img src={avatar2} alt="" />
                </div>
              </div>
            </div>
            {/* <!-- card three  --> */}
            <div className="card">
              <div className="card__img_holder">
                <img className="card__image" src={imgcard3} alt="" />
              </div>
              <div className="card__footter">
                <div className="card__social">
                  <ul>
                    <li>
                      <img src={heart} alt="" />
                    </li>
                    <li className="card__social-num">12</li>
                    <li>
                      <img src={comment} alt="" />
                    </li>
                    <li className="card__social-num">5</li>
                  </ul>
                </div>
                <div className="card__text">
                  <h3 className="card__header-txt">
                    Posted by{" "}
                    <span className="card__author">Catelyn Stark</span>
                  </h3>
                  <h2 className="card__tittle-txt">Spicy Posole Rojo</h2>
                  <h2 className="card__desc-txt">Light Meal</h2>
                  <p className="card__main-txt">
                    Spicy combination of beef, beans and tomato sauce.
                  </p>
                  <h3 className="card__view-txt">VIew Recipe >></h3>
                </div>
                <div className="card__avatar">
                  <img src={avatar3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="cardssection__button">
            <a href="/" className="/">
              Find Out More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
