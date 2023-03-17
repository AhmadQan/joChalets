import mongoose, { Schema, model, models } from "mongoose";

const BookingSchema = new Schema({
  startDateInSec: { type: Number, required: true },
  endDateInSec: { type: Number, required: true },
  contactPhoneNumber: { type: Number, required: true },
  numberOfGuests: { type: Number, required: true },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  placeBooked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["created", "approved", "paid", "completed", "rejected"],
  },

  isCanceled: { type: Boolean },
});

const BookingModel = models.Booking || model("Booking", BookingSchema);

export default BookingModel;
