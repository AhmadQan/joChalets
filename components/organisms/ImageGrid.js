import React from "react";

export default function ImageGrid({ list, handler }) {
  const moveUp = (index) => {
    if (index === 0) return;
    const images = list;

    const toIndex = index - 1;
    const element = images.splice(index, 1)[0];
    images.splice(toIndex, 0, element);

    handler([...images]);
  };
  const moveDown = (index) => {
    const images = list;
    if (index === images.length - 1) return;

    const toIndex = index + 1;
    const element = images.splice(index, 1)[0];
    images.splice(toIndex, 0, element);

    handler([...images]);
  };

  return (
    <div className="flex flex-col gap-5  py-5">
      {list?.map((item, index) => (
        <div key={index} className="relative">
          <div className="absolute top-0 flex justify-between w-full px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 "
              onClick={(e) => {
                e.preventDefault();
                moveDown(index);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 "
              onClick={(e) => {
                e.preventDefault();
                moveUp(index);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <img
            className="aspect-video object-cover w-80 rounded-md shadow-sm shadow-grayLight"
            src={item}
          />
        </div>
      ))}
    </div>
  );
}
