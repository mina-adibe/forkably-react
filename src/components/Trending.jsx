import React from "react";
import img1 from "../images/before-footer-1.jpg";
import img2 from "../images/before-footer-2.jpg";
import img3 from "../images/before-footer-3.jpg";
import date1 from "../images/date-1.png";
import date2 from "../images/date-2.png";
import date3 from "../images/date-3.png";

function Trending() {
  return (
    <section className="bg-gray-200">
      <div className=" w-4/5 mx-auto pb-20 pt-20 ">
        <div>
          <h3 className="text-center text-3xl leading-5 font-bold">
            What’s Trending in the culinary world
          </h3>
        </div>

        <div className="grid grid-cols-3 grid-rows-1  gap-x-8   pt-12">
          {/* -------------------- section 1 ------------------------------------------------------------ */}
          <div className="grid-cols-1   relative z-0 ">
            <div>
              <img className="w-full h-full rounded-lg" src={img1} alt="" />
            </div>
            <div className="flex flex-col justify-between text-white bg-gradient-to-t from-gray-800 absolute top-0 left-0 right-0  z-50  h-full">
              <div className="mt-4 ml-4">
                <img src={date1} alt="" />
              </div>
              <div className="mt-4 ml-4 w-4/5">
                <h3 className="pb-4 leading-tight font-bold text-sm">
                  Top 5 Tips to Become Master Chef
                </h3>
                <p className="pb-4  leading-tight text-sm">
                  culinarynewsworld.com
                </p>
              </div>
            </div>
          </div>
          {/* -------------------- section 2 ------------------------------------------------------------ */}
          <div className="grid-cols-2   relative z-0 ">
            <div>
              <img className="w-full h-full rounded-lg" src={img2} alt="" />
            </div>
            <div className="flex flex-col justify-between text-white bg-gradient-to-t from-gray-800 absolute top-0 left-0 right-0  z-50  h-full">
              <div className="mt-4 ml-4">
                <img src={date2} alt="" />
              </div>
              <div className="mt-4 ml-4 w-4/5">
                <h3 className="pb-4 leading-tight font-bold text-sm">
                  Top 5 Tips to Become Master Chef
                </h3>
                <p className="pb-4  leading-tight text-sm">
                  culinarynewsworld.com
                </p>
              </div>
            </div>
          </div>

          {/* -------------------- section 3 ------------------------------------------------------------ */}
          <div className="grid-cols-3   relative z-0 ">
            <div>
              <img className="w-full h-full rounded-lg" src={img3} alt="" />
            </div>
            <div className="flex flex-col justify-between text-white bg-gradient-to-t from-gray-800 absolute top-0 left-0 right-0  z-50  h-full">
              <div className="mt-4 ml-4">
                <img src={date3} alt="" />
              </div>
              <div className="mt-4 ml-4 w-4/5">
                <h3 className="pb-4 leading-tight font-bold text-sm">
                  Top 5 Tips to Become Master Chef
                </h3>
                <p className="pb-4  leading-tight text-sm">
                  culinarynewsworld.com
                </p>
              </div>
            </div>
          </div>

          {/* ------------------------------end ----------------------- */}
        </div>
      </div>
    </section>
  );
}

export default Trending;
