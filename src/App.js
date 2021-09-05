import React, {useState} from "react";
import AddToDoList from "./components/AddList/AddToDoList";
import ListToDo from "./components/List/ListToDo";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserTodoHandler =(usersText)=>{
        setUsersList((prevUserList) =>{
            return [...prevUserList, {task: usersText}];
        })

    }
  return (
    <>
      <AddToDoList onAddList={addUserTodoHandler}/>
      <ListToDo todos={usersList}/>
    </>
  );
}

export default App;
