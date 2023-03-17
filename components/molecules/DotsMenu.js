import React, { useState } from "react";

import DotsIcon from "../../client/assets/icons/DotsIcon";
function DotsMenu({ actions }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col relative">
      <DotsIcon
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        fill={"#333"}
        className={"w-8 aspect-square"}
      />
      {isOpen && (
        <div className="top-8 h-auto right-0 w-[32vw] rounded-b-xl rounded-l-xl shadow-md border bg-opacity-70 border-primary50  bg-white absolute">
          {actions?.map((action) => {
            return (
              <div
                className="flex font-semibold justify-center py-2 border-b border-primary90"
                onClick={async () => {
                  await action?.handler();
                  setIsOpen(!isOpen);
                }}
              >
                {action?.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DotsMenu;
