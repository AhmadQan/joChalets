import React from "react";

function PlaceInstruction({ rules }) {
  return (
    <section className="py-11 px-6 flex flex-col  gap-8 ">
      <h2 className=" font-IBMPlexSans font-normal opacity-60 text-primary90">
        Our Place is at your service But
        <br />{" "}
        <span className="font-bold font-Koulen text-3xl text-primary80">
          Our Instruction
        </span>
      </h2>
      <div className="w-full h-auto py-4 px-3 bg-white bg-opacity-60 backdrop-blur-md border border-primary40 rounded-xl shadow-flat flex flex-col gap-4">
        {rules?.map((rule, index) => {
          return (
            <div className="flex items-center gap-2">
              <div className="border-2 rounded-full font-bold text-red-500 border-red-500 opacity-40 h-9 text-center aspect-square flex justify-center items-center">
                {index + 1}
              </div>{" "}
              <p>{rule}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PlaceInstruction;
