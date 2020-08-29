import React from "react";
import search from "../images/icon-search.png";
import share from "../images/icon-share.png";
import pen from "../images/icon-pen.png";

import imgbox from "../images/imagebox.png";
import colorrectangle from "../images/colorrec.png";

function Solutions() {
  return (
    <section className="w-2/3 mx-auto">
      <div>
        {/* it should be font-size: 27px;  color: #242424 */}
        <h3 className="text-3xl text-gray-900 text-center mb-12 font-semibold">
          One stop solutions for your cooking habit
        </h3>
      </div>
      {/* __________________first section  __________________ */}
      <div>
        <div className="flex justify-center  flex-wrap content-center ">
          <div
            className="flex-1 text-gray-700  px-4 py-2 m-2 w-2/4 "
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              backgroundImage: `url(${colorrectangle})`,
            }}
          >
            <div className="relative top-8 left-8  h-64">
              <img src={imgbox} alt="" />
            </div>
          </div>
          <div className="flex-1 text-gray-700 text-left  px-4 py-2 m-2 w-2/4">
            <div>
              <img className="py-2" src={search} alt="" />
            </div>
            <h3 className="font-semibold text-3xl mb-8">Find Recipes</h3>
            <p className="text-base leading-6 font-normal ">
              Discover custom recipes for your home kitchen or batch formulas
              for restaurants and commercial kitchens.
            </p>
          </div>
        </div>
      </div>
      {/* __________________second section  __________________ */}
      <div>
        <div className="flex justify-center  flex-wrap content-center  ">
          <div className="flex-1 text-gray-700 text-left  px-4 py-2 m-2 w-2/4  ">
            <div>
              <img className="py-2" src={share} alt="" />
            </div>
            <h3 className="font-semibold text-3xl mb-8">share Recipes</h3>
            <p className="text-base leading-6 font-normal ">
              Discover custom recipes for your home kitchen or batch formulas
              for restaurants and commercial kitchens.
            </p>
          </div>

          <div
            className="flex-1 text-gray-700  px-4 py-2 m-2 w-2/4 "
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              backgroundImage: `url(${colorrectangle})`,
            }}
          >
            <div className="relative top-8 float-right  h-64">
              <img src={imgbox} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* __________________third section  __________________ */}
      <div>
        <div className="flex justify-center  flex-wrap content-center ">
          <div
            className="flex-1 text-gray-700  px-4 py-2 m-2 w-2/4"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              backgroundImage: `url(${colorrectangle})`,
            }}
          >
            <div className="relative top-8 left-8  h-64">
              <img src={imgbox} alt="" />
            </div>
          </div>
          <div className="flex-1 text-gray-700 text-left  px-4 py-2 m-2 w-2/4">
            <div>
              <img className="py-2" src={pen} alt="" />
            </div>
            <h3 className="font-semibold text-3xl mb-8">make Recipes</h3>
            <p className="text-base leading-6 font-normal ">
              Discover custom recipes for your home kitchen or batch formulas
              for restaurants and commercial kitchens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
