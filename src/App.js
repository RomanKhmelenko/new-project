import "./App.css";

import { useState, useEffect } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/actions";

export default function App() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

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
      <div>
        {users.map(user => 
          <div style={{margin: 10}}>{user.name}</div>)}
      </div>
    </div>
  );
}