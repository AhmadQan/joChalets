import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import TypingText from "../molecules/TypingText";

function Hero() {
  const [loaded, setloaded] = useState(false);

  return (
    <section className="flex flex-col py-16 gap-7 relative items-center  h-screen overflow-hidden">
      <div className="gradient-02 h-full w-full" />
      <div className="gradient-04 h-1/2 w-1/3 absolute bottom-0 right-0" />
      <div className="flex flex-col px-5 gap-6 z-10 ">
        <TypingText title={"time for summer fun"} />

        <p className="font-Koulen font-thin text-lg text-secondryBase text-opacity-75">
          our places collection is the top places to have a good summer fun
        </p>
        {/* <button className="flex items-center justify-center gap-2 font-IBMPlexSans text-xl font-bold uppercase bg-cyan-100 bg-opacity-10 text-primaryLigther border-solid border-2 border-secondry rounded-full px-6 py-4 w-max shadow-md  shadow-primaryDark">
          Find Places
        </button> */}
      </div>
      <div className=" w-screen p-4 flex justify-center absolute bottom-20 z-0">
        <div className="p-3 w-full aspect-square rounded-full shadow-oval overflow-hidden">
          <div className="rounded-full overflow-hidden w-full h-full opacity-80">
            <Spline scene="https://prod.spline.design/zkb0FTI5m9uWFOyE/scene.splinecode" />
          </div>
        </div>
      </div>
      <div className="w-card h-20 rounded-full  bg-opacity-20 backdrop-blur-md border-secondryBase border-2 absolute shadow-lg bottom-40 bg-primaryligth z-10 ">
        <form className="flex gap-3  justify-between pl-4 items-center h-full">
          <input type="datetime-local" id="dateFrom" className="hidden" />
          <label
            htmlFor="dateFrom"
            className="text-secondryligth border-r-2 h-full text-center p-5"
          >
            {" "}
            from
          </label>
          <input type="date" id="dateTo" className="hidden" />
          <label
            htmlFor="dateTo"
            className="text-secondryligth h-full text-center p-5 border-r-2"
          >
            {" "}
            To
          </label>
          <button className="text-secondryLigther bg-secondry rounded-full h-full aspect-square">
            GO
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
