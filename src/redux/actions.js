import { ADD_USERS } from "./types"

export const addUsersAction = (payload) => ({type: ADD_USERS, payload})

export const fetchUsers = () => {
  return dispatch => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => dispatch(addUsersAction(json)))
  }
}