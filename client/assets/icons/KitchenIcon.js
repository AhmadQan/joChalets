import React from "react";

function KitchenIcon({ fill, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_17_4723)">
        <path
          d="M12 5.5L18 10V19H6V10L12 5.5ZM12 3L4 9V21H20V9L12 3ZM11.5 9.5V12.5H11V9.5H10V12.5H9.5V9.5H8.5V12.5C8.5 13.33 9.17 14 10 14V18H11V14C11.83 14 12.5 13.33 12.5 12.5V9.5H11.5ZM13 11.5V14.5H14V18H15V9.5C13.9 9.5 13 10.4 13 11.5Z"
          fill={`${fill}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_17_4723">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default KitchenIcon;
