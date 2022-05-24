import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList((previousUsersList) => {
      return [
        ...previousUsersList,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    // 使用React.Fragment
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
