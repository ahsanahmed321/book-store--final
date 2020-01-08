import axios from "axios";

import {
  GET_MY_SCHOOL,
  MY_SCHOOL_LOADING,
  GET_ALL_SCHOOL
} from "./actionTypes";

export const getMySchool = () => dispatch => {
  dispatch(mySchoolLoading());
  axios
    .get("/api/schools/myschool")
    .then(res =>
      dispatch({
        type: GET_MY_SCHOOL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MY_SCHOOL,
        payload: {}
      })
    );
};

export const mySchoolLoading = () => {
  return {
    type: MY_SCHOOL_LOADING
  };
};

export const getAllSchools = () => dispatch => {
  axios
    .get("api/schools")
    .then(res =>
      dispatch({
        type: GET_ALL_SCHOOL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_SCHOOL,
        payload: {}
      })
    );
};
