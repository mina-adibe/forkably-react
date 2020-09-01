import React from "react";
import person from "../images/person.png";
import ingredients from "../images/ingredients.png";
import quote from "../images/quote.png";

function Recepes() {
  return (
    <section>
      <div>
        {/* first section  */}
        <div className="w-8/12 mx-auto ">
          <div className="text-center w-1/2 mx-auto my-20 ">
            <h1 className="mb-10 text-3xl text-gray-900 text-center  font-semibold">
              Figure out what is in your food!
            </h1>
            <p className="text-lg leading-7">
              Have you ever looked at a commercial food product and wondered how
              to make it? Not a problem. Use this professional technique to
              recreate a recipe from any nutrition label.
            </p>
          </div>
        </div>
        <div className="w-4/5 mx-auto">
          <div className=" flex items-center w-full justify-center ">
            <button class=" flex  w-auto  mx-4   bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full ">
              Make recipe
            </button>
            <button class=" flex  w-auto mx-4  bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
              Recreate recipe
            </button>
          </div>
        </div>
        {/* second section  */}
        <div>
          <div className=".w-3/6 ">
            <img src={ingredients} alt="" className="w-auto mx-auto  -mb-48 " />
          </div>
          <div className="Recepes__component"></div>
        </div>

        {/* third section  */}

        <div className="grid  grid-cols-2 grid-rows-1 w-8/12 mx-auto ">
          <div className="grid-cols-1 -mt-12">
            <img src={person} alt="" />
          </div>
          <div className="grid-cols-2 flex  ">
            <div className=" flex flex-col my-auto">
              <div className="mb-8">
                <img src={quote} alt="" />
              </div>
              <h3 className="text-lg leading-6 italic text-gray-900 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dolor consequat nulla nunc, laoreet auctor ipsum viverra ac.
                Nullam laoreet nulla maximus augue malesuada placerat.{" "}
              </h3>
              <p className="text-blue-700">Daenerys Targaryen </p>
              <p>Seattle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recepes;
