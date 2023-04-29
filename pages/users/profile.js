import React, { useState, useEffect } from "react";
import HomeAppBar from "../../components/organisms/HomeAppBar";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookingHandler } from "../../storeSlices/userStore";
import { useForm } from "react-hook-form";
import DotsMenu from "../../components/molecules/DotsMenu";

import PeopleIcon from "../../client/assets/icons/PeopleIcon";
import CallCallingIcon from "../../client/assets/icons/CallCallingIcon";
import CalenderBoldIcon from "../../client/assets/icons/CalenderBoldIcon";
import Fotter from "../../components/sections/Fotter";

function Profile() {
  const user = useUser();

  const dispatch = useDispatch();
  const userStoreData = useSelector((state) => state?.user);
  const { bookingList } = userStoreData;

  const [isOrderWindow, setIsOrderWindow] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const placeSelected = [];

  useEffect(() => {
    if (bookingList || !user?.user?.dbinfo?._id) return;

    dispatch(getUserBookingHandler(user?.user?.dbinfo?._id));
  }, [bookingList, user?.user?.dbinfo?._id]);

  const updateHandler = (data) => {};

  return (
    <section className="w-full flex flex-col min-h-screen ">
      <HomeAppBar />
      <div className="w-full aspect-semiSquare bg-secondry40 shadow-elvatedCard rounded-b-20 border border-secondry60 flex justify-center items-end">
        <div className="w-full h-[64%] flex flex-col items-center gap-4">
          <div
            style={{
              background: `url(${user?.user?.picture})`,
            }}
            className="w-[25.44%] aspect-square object-cover rounded-full border border-primary40 shadow-md"
          />
          <p className="text-lg font-bold text-primary90">{user?.user?.name}</p>
          <div className="flex gap-2">
            <CallCallingIcon fill={"#333"} className={"w-5 aspect-square"} />
            <p className="font-medium ">
              {user?.user?.phone || "!! not provided"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-6 py-7">
        <button
          onClick={() => {
            setIsOrderWindow(true);
          }}
          className={`rounded-lg  font-bold border ${
            isOrderWindow
              ? "bg-secondry50 w-[30%]"
              : "bg-white w-[33%] shadow-md"
          } border-secondry80 text-secondry90 aspect-btn `}
        >
          Orders
        </button>
        <button
          onClick={() => {
            setIsOrderWindow(false);
          }}
          className={`${
            !isOrderWindow
              ? "bg-secondry50 w-[30%]"
              : "bg-white w-[33%] shadow-md"
          } rounded-lg  font-bold text-secondry90 aspect-btn border border-secondry80 `}
        >
          Profile
        </button>
      </div>
      {isOrderWindow ? (
        <div className="flex flex-col gap-3 items-center mb-8">
          {bookingList?.map((booking, idx) => {
            return (
              <div
                key={idx}
                className="w-[92%] h-auto border items-center py-5 border-primary60 rounded-xl bg-white bg-opacity-70 backdrop-blur-md shadow-elvatedCard flex flex-col gap-6"
              >
                <div className="w-[90%] flex justify-between">
                  <div className="px-3 py-2 rounded-full border border-primary50 bg-white">
                    {" "}
                    {booking?.status || "Created"}
                  </div>
                  <div># {booking?.number || "Ad332bn"}</div>
                  <div>
                    {/* <DotsMenu actions={actionList(booking)} />{" "} */}
                  </div>
                  {/* <div># {booking?._id}</div> */}
                </div>
                <div className="w-[90%] flex justify-between">
                  <div className="flex flex-col gap-2 ">
                    <CalenderBoldIcon
                      fill={"rgb(3 77 119)"}
                      className={"w-8 aspect-square"}
                    />
                    <p className="text-primary90 font-semibold text-sm">
                      {new Date(booking?.startDateInSec).toLocaleDateString()} -{" "}
                      {new Date(booking?.endDateInSec)?.toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <PeopleIcon
                      fill={"rgb(3 77 119)"}
                      className={"w-8 aspect-square"}
                    />
                    <p className="text-primary90 font-semibold text-sm">
                      {booking?.numberOfGuests}
                    </p>
                  </div>

                  {/* <div># {booking?._id}</div> */}
                </div>
                <div className="w-[90%] h-6 overflow-hidden border border-primary50 rounded-full">
                  <div className="w-[10%] h-full bg-primary50" />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center mb-8">
          <form
            onSubmit={handleSubmit(updateHandler)}
            className="w-[92%] flex flex-col gap-4"
          >
            <div className="w-full flex flex-col">
              <p>First name</p>
              <input
                {...register("name")}
                className="w-full aspect-textField border border-primary40 rounded-xl"
              />
            </div>
            <div className="w-full flex flex-col">
              <p>Last name</p>
              <input
                {...register("family")}
                className="w-full aspect-textField border border-primary40 rounded-xl"
              />
            </div>
            <div className="w-full flex flex-col">
              <p>Phone number</p>
              <input
                {...register("phone")}
                className="w-full aspect-textField border border-primary40 rounded-xl"
              />
            </div>
            <div className="w-full flex flex-col">
              <p>City of residence</p>
              <input
                {...register("city")}
                className="w-full aspect-textField border border-primary40 rounded-xl"
              />
            </div>
            <button className="w-full aspect-longBton font-bold rounded-xl border border-secondry80 bg-secondry50">
              Submit
            </button>
          </form>
        </div>
      )}
      <Fotter />
    </section>
  );
}

export default Profile;
