import React from "react";

import BubbleRow from "../molecules/BubbleRow";

function Hero() {
  return (
    <div className="h-screen w-full bg-white shadow-hole flex flex-col justify-between  items-center overflow-hidden relative">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2Fstream.png?alt=media&token=76ecbf51-5ec3-4e33-9880-2fa5fb60f8cf"
        className={"w-full object-cover absolute top-0"}
      />
      <BubbleRow />
      <BubbleRow />
      <BubbleRow />
      <div className="h-[91.549vh] w-full absolute top-0  flex flex-col items-center justify-end  ">
        <div className="h-[60.128%] w-[93.606%] bubblerGradient border border-blue-500 backdrop-blur-md rounded-20 "></div>
      </div>
    </div>
  );
}

export default Hero;
