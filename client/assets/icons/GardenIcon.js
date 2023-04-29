import React from "react";

function GardenIcon({ fill, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_17_4788)">
        <path
          d="M22 9L12 2L2 9H11V22H13V9H22ZM12 4.44L15.66 7H8.34L12 4.44Z"
          fill={`${fill}`}
        />
        <path
          d="M4.14018 12L2.18018 12.37L3.00018 16.74V22H5.00018L5.02018 18H7.00018V22H9.00018V16H4.90018L4.14018 12Z"
          fill={`${fill}`}
        />
        <path
          d="M19.1 16H15V22H17V18H18.98L19 22H21V16.74L21.82 12.37L19.86 12L19.1 16Z"
          fill={`${fill}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_17_4788">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default GardenIcon;
