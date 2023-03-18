import React from "react";

function BedBoldIcon({ fill, className, onClick }) {
  return (
    <svg
      onClick={onClick}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6_14640)">
        <path
          d="M20 12C20 10.9 19.1 10 18 10V7C18 5.9 17.1 5 16 5H8C6.9 5 6 5.9 6 7V10C4.9 10 4 10.9 4 12V17H5.33L6 19H7L7.67 17H16.34L17 19H18L18.67 17H20V12ZM16 10H13V7H16V10ZM8 7H11V10H8V7ZM6 12H18V15H6V12Z"
          fill={`${fill}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_6_14640">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BedBoldIcon;
