import React from "react";

function CalendarDotsIcon({ fill, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="2" height="2" transform="translate(3 8)" fill={`${fill}`} />
      <rect width="2" height="2" transform="translate(9 8)" fill={`${fill}`} />
      <rect width="2" height="2" transform="translate(15 8)" fill={`${fill}`} />
      <rect width="2" height="2" transform="translate(3 12)" fill={`${fill}`} />
      <rect width="2" height="2" transform="translate(9 12)" fill={`${fill}`} />
      <rect
        width="2"
        height="2"
        transform="translate(15 12)"
        fill={`${fill}`}
      />
      <rect width="2" height="2" transform="translate(3 16)" fill={`${fill}`} />
      <rect width="2" height="2" transform="translate(9 16)" fill={`${fill}`} />
      <rect
        width="2"
        height="2"
        transform="translate(15 16)"
        fill={`${fill}`}
      />
      <path
        d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V7H18V20Z"
        fill={`${fill}`}
      />
    </svg>
  );
}

export default CalendarDotsIcon;
