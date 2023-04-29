import React from "react";
import BookOutlineIcon from "../../client/assets/icons/BookOutlineIcon";

function PlaceAboutUS({ description }) {
  return (
    <section className="h-auto w-full font-IBMPlexSans   relative overflow-hidden py-11 px-6  overflow-y-auto">
      <div className="h-full w-full  flex flex-col z-10 relative gap-8">
        <h2 className="   opacity-60 text-primary50 font-semibold">
          you need to know more about our place
          <br />{" "}
          <span className="font-bold font-Koulen text-3xl text-primary100">
            About Us
          </span>
        </h2>
        <div className=" w-full aspect-square overflow-auto relative  px-4 py-7">
          <p className="text-primary100">
            <pre className="w-full font-IBMPlexSansArabic text-right">
              {" "}
              {description || "there is no description for this place yet"}
            </pre>
          </p>
          <BookOutlineIcon
            fill={"rgba(60, 207, 78, 0.3)"}
            className={"absolute bottom-0 right-0 w-1/2 aspect-square blur-sm"}
          />
        </div>
      </div>
      {/* <div className=" z-0 w-3/4 rounded-full absolute h-full -top-[50%] bg-opacity-25 blur-3xl bg-primary50" />
      <div className=" z-0  w-3/4 right-0 rounded-full absolute h-full -bottom-[50%] bg-opacity-10 blur-3xl bg-teal-500" /> */}
    </section>
  );
}

export default PlaceAboutUS;
