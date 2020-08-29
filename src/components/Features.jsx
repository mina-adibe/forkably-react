import React from "react";
import search from "../images/reicepe-search.png";
import insight from "../images/get-insight.png";
import chat from "../images/chat.png";

function Features() {
  return (
    <div>
      <section className="features">
        <div className="container">
          <div className="features__cards">
            <div className="features__cards__card">
              <img src={search} alt="" />
              <h2>Millions of Recipe</h2>
              <p>Get access to recipes from around the world</p>
            </div>
            <div className="features__cards__card">
              <img src={insight} alt="" />
              <h2>Get Insight</h2>
              <p>Improve recipe with what others think</p>
            </div>
            <div className="features__cards__card">
              <img src={chat} alt="" />
              <h2>Get Socialize</h2>
              <p>Make friends with same hobby and taste</p>
            </div>
          </div>
          <div className="features__line-img">
            <img src="./images/line.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
