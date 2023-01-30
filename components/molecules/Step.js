import React from "react";

import { stylesObj } from "../../styles/stylesSpecific";

function Step({ number = 1, children }) {
  return (
    <div
      className={`w-[20vw] text-xs aspect-video rounded-md shadow-flat text-center flex justify-center items-center gap-0 relative`}
    >
      {children}
      <div className="absolute w-6 aspect-square rounded-full bg-secondry text-primaryLigther font-bold text-base -top-2 -right-2">
        {number}
      </div>
    </div>
  );
}

export default Step;
