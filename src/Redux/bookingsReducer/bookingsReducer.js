import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

const initialState = {
  bookings: [
    {
      id: 1,
      destinationFrom: "Saidpur",
      destinationTo: "Dhaka",
      journeyDate: "2021-01-01",
      guests: 2,
      classType: "Economy",
    },
  ],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        bookings: [
          ...state.bookings,
          {
            id: state.bookings.length === 0 ? 1 : state.bookings[state.bookings.length - 1].id + 1,
            ...action.payload,
          },
        ],
      };
    case REMOVE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default bookingReducer;
