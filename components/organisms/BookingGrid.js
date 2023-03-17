import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseCirculeIcon from "../../client/assets/icons/CloseCirculeIcon";
import DotsMenu from "../molecules/DotsMenu";
import CalenderBoldIcon from "../../client/assets/icons/CalenderBoldIcon";
import PeopleIcon from "../../client/assets/icons/PeopleIcon";
import {
  deleteBookingHandler,
  changeBookingStatusHandler,
} from "../../storeSlices/placeDetailSlice";
import LoaderDrops from "../molecules/LoaderDrops";

function BookingGrid({ placeID, close }) {
  const dispatch = useDispatch();
  const placeDetail = useSelector((state) => state.placeDetail);

  const { placeSelected, loading } = placeDetail;

  const actionList = (data) => {
    return [
      {
        text: "Approve",
        handler: () => {
          dispatch(
            changeBookingStatusHandler({
              _id: data?._id,
              status: "approved",
              placeBooked: data?.placeBooked,
            })
          );
        },
      },
      {
        text: "Reject",
        handler: () => {
          dispatch(
            changeBookingStatusHandler({
              _id: data?._id,
              status: "rejected",
              placeBooked: data?.placeBooked,
            })
          );
        },
      },
      {
        text: "Delete",
        handler: () => {
          dispatch(deleteBookingHandler(data));
        },
      },
    ];
  };

  return (
    <div className="fixed bg-opacity-60 backdrop-blur-sm  bg-re z-20 w-screen h-screen bg-primary90 flex flex-col justify-start gap-[5%] pt-[2%]">
      <CloseCirculeIcon
        onClick={close}
        fill={"rgb(248, 113, 113)"}
        className={"w-10 aspect-square"}
      />
      {loading ? (
        <div className="w-full h-[80vh] flex justify-center items-center overflow-y-scroll  py-8 px-[1.8%]">
          <LoaderDrops />
        </div>
      ) : (
        <div className="w-full h-[80vh]  overflow-y-scroll  py-8 px-[1.8%]">
          <div className="flex flex-col gap-6">
            {placeSelected?.bookingList?.map((booking, idx) => {
              return (
                <div
                  key={idx}
                  className="w-full h-auto border items-center py-5 border-primary60 rounded-xl bg-white bg-opacity-70 backdrop-blur-md shadow-elvatedCard flex flex-col gap-6"
                >
                  <div className="w-[90%] flex justify-between">
                    <div className="px-3 py-2 rounded-full border border-primary50 bg-white">
                      {" "}
                      {booking?.status || "Created"}
                    </div>
                    <div># {booking?.number || "Ad332bn"}</div>
                    <div>
                      <DotsMenu actions={actionList(booking)} />{" "}
                    </div>
                    {/* <div># {booking?._id}</div> */}
                  </div>
                  <div className="w-[90%] flex justify-between">
                    <div className="flex flex-col gap-2 ">
                      <CalenderBoldIcon
                        fill={"rgb(3 77 119)"}
                        className={"w-8 aspect-square"}
                      />
                      <p className="text-primary90 font-semibold text-sm">
                        {new Date(booking?.startDateInSec).toLocaleDateString()}{" "}
                        -{" "}
                        {new Date(booking?.endDateInSec)?.toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <PeopleIcon
                        fill={"rgb(3 77 119)"}
                        className={"w-8 aspect-square"}
                      />
                      <p className="text-primary90 font-semibold text-sm">
                        {booking?.numberOfGuests}
                      </p>
                    </div>

                    {/* <div># {booking?._id}</div> */}
                  </div>
                  <div className="w-[90%] h-6 overflow-hidden border border-primary50 rounded-full">
                    <div className="w-[10%] h-full bg-primary50" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingGrid;
