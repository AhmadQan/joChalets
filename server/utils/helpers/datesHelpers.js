export const getThisMonthArray = async () => {
  const today = new Date(); // create a new Date object with the current date
  const year = today.getFullYear(); // get the current year
  const month = today.getMonth(); // get the current month (0-indexed, so January is 0)

  const numDays = new Date(year, month + 1, 0).getDate(); // get the number of days in the current month

  const daysOfMonth = Array.from({ length: numDays }, (_, i) => {
    return new Date(year, month, i + 1);
  }); //create an array with the days of the month

  const daysOfMonthObjList = daysOfMonth.map((day) => {
    return { date: day, availableMorning: true, availableEvening: true };
  });

  return daysOfMonthObjList; // logs an array with the numbers 1 to the number of days in the current month

  // logs an array with the numbers 1 to the number of days in the current month
};

export const checkSlotinBookingList = async (slot, bookingList) => {
  let available = true;
  bookingList?.forEach((booking) => {
    if (
      slot.start <= booking.startDateInSec &&
      booking.startDateInSec < slot.end
    ) {
      available = false;
    } else if (
      slot.end >= booking.endDateInSec &&
      booking.endDateInSec > slot.start
    ) {
      available = false;
    } else if (
      booking.startDateInSec <= slot.start &&
      slot.start < booking.endDateInSec
    ) {
      available = false;
    } else if (
      booking.startDateInSec < slot.end &&
      slot.end <= booking.endDateInSec
    ) {
      available = false;
    }
  });

  return available;
};

export const checkDatesAvilablity = async (day, bookingList) => {
  //   const date = new Date();
  //   var lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const morningSlot = {
    date: day?.date,
    start: day?.date.setHours(10, 0, 0),
    end: day?.date.setHours(22, 0, 0),
  };

  const nigthSlot = {
    date: day?.date,
    start: day?.date.setHours(22, 0, 0),
    end: new Date(
      new Date(day?.date)?.setDate(new Date(day?.date).getDate() + 1)
    ).setHours(10, 0, 0),
  };

  const availablityMorning = await checkSlotinBookingList(
    morningSlot,
    bookingList
  );
  const availablityEvening = await checkSlotinBookingList(
    nigthSlot,
    bookingList
  );
  console.log("server", day.date);

  return {
    date: new Date(day.date?.setHours(0, 0, 0, 0)).getTime(),
    availableMorning: availablityMorning,
    availableEvening: availablityEvening,
  };
};

export const checkThisMoth = async (placeBookingList) => {
  const availablityList = [];
  const thisMonthArr = await getThisMonthArray();

  await Promise.all(
    thisMonthArr?.map(async (day) => {
      const item = await checkDatesAvilablity(day, placeBookingList);
      availablityList.push(item);
    })
  );

  return availablityList;
};
