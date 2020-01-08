import {
  GET_MY_SCHOOL,
  MY_SCHOOL_LOADING,
  GET_ALL_SCHOOL
} from "../actions/actionTypes";
// import isEmpty from "../../utils/is-empty";
const initialState = {
  my_school: {},
  all_schools: {},
  loading: false
};

const schoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_SCHOOL_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MY_SCHOOL:
      return {
        ...state,
        my_school: action.payload,
        loading: false
      };
    case GET_ALL_SCHOOL:
      return {
        ...state,
        all_schools: action.payload
      };
    default:
      return state;
  }
};

export default schoolReducer;
