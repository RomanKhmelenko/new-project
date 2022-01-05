import "./App.css";

import { useState, useEffect } from "react";
import UserList from "./UserList";
import Input from "./Input";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./index";

export default function App() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  console.log(users);
  
  // OLD

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const searchValue = inputValue.toLowerCase();

  const newUserData = userData.filter((user) => {
    return user.name.toLowerCase().search(searchValue) !== -1;
  });

  return (
    <div className="App">
      <h1>Users:</h1>
      {userData && (
        <Input
          userData={userData}
          handleChange={handleChange}
          inputValue={inputValue}
        />
      )}
      {/* <ul>{userData && <UserList userData={newUserData} />}</ul> */}
      <div>
        <button onClick={() => dispatch(fetchUsers())}>Get users</button>
      </div>
      <div>
        {users.map(user => 
          <div style={{margin: 10}}>{user.name}</div>)}
      </div>
    </div>
  );
}