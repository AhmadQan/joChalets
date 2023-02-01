import React from "react";

function PlaceAboutUS() {
  return (
    <section
      style={{ background: "#FAFAFA" }}
      className="h-auto w-full  relative overflow-hidden py-11 px-6 z-10"
    >
      <div className="h-full w-full  flex flex-col  gap-8">
        <h2 className=" font-IBMPlexSans font-normal opacity-60 text-primaryDark">
          you need to know more about our place
          <br />{" "}
          <span className="font-bold font-Koulen text-3xl text-primary">
            About Us
          </span>
        </h2>
        <p className="text-primaryDarker">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia,{" "}
        </p>
        <button className="w-[47%] aspect-btnOutlined border-2 border-primary rounded-lg text-primaryDark">
          View More{" "}
        </button>
      </div>
      <div className=" -z-10 w-3/4 rounded-full absolute h-full -top-[50%] bg-opacity-25 blur-3xl bg-primaryBase" />
      <div className=" -z-10  w-3/4 right-0 rounded-full absolute h-full -bottom-[50%] bg-opacity-10 blur-3xl bg-teal-500" />
    </section>
  );
}

export default PlaceAboutUS;
