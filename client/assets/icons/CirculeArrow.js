import React from "react";

function CirculeArrow({ fill, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill={`${fill}`}
      />
      <path
        d="M15.5 12.75H9.5C9.09 12.75 8.75 12.41 8.75 12C8.75 11.59 9.09 11.25 9.5 11.25H15.5C15.91 11.25 16.25 11.59 16.25 12C16.25 12.41 15.91 12.75 15.5 12.75Z"
        fill={`${fill}`}
      />
      <path
        d="M11.4999 15.7499C11.3099 15.7499 11.1199 15.6799 10.9699 15.5299L7.96994 12.5299C7.67994 12.2399 7.67994 11.7599 7.96994 11.4699L10.9699 8.46994C11.2599 8.17994 11.7399 8.17994 12.0299 8.46994C12.3199 8.75994 12.3199 9.23994 12.0299 9.52994L9.55994 11.9999L12.0299 14.4699C12.3199 14.7599 12.3199 15.2399 12.0299 15.5299C11.8799 15.6799 11.6899 15.7499 11.4999 15.7499Z"
        fill={`${fill}`}
      />
    </svg>
  );
}

export default CirculeArrow;