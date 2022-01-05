import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const defaultState = {
  users: []
};

const addUsers = "addUsers"

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case addUsers:
      return {...state, users: [...state.users, ...action.payload]}
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export const addUsersAction = (payload) => ({type: addUsers, payload})

export const fetchUsers = () => {
  return dispatch => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => dispatch(addUsersAction(json)))
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
