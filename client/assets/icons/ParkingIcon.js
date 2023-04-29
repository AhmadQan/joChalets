import React from "react";

function ParkingIcon({ fill, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1473_14723)">
        <path
          d="M18.4167 4.25H8.5V29.75H14.1667V21.25H18.4167C23.1058 21.25 26.9167 17.4392 26.9167 12.75C26.9167 8.06083 23.1058 4.25 18.4167 4.25ZM18.7 15.5833H14.1667V9.91667H18.7C20.2583 9.91667 21.5333 11.1917 21.5333 12.75C21.5333 14.3083 20.2583 15.5833 18.7 15.5833Z"
          fill={`${fill}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_1473_14723">
          <rect width="34" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ParkingIcon;
