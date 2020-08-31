import React from "react";
import search from "../images/icon-search.png";
import share from "../images/icon-share.png";
import pen from "../images/icon-pen.png";
import solutionImg1 from "../images/solution-section-a.jpg";
import solutionImg2 from "../images/solution-section-b.jpg";
import solutionImg3 from "../images/solution-section-c.jpg";

function Solutions() {
  return (
    <section className="w-2/3 mx-auto">
      <div>
        {/* it should be font-size: 27px;  color: #242424 */}
        <h3 className="text-3xl text-gray-900 text-center mb-12 font-semibold">
          One stop solutions for your cooking habit
        </h3>
      </div>

      {/* w:380 h:250 */}

      <div className="grid  grid-cols-2 grid-rows-3 gap-x-20 gap-y-12  grid-flow-row">
        <div className="grid-cols-1 ">
          <div className=" h-full  parent relative">
            <div className="w-4/6 bg-blue-200 inline-block h-full"></div>
            <div className="w-2/6  inline-block h-full"></div>
            <div className="bg-blue-700 absolute  w-10/12 top-0 my-6 ml-6">
              <img className="w-full  " src={solutionImg1} alt="" />
            </div>
          </div>
        </div>
        <div className="grid-cols-2  py-16">
          <div>
            <img className="py-2" src={search} alt="" />
          </div>
          <h3 className="font-semibold text-3xl mb-8">Find Recipes</h3>
          <p className="text-base leading-6 font-normal ">
            Discover custom recipes for your home kitchen or batch formulas for
            restaurants and commercial kitchens.
          </p>
        </div>
        <div className="grid-cols-3  py-16">
          <div>
            <img className="py-2" src={share} alt="" />
          </div>
          <h3 className="font-semibold text-3xl mb-8">share Recipes</h3>
          <p className="text-base leading-6 font-normal ">
            Discover custom recipes for your home kitchen or batch formulas for
            restaurants and commercial kitchens.
          </p>
        </div>

        <div className="grid-cols-4 ">
          <div className=" h-full  parent relative">
            <div className="w-2/6  inline-block h-full"></div>
            <div className="w-4/6  bg-pink-200 inline-block h-full"></div>
            <div className="bg-blue-700 absolute  w-10/12 top-0 right-0 my-6 mr-6">
              <img className="w-full  " src={solutionImg2} alt="" />
            </div>
          </div>
        </div>

        <div className="grid-cols-5 ">
          <div className=" h-full  parent relative">
            <div className="w-4/6 bg-teal-200 inline-block h-full"></div>
            <div className="w-2/6  inline-block h-full"></div>
            <div className="bg-blue-700 absolute  w-10/12 top-0 my-6 ml-6">
              <img className="w-full  " src={solutionImg3} alt="" />
            </div>
          </div>
        </div>
        <div className="grid-cols-6 py-16">
          <div>
            <img className="py-2" src={pen} alt="" />
          </div>
          <h3 className="font-semibold text-3xl mb-8">make Recipes</h3>
          <p className="text-base leading-6 font-normal ">
            Discover custom recipes for your home kitchen or batch formulas for
            restaurants and commercial kitchens.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
