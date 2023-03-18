import React from "react";

function UtilsIcon({ className, children }) {
  return (
    <div
      className={`${className} border-2  w-auto p-3 aspect-square rounded-full  shadow-flat flex justify-center items-center`}
    >
      {children}
    </div>
  );
}

export default UtilsIcon;
