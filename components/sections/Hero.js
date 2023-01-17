import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

function Hero() {
  const [loaded, setloaded] = useState(false);

  return (
    <section className="flex flex-col pt-12  items-stretch  h-screen overflow-hidden">
      <div className="flex flex-col px-5 gap-6 ">
        <h1 className="font-IBMPlexSans font-bold text-7xl text-grayLight text-opacity-90">
          Heavenly places
        </h1>
        <p className="font-Koulen font-thin text-xl text-accent text-opacity-75">
          You find the time and leave the place on US
        </p>
        <button className="border-secondry border-4 py-5 w-2/4 rounded-full font-IBMPlexSans font-bold text-grayLight text-xl shadow-md">
          Find Places
        </button>
      </div>
      <div className="h-3/6 w-screen ">
        {loaded || (
          <img
            className="w-full aspect-video blur-lg"
            src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2FheroCapture.PNG?alt=media&token=4cf8fe09-f3a0-4b77-ab1a-12f9a10f5a86"
          />
        )}
        <Spline
          style={{
            opacity: `${loaded ? 1 : 0}`,
          }}
          onLoad={(e) => {
            if (e._rafId) {
              setloaded(true);
            }
            console.log("spline loaded", e._rafId);
          }}
          width={100}
          scene="https://prod.spline.design/rWeWd-NEvZOeSyXR/scene.splinecode"
        />
      </div>
    </section>
  );
}

export default Hero;
