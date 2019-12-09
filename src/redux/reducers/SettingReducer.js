import {
  CHANGE_USERNAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_PHONE,
  CHANGE_PHOTO
} from "../type";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      console.log("clicked", action.payload);
      return state;
    case CHANGE_EMAIL:
      console.log("clicked", action.payload);
      return state;
    case CHANGE_PASSWORD:
      console.log("clicked", action.payload);
      return state;
    case CHANGE_PHONE:
      console.log("clicked", action.payload);
      return state;
    case CHANGE_PHOTO:
      console.log("clicked", action.payload);
      return state;
    default:
      return state;
  }
};
