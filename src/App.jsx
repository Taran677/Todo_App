import "bootstrap/dist/css/bootstrap.min.css";
import AddTODO from "./components/AddTODO.jsx";
import Appname from "./components/AppName";
import "./styles/style1.css";
import "./components/Animation.js";
import TodoItem from "./components/TodoItem.jsx";
import Empty from "./components/Empty.jsx";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

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
      <AddTODO onInputClick={onInputClick} />
      <TodoItem setTodoItems={setTodoItems} todoItems={todoItems} />
      {todoItems.length === 0 && <Empty />}
    </center>
  );
}

export default App;
