import React from "react";

function MoonFilledIcon({ fill, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.53 13.9301C19.37 13.6601 18.92 13.2401 17.8 13.4401C17.18 13.5501 16.55 13.6001 15.92 13.5701C13.59 13.4701 11.48 12.4001 10.01 10.7501C8.70995 9.30012 7.90995 7.41012 7.89995 5.37012C7.89995 4.23012 8.11995 3.13012 8.56995 2.09012C9.00995 1.08012 8.69995 0.550116 8.47995 0.330116C8.24995 0.100116 7.70995 -0.219883 6.64995 0.220117C2.55995 1.94012 0.0299523 6.04012 0.329952 10.4301C0.629952 14.5601 3.52995 18.0901 7.36995 19.4201C8.28995 19.7401 9.25995 19.9301 10.26 19.9701C10.42 19.9801 10.58 19.9901 10.74 19.9901C14.09 19.9901 17.23 18.4101 19.21 15.7201C19.88 14.7901 19.7 14.2001 19.53 13.9301Z"
        fill={`${fill}`}
      />
    </svg>
  );
}

export default MoonFilledIcon;
