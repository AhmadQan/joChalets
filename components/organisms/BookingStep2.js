import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CallCallingIcon from "../../client/assets/icons/CallCallingIcon";
import PeopleIcon from "../../client/assets/icons/PeopleIcon";

import { loadFormsData } from "../../storeSlices/placeDetailSlice";

function BookingStep2() {
  //store logic
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => {
    return state.placeDetail;
  });

  //use Form Logic
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const loadStoreFormFun = async (obj) => {
    dispatch(loadFormsData(obj));
  };

  ///form 1////

  const submitHandler = async (data) => {
    await loadStoreFormFun({
      step: 2,
      data: data,
    });
  };

  const { err, loading, placeAvailablity } = bookingState;

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex-1 w-full box-border overflow-y-scroll  justify-between flex overflow-hidden items-center flex-col gap-[5.1%] pt-3"
    >
      <div className="w-full flex flex-col gap-8">
        <div className="w-full  flex flex-col rounded-xl gap-6 ">
          <p className="text-primary10 font-semibold text-lg">
            Number Of Guests
          </p>

          <div className="w-full">
            {errors?.numberOfGuests && (
              <p className="text-red-500 text-xs font-semibold">
                {errors?.numberOfGuests?.message}
              </p>
            )}
            <div className="w-full relative aspect-textField  overflow-hidden rounded-lg border border-primary50 bg-white shadow-flat">
              <input
                type={"number"}
                {...register("numberOfGuests", {
                  required: "Please enter the number of Guests",
                  min: {
                    value: 1,
                    message: "minum value must be greater than zero",
                  },
                })}
                className="w-full h-full px-[20%]"
              />
              <PeopleIcon
                fill={"#068DDB"}
                className={"absolute top-[18%] left-[5%] w-8 aspect-square"}
              />
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col rounded-xl gap-6 ">
          <p className="text-primary10 font-semibold text-lg">
            Contact Phone Number
          </p>

          <div className="w-full">
            {errors?.contactPhoneNumber && (
              <p className="text-red-500 text-xs font-semibold">
                {errors?.contactPhoneNumber?.message}
              </p>
            )}
            <div className="w-full relative aspect-textField  overflow-hidden rounded-lg border border-primary50 bg-white shadow-flat">
              <input
                type={"number"}
                placeholder={"07xxxxxxxx"}
                {...register("contactPhoneNumber", {
                  required: "Please provide a valid phone number",
                  pattern: {
                    value: /^((\+9627)|07)([789][0123456789])\d{6}$/, // Jordanian mobile number pattern
                    message: "please enter a valid phone number",
                  },
                })}
                className="w-full h-full px-[20%]"
              />
              <div className="flex absolute top-[18%] left-[5%] ">
                <CallCallingIcon
                  fill={"#068DDB"}
                  className={" w-8 aspect-square"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button className="w-[48%] font-bold text-primary90 bg-gray-200 aspect-btn rounded-xl shadow-lg border border-gray-500">
          Cancel
        </button>
        <button
          className="w-[48%] font-bold text-primary90 bg-secondry50 aspect-btn rounded-xl shadow-lg border border-secondry80 "
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default BookingStep2;
