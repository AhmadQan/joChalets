import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

function Hero() {
  const [loaded, setloaded] = useState(false);

  return (
    <section className="flex flex-col pt-12  items-stretch  h-screen">
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
      <div className="h-3/6 w-screen relative">
        {loaded || (
          <Image
            className="blur-lg"
            fill={true}
            src={"/HeroCapture.PNG"}
          ></Image>
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
