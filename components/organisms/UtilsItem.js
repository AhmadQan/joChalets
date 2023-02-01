import React from "react";
import HouseBoldIcon from "../../client/assets/icons/HouseBoldIcon";
import UtilsIcon from "../molecules/UtilsIcon";

function UtilsItem() {
  return (
    <div className=" relative w-[47%] overflow-hidden bg-primaryWhite aspect-square shadow-flat rounded-lg flex flex-col p-3">
      <div className="flex justify-between items-center">
        <p className="text-xs font-bold font text-primaryDark">Bulding info</p>
        <UtilsIcon className={"bg-primary "}>
          <HouseBoldIcon fill={"#dce7f7"} className={"w-7/12"} />
        </UtilsIcon>
      </div>
      <p className="text-sm">
        2 bedrooms <br /> 1salon <br /> 3bathrooms <br />6 beds
      </p>
      <HouseBoldIcon
        fill={"#97B7E8"}
        className={"absolute w-2/3 aspect-square opacity-40 -right-7 top-9 "}
      />
    </div>
  );
}

export default UtilsItem;
