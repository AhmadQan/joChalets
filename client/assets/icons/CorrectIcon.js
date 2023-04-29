import React from "react";

function CorrectIcon({ fill, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 90 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.77885 23C-6.78527 21.763 2.39423 10.888 8.80449 5.60504C2.03525 15.8101 10.5994 16.2997 15.7276 15.2689L90 0L16.923 21.4538C14.3589 22.2269 10.5128 23 7.77885 23Z"
        fill={`${fill}`}
      />
    </svg>
  );
}

export default CorrectIcon;
