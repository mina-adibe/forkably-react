import React from "react";
import img1 from "../images/before-footer-1.jpg";
import img2 from "../images/before-footer-2.jpg";
import img3 from "../images/before-footer-3.jpg";

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
          <div className="grid-cols-1   ">
            <div>
              <img className="w-full rounded-lg" src={img1} alt="" />
            </div>
            <div className=" text-white bg-gradient-to-t from-gray-800 ">
              <h3>Top 5 Tips to Become Master Chef</h3>
              <p>culinarynewsworld.com</p>
            </div>
          </div>
          <div className="grid-cols-2   ">
            <div>
              <img className="w-full" src={img2} alt="" />
            </div>
            <div className=" text-white bg-gradient-to-t from-gray-800 ">
              <h3>Top 5 Tips to Become Master Chef</h3>
              <p>culinarynewsworld.com</p>
            </div>
          </div>
          <div className="grid-cols-3   ">
            <div>
              <img className="w-full" src={img3} alt="" />
            </div>
            <div className=" text-white bg-gradient-to-t from-gray-800  ">
              <h3>Top 5 Tips to Become Master Chef</h3>
              <p>culinarynewsworld.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
