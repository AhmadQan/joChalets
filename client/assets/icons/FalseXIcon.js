import React from "react";

function FalseXIcon({ fill, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="2.58621"
        height="33.5575"
        transform="matrix(0.707106 -0.707108 0.707106 0.707108 0 2.27124)"
        fill={`${fill}`}
      />
      <rect
        width="2.58621"
        height="33.5575"
        transform="matrix(0.707106 0.707108 -0.707106 0.707108 23.729 1)"
        fill={`${fill}`}
      />
    </svg>
  );
}

export default FalseXIcon;
