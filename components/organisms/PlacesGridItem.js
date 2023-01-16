import React from "react";

export default function PlacesGridItem({ data }) {
  console.log(data);
  return (
    <div className="w-full rounded-3xl flex flex-col  bg-opacity-10 shadow-xl bg-grayLight border-secondry border-2 overflow-hidden">
      <div className="w-full">
        <img
          className=" object-cover w-full aspect-square"
          src={data.images[0].img}
          alt={data.name}
        />
      </div>
      <div className="w-full flex flex-col p-5 gap-5">
        <div className="flex justify-between">
          <div className="flex flex-col items-start justify-between">
            <h3 className="text-base  text-gray">chalet pool </h3>
            <h3 className="text-2xl font-semibold text-grayLight">
              Place Name
            </h3>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-10  text-accent "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <div className=" flex justify-between ">
          <div className="bg-secondry px-5 py-2 rounded-full shadow-md flex gap-2">
            <h3 className="text-primary font-semibold font-IBMPlexSans">
              amman
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <div className=" flex gap-2 py-2">
            <h3 className="text-grayLight font-semibold font-IBMPlexSans">
              230 people
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#28d580"
              className="w-6 h-6 "
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
