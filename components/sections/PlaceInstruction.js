import React from "react";

function PlaceInstruction() {
  return (
    <section className="py-11 px-6 flex flex-col  gap-8 ">
      <h2 className=" font-IBMPlexSans font-normal opacity-60 text-primaryDark">
        Our Place is at your service But
        <br />{" "}
        <span className="font-bold font-Koulen text-3xl text-primary">
          Our Instruction
        </span>
      </h2>
      <div className="w-full h-auto py-4 px-3 bg-primaryWhite rounded-xl shadow-flat flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="border-4 rounded-full font-bold text-redBase border-redBase opacity-40 h-9 text-center aspect-square">
            1
          </div>{" "}
          <p>Only Family resrbation</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-4 rounded-full font-bold text-redBase border-redBase opacity-40 h-9 text-center aspect-square">
            2
          </div>{" "}
          <p>Keep the place Clean</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-4 rounded-full font-bold text-redBase border-redBase opacity-40 h-9 text-center aspect-square">
            3
          </div>{" "}
          <p>arravial at time</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-4 rounded-full font-bold text-redBase border-redBase opacity-40 h-9 text-center aspect-square">
            4
          </div>{" "}
          <p>50 jod will be held as insurance</p>
        </div>
      </div>
    </section>
  );
}

export default PlaceInstruction;
