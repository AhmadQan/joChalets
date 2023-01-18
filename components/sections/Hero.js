import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

function Hero() {
  const [loaded, setloaded] = useState(false);

  return (
    <section className="flex flex-col pt-12  items-stretch  h-screen overflow-hidden">
      <div className="flex flex-col px-5 gap-6 ">
        <h1 className="font-Koulen font-bold text-6xl text-grayLight ">
          Heavenly places
        </h1>
        <p className="font-Koulen font-thin text-xl text-accent text-opacity-75">
          You find the time and leave the place on US
        </p>
        <button className="border-secondry border-4 py-5 w-2/4 rounded-full font-IBMPlexSans font-bold text-grayLight text-xl shadow-md">
          Find Places
        </button>
      </div>
      <div className=" w-screen p-4 flex justify-center">
        <div className="p-2 w-full aspect-square rounded-full shadow-oval overflow-hidden">
          <div className="rounded-full overflow-hidden w-full h-full opacity-80">
            <Spline scene="https://prod.spline.design/zkb0FTI5m9uWFOyE/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
