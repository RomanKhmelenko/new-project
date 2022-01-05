import { ADD_USERS } from "./types";

const defaultState = {
  users: []
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_USERS:
      return {...state, users: [...state.users, ...action.payload]}
    default:
      return state
  }
}

export default reducer;
