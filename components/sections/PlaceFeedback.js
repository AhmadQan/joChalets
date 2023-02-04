import React from "react";

import LikeIcon from "../../client/assets/icons/LikeIcon";

function PlaceFeedback() {
  const ListOfComments = [
    {
      id: 1,
      place: 1,
      user: {
        name: "Amad Qanadilo",
        Pic: "https://images.pexels.com/photos/7180886/pexels-photo-7180886.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      },
      message: "A class Place great for family vactions Loved it",
      isPostive: true,
    },
    {
      id: 2,
      place: 1,
      user: {
        name: "Amad Qanadilo",
        Pic: "https://images.pexels.com/photos/7180886/pexels-photo-7180886.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      },
      message: "A class Place great for family vactions Loved it",
      isPostive: true,
    },
    {
      id: 3,
      place: 1,
      user: {
        name: "Amad Qanadilo",
        Pic: "https://images.pexels.com/photos/7180886/pexels-photo-7180886.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      },
      message: "A class Place great for family vactions Loved it",
      isPostive: true,
    },
  ];
  return (
    <section className="py-11 px-6  flex flex-col gap-8 relative">
      <h2 className=" font-IBMPlexSans font-normal opacity-60 text-primaryDark">
        Dont Listen to us listen to them
        <br />{" "}
        <span className="font-bold font-Koulen text-3xl text-primary">
          Reviews
        </span>
      </h2>
      <div className="w-full flex gap-3 ">
        {ListOfComments.map((comment) => {
          return (
            <div
              key={comment.id}
              className="w-14 overflow-hidden aspect-square rounded-full bg-blue-500 border-blue-400 border-2 shadow-flat "
            >
              <img
                src={comment.user.Pic}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col gap-4">
        {ListOfComments.map((comment) => {
          return (
            <div
              key={comment.id}
              className="w-full gap-3 shadow-flat rounded-lg min-h-[18vh] flex flex-col bg-white px-8 py-4"
            >
              <div className="flex items-center gap-1">
                <div className="w-12 overflow-hidden aspect-square rounded-full bg-blue-500 border-blue-400 border-2 shadow-flat ">
                  <img
                    src={comment.user.Pic}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-bold">{comment.user.name}</p>
              </div>
              <div className="w-6">
                <LikeIcon fill={"#333"} className={"w-full "} />
              </div>
              <p className="text-sm">{comment.message}</p>
            </div>
          );
        })}
      </div>
      <div className=" -z-10 w-3/4 rounded-full absolute h-full -bottom-[50%] bg-opacity-10 blur-3xl bg-teal-400" />
      <div className=" -z-10  w-3/4 right-0 rounded-full absolute h-full  -top-[50%] bg-opacity-25 blur-3xl bg-primaryBase" />
    </section>
  );
}

export default PlaceFeedback;
