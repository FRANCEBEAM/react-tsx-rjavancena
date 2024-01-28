import React from "react";
import element1 from "../../assets/element1.svg";
import circles from "../../assets/circles.svg";

const Hero: React.FC = () => {
  return (
    <>
      <div className="w-full h-full my-44 max-w-[1200px] m-auto">
        <div className="w-[800px] m-auto">
          <img className="absolute right-[330px] z-0 top-40" src={circles} alt="" />
          <img className="absolute left-[230px] z-0 bottom-[200px]" src={element1} alt="" />
          <h1 className="text-6xl text-center uppercase font-black leading-tight">
            Your Trusted Partner in Quality Hardware Solutions
          </h1>
          <p className="text-center m-auto w-[490px] my-6">
            Discover a World of Tools, Building Materials, and Hardware
            Essentials at RJ Avancena Enterprises.
          </p>
        </div>
        <div className="m-auto flex justify-center">
          <button className="btn btn-md bg-btnprimary text-white uppercase">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
