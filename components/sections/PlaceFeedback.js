import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0/client";

import { postReviewHandler } from "../../storeSlices/placeDetailSlice";

import LikeIcon from "../../client/assets/icons/LikeIcon";

function PlaceFeedback({ reviews }) {
  const dispatch = useDispatch();
  const placeState = useSelector((state) => state.placeDetail);

  const { placeSelected } = placeState;
  const { user, error, isLoading } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitReviewHandler = async (data) => {
    dispatch(postReviewHandler(data));
  };

  const submitHandler = async (data) => {
    if (!user?.dbinfo) return;

    await submitReviewHandler({
      reviewUser: user?.dbinfo?._id,
      reviewPlace: placeSelected?._id,
      ...data,
    });
  };

  return (
    <section className="py-11 px-6  flex flex-col gap-8 relative">
      <h2 className=" font-IBMPlexSans font-normal opacity-60 text-primaryDark">
        Dont Listen to us listen to them
        <br />{" "}
        <span className="font-bold font-Koulen text-3xl text-primary">
          Reviews
        </span>
      </h2>
      <form
        className="w-full flex flex-col gap-0"
        onSubmit={handleSubmit(submitHandler)}
      >
        <label>
          Rating:
          <select
            defaultValue={5}
            className="w-full bg-white border border-primary50 rounded-xl aspect-textField"
            {...register("score", {
              required: "please select a rating",
            })}
          >
            <option value={1}>1 star</option>
            <option value={2}>2 stars</option>
            <option value={3}>3 stars</option>
            <option value={4}>4 stars</option>
            <option value={5}>5 stars</option>
          </select>
        </label>
        <br />
        <label>
          Comment:
          <textarea
            className="w-full aspect-square border border-primary50 bg-white rounded-xl"
            {...register("reviewMessage", {
              required: "please write a review message",
            })}
          />
        </label>
        <button
          disabled={!user?.dbinfo}
          className={` ${
            user?.dbinfo ? "bg-secondry40" : "bg-gray-300"
          } w-full aspect-longBton  rounded-xl text-primary90 font-bold`}
          type="submit"
        >
          {!user?.dbinfo ? "please Log in first " : "Submit"}
        </button>
      </form>
      <div className="w-full flex gap-3 ">
        {reviews?.map((comment) => {
          return (
            <div
              key={comment?._id}
              className="w-14 overflow-hidden aspect-square rounded-full bg-blue-500 border-blue-400 border-2 shadow-flat "
            >
              <img
                src={comment?.reviewUser}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col gap-4">
        {reviews?.map((comment) => {
          return (
            <div
              key={comment?._id}
              className="w-full gap-3 shadow-flat rounded-lg min-h-[18vh] flex flex-col bg-white px-8 py-4"
            >
              <div className="flex items-center gap-1">
                <div className="w-12 overflow-hidden aspect-square rounded-full bg-blue-500 border-blue-400 border-2 shadow-flat ">
                  <img
                    src={comment?.reviewUser}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-bold">{"aa"}</p>
              </div>
              <div className="w-6">
                <LikeIcon fill={"#333"} className={"w-full "} />
              </div>
              <p className="text-primary100">
                <pre className="w-full font-IBMPlexSansArabic ">
                  {" "}
                  {comment?.reviewMessage || "No comment"}
                </pre>
              </p>
            </div>
          );
        })}
      </div>
      <button className="w-[47%] aspect-btnOutlined border-2 border-primary rounded-lg text-primaryDark">
        View More{" "}
      </button>
      <div className=" -z-10 w-3/4 rounded-full absolute h-full -bottom-[50%] bg-opacity-10 blur-3xl bg-teal-400" />
      <div className=" -z-10  w-3/4 right-0 rounded-full absolute h-full  -top-[50%] bg-opacity-25 blur-3xl bg-primaryBase" />
    </section>
  );
}

export default PlaceFeedback;
