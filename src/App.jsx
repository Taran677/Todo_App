import "bootstrap/dist/css/bootstrap.min.css";
import AddTODO from "./components/AddTODO.jsx";
import Appname from "./components/AppName";
import "./styles/style1.css";
import "./components/Animation.js";
import TodoItem from "./components/TodoItem.jsx";
import Empty from "./components/Empty.jsx";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [add, setAdd] = useState("Add");
  const onInputClick = (textValue, dateValue) => {
    const newTodoItem = {
      name: textValue,
      dueDate: dateValue,
      isDeleted: false,
    };

    if (textValue !== "" && dateValue !== "") {
      setTodoItems((prevTodoItems) => [...prevTodoItems, newTodoItem]);
    }
  };

  return (
    <center className="todo-container">
      <Appname />
      <AddTODO
        onInputClick={onInputClick}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        dateValue={dateValue}
        setDateValue={setDateValue}
        add={add}
        setAdd={setAdd}
      />
      <TodoItem
        setTodoItems={setTodoItems}
        todoItems={todoItems}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        setDateValue={setDateValue}
        dateValue={dateValue}
        add={add}
        setAdd={setAdd}
      />
      {todoItems.length === 0 && <Empty />}
      <ToastContainer></ToastContainer>
    </center>
  );
}

export default App;
