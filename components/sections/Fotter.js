import React from "react";

import CallCallingIcon from "../../client/assets/icons/CallCallingIcon";
import EmailIcomBold from "../../client/assets/icons/EmailIcomBold";
import FaceBookIconBold from "../../client/assets/icons/FaceBookIconBold";
import InstgramBoldIcon from "../../client/assets/icons/InstgramBoldIcon";

function Fotter() {
  return (
    <div className="w-full bg-primary90 text-primary20 p-8 z-10">
      <div className="w-full flex flex-col gap-12 lg:flex-row">
        <div className="w-full flex flex-col gap-6">
          <p className="text-xl font-bold">what makes us different</p>
          <div className="flex flex-col gap-4 font-normal">
            <div className="flex gap-2 items-start justify-start">
              <div className="w-3 mt-2  aspect-square rounded-full bg-primary20" />

              <div>
                check availability, and book online from the comfort of your own
                home.
              </div>
            </div>
            <div className="flex gap-2 items-start justify-start">
              <div className="w-3 mt-2  aspect-square rounded-full bg-primary20" />

              <div>
                security and protection, give you peace of mind when booking a
                property.
              </div>
            </div>
            <div className="flex gap-2 items-start justify-start">
              <div className="w-3 mt-2  aspect-square rounded-full bg-primary20" />

              <div>
                transparency when it comes to property details and reviews from
                previous guests
              </div>
            </div>
            <div className="flex gap-2 items-start justify-start">
              <div className="w-3 mt-2  aspect-square rounded-full bg-primary20" />

              <div>
                Variety You can browse through multiple options and choose the
                one that best fits your needs and budget
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 justify-between">
          <div className="flex flex-col gap-5 text-sm">
            <p className="text-lg font-bold">Contact</p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                <CallCallingIcon
                  fill={"#D7F0FE"}
                  className={"w-5 aspect-square"}
                />
                <p>+962798033926</p>
              </div>
              <div className="flex gap-1">
                <EmailIcomBold
                  fill={"#D7F0FE"}
                  className={"w-5 aspect-square"}
                />
                <p>ahmedqanadilo@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 text-sm">
            <p className="text-lg font-bold">Social Media</p>
            <div className="flex  gap-2">
              <FaceBookIconBold
                fill={"#D7F0FE"}
                className={"w-8 aspect-square"}
              />
              <InstgramBoldIcon
                fill={"#D7F0FE"}
                className={"w-8 aspect-square"}
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            {" "}
            © 2020 | Powered by Jochalets
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
