import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";


export const addBooking = (booking) => {
  return {
    type: ADD_BOOKING,
    payload: booking,
  };
};

export const removeBooking = (bookingId) => {
  return {
    type: REMOVE_BOOKING,
    payload: bookingId,
  };
};
