import React, { useState } from "react";
import { Calendar } from "react-date-range";

import SunOutlineIcon from "../../client/assets/icons/SunOutlineIcon";
import MoonOutlineIcon from "../../client/assets/icons/MoonOutlineIcon";

function BookingForm() {
  const [fromDate, setFromDate] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [step, setStep] = useState(1);

  const Step1 = () => {
    return (
      <form className="h-[78%] flex flex-col gap-3 justify-between ">
        <div className="flex h-[9%] ">
          <div className="flex  w-full justify-start gap-3 items-center  rounded-xl ">
            <div className="h-full greenGradient1 w-[40%] rounded-full   flex justify-center items-center">
              <h2 className="text-base font-bold text-white">From</h2>
            </div>
            <h2 className="text-sm font-bold text-secondryDarker">12/3/2023</h2>
          </div>
          <div className="flex  w-full justify-center gap-3 items-center  rounded-xl ">
            <div className="h-full greenGradient1 w-[40%] rounded-full  opacity-30 flex justify-center items-center">
              <h2 className="text-base font-bold text-white">To</h2>
            </div>
          </div>
        </div>

        <div className="flex  justify-start items-start h-auto w-full gap-4 pt-2">
          <div className=" flex gap-2 shadow-flat px-1 py-2 rounded-full">
            <SunOutlineIcon fill={"#333"} className={"h-6 aspect-square"} />
            <p>10 AM</p>
            <input type={"checkbox"} />
          </div>
          <div className=" flex gap-2 px-1 py-2 shadow-flat rounded-full">
            <MoonOutlineIcon fill={"#333"} className={"h-6 aspect-square"} />
            <p>10 PM</p>
            <input type={"checkbox"} />
          </div>
        </div>
        <div className="relative w-full overflow-hidden  rounded-xl">
          <Calendar onChange={HandleChange} />
        </div>
        <div className="h-[10%] w-full  flex justify-between p-2">
          <button className="w-[45%] aspect-btnOutlined border border-secondryDark rounded-xl">
            Back
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setStep(2);
            }}
            // disabled={true}
            className="w-[45%] aspect-btnOutlined greenGradient1 text-secondryLigther  font-bold rounded-xl  disabled:bg-gray-400 disabled:text-gray-200"
          >
            Next
          </button>
        </div>
      </form>
    );
  };
  const Step2 = () => {
    return (
      <form className="h-[78%] flex flex-col gap-3 justify-between ">
        <div className="flex h-[9%] ">
          <div className="flex opacity-30 w-full justify-start gap-3 items-center  rounded-xl ">
            <div className="h-full greenGradient1 w-[40%] rounded-full   flex justify-center items-center">
              <h2 className="text-base font-bold  text-white">From</h2>
            </div>
            <h2 className="text-sm font-bold text-secondryDarker">12/3/2023</h2>
          </div>
          <div className="flex  w-full justify-center gap-3 items-center  rounded-xl ">
            <div className="h-full greenGradient1 w-[40%] rounded-full   flex justify-center items-center">
              <h2 className="text-base font-bold text-white">To</h2>
            </div>
            <h2 className="text-sm font-bold text-secondryDarker">12/3/2023</h2>
          </div>
        </div>

        <div className="flex  justify-end items-start h-auto w-full gap-4 pt-2">
          <div className=" flex gap-2 shadow-flat px-1 py-2 rounded-full">
            <SunOutlineIcon fill={"#333"} className={"h-6 aspect-square"} />
            <p>10 AM</p>
            <input type={"checkbox"} />
          </div>
          <div className=" flex gap-2 px-1 py-2 shadow-flat rounded-full">
            <MoonOutlineIcon fill={"#333"} className={"h-6 aspect-square"} />
            <p>10 PM</p>
            <input type={"checkbox"} />
          </div>
        </div>
        <div className="relative w-full overflow-hidden  rounded-xl">
          <Calendar onChange={HandleChange} />
        </div>
        <div className="h-[10%] w-full  flex justify-between p-2">
          <button className="w-[45%] aspect-btnOutlined border border-secondryDark rounded-xl">
            Back
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setStep(3);
            }}
            // disabled={true}
            className="w-[45%] aspect-btnOutlined greenGradient1 text-secondryLigther  font-bold rounded-xl  disabled:bg-gray-400 disabled:text-gray-200"
          >
            Next
          </button>
        </div>
      </form>
    );
  };

  const Step3 = () => {
    return (
      <form className="h-[78%] w-full  flex flex-col justify-start gap-10  ">
        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-sm text-primaryDark">
              how many <br />{" "}
              <span className="text-xl font-bold text-primaryDark">Guests</span>{" "}
            </h3>
            <div>{numberOfGuests}</div>
          </div>
          <input
            // value={numberOfGuests}
            max={50}
            onChange={(e) => {
              // setNumberOfGuests(e.target.value);
            }}
            type={"range"}
          />
        </div>
        <div className="w-full flex flex-col flex-1  gap-3">
          <h3 className="text-sm text-primaryDark">
            Contact Info <br />{" "}
            <span className="text-xl font-bold text-primaryDark">
              Phone num
            </span>{" "}
          </h3>
          <div className="w-[90%] h-[5vh] shadow-flat bg-white flex items-center justify-center ml-2 rounded-xl ">
            <p className="font-semibold border-secondryligth text-secondryDarker pl-2">
              +962
            </p>
            <input type={"number"} className="h-full flex-1 " />
          </div>
        </div>
        <div className="h-[10%] w-full   flex justify-between p-2">
          <button className="w-[45%] aspect-btnOutlined border border-secondryDark rounded-xl">
            Back
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setStep(1);
            }}
            // disabled={true}
            className="w-[45%] aspect-btnOutlined bg-secondryBase text-secondryDarker font-bold rounded-xl  disabled:bg-gray-400 disabled:text-gray-200"
          >
            Next
          </button>
        </div>
      </form>
    );
  };

  const HandleChange = (date) => {
    console.log(date);
  };
  return (
    <div className="h-[92vh] w-full  flex justify-center items-center font-IBMPlexSans ">
      <div className="h-[92.0%] w-[90%]   justify-between flex overflow-hidden items-center flex-col gap-[5.1%]">
        <div className="flex flex-col w-full h-[15.3%]  justify-between">
          <h3 className="text-sm text-primaryDark">
            Step 1 <br />{" "}
            <span className="text-xl font-bold text-primaryDark">Dates</span>{" "}
          </h3>
          <div className="w-full h-[35%] bg-white shadow-flat rounded-full overflow-hidden  ">
            <div
              style={{
                width: `${step * 25}%`,
              }}
              className="h-full w-[30%] greenGradient1 shadow-md "
            />
          </div>
        </div>
        {step === 1 ? (
          <Step1 />
        ) : step === 2 ? (
          <Step2 />
        ) : step === 3 ? (
          <Step3 />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default BookingForm;
