import {
  CHANGE_USERNAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_PHONE,
  CHANGE_PHOTO
} from "../type";

export const changeUsername = data => dispatch =>
  dispatch({
    type: CHANGE_USERNAME,
    payload: data
  });

export const changeEmail = data => dispatch =>
  dispatch({
    type: CHANGE_EMAIL,
    payload: data
  });

export const changePassword = data => dispatch =>
  dispatch({
    type: CHANGE_PASSWORD,
    payload: data
  });

export const changePhone = data => dispatch =>
  dispatch({
    type: CHANGE_PHONE,
    payload: data
  });

export const changePhoto = data => dispatch =>
  dispatch({
    type: CHANGE_PHOTO,
    payload: data
  });
