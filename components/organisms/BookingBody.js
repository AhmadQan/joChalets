import React from "react";

import MaximizeOutlineIcon from "../../client/assets/icons/MaximizeOutlineIcon";
import LocationBoldIcon from "../../client/assets/icons/LocationBoldIcon";

function BookingBody() {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div className="h-[16.4%] w-full  flex justify-between">
        <div className="h-full shadow-flat rounded-md text-center px-2 flex justify-center items-center">
          <p>Created</p>
        </div>
        <div className="h-full shadow-flat rounded-md  px-2 flex justify-center items-center">
          <p>#173868</p>
        </div>
      </div>
      <div className="h-[65.78%] w-full shadow-flat rounded-lg flex flex-col  ">
        <div className="w-full flex h-[57%] justify-between">
          <div className="h-full w-1/2 flex flex-col justify-center p-3 gap-1">
            <p className="font-medium font-IBMPlexSans text-base">
              Chalet Name
            </p>
            <div className="flex gap-2">
              <LocationBoldIcon fill={"#333"} className={"w-3 aspect-square"} />
              <p className="text-xs">Dead Sea</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[16.4%] w-full flex justify-end">
        <div className="h-full aspect-square p-2 shadow-flat rounded-lg ">
          <MaximizeOutlineIcon
            fill={"#333"}
            className={"h-full aspect-square"}
          />
        </div>
      </div>
    </div>
  );
}

export default BookingBody;
