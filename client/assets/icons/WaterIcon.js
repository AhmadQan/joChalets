import React from "react";

function WaterIcon({ fill, className, onClick }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_17_4684)">
        <path
          d="M12 3L2 12H5V20H19V12H22L12 3ZM7 18V10.19L12 5.69L17 10.19V18H7ZM14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 10 12 10C12 10 14 12.9 14 14Z"
          fill={`${fill}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_17_4684">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default WaterIcon;
