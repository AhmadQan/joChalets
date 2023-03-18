import React from "react";

function SliverWareIcon({ fill, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_17_19146)">
        <path
          d="M5.11023 21.28L12.0002 14.41L18.8802 21.29L20.2902 19.88L13.4102 13L14.8802 11.53C16.4102 12.24 18.5602 11.74 20.1502 10.15C22.0602 8.23999 22.4302 5.49999 20.9602 4.02999C19.5002 2.56999 16.7602 2.92999 14.8402 4.83999C13.2502 6.42999 12.7502 8.57999 13.4602 10.11L3.70023 19.87L5.11023 21.28ZM3.91023 9.15999L8.10023 13.34L10.9302 10.51L3.91023 3.49999C2.35023 5.05999 2.35023 7.58999 3.91023 9.15999Z"
          fill={`${fill}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_17_19146">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SliverWareIcon;
