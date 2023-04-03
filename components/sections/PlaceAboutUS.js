import React from "react";

function PlaceAboutUS({ description }) {
  return (
    <section
      style={{ background: "#FAFAFA" }}
      className="h-auto w-full border-y border-primary40  relative overflow-hidden py-11 px-6 "
    >
      <div className="h-full w-full  flex flex-col z-10 relative gap-8">
        <h2 className=" font-IBMPlexSans font-normal opacity-60 text-primary100">
          you need to know more about our place
          <br />{" "}
          <span className="font-bold font-Koulen text-3xl text-primary80">
            About Us
          </span>
        </h2>
        <p className="text-primary100">
          <pre className="w-full font-IBMPlexSansArabic text-right">
            {" "}
            {description || "there is no description for this place yet"}
          </pre>
        </p>
        <button className="w-[47%] aspect-btnOutlined border border-primary90 rounded-lg text-primary90">
          View More{" "}
        </button>
      </div>
      <div className=" z-0 w-3/4 rounded-full absolute h-full -top-[50%] bg-opacity-25 blur-3xl bg-primary50" />
      <div className=" z-0  w-3/4 right-0 rounded-full absolute h-full -bottom-[50%] bg-opacity-10 blur-3xl bg-teal-500" />
    </section>
  );
}

export default PlaceAboutUS;
