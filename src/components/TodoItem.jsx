import React from "react";
import { toast } from "react-toastify";

function TodoItem({
  todoItems,
  setTodoItems,
  setDateValue,
  setTodoValue,
  setAdd,
  add,
}) {
  const handleTodo = (index) => {
    const updatedItems = todoItems.map((item, i) => {
      if (i === index) {
        return { ...item, isDeleted: true };
      } else {
        return item;
      }
    });

    setTimeout(() => {
      const filteredItems = updatedItems.filter((item) => !item.isDeleted);
      setTodoItems(filteredItems);

      removeStrikethrough();
    }, 600);

    const todoItem = document.getElementById(`todoItem-${index}`);
    if (todoItem) {
      todoItem.style.textDecoration = "line-through blueviolet 3px";
      todoItem.style.transition = "0.3s linear";
    }
  };

  const handleOmit = (index) => {
    const updatedItems = todoItems.map((item, i) => {
      if (i === index) {
        return { ...item, isDeleted: true };
      } else {
        return item;
      }
    });
    const filteredItems = updatedItems.filter((item) => !item.isDeleted);
    setTodoItems(filteredItems);
  };

  const handleEdit = (index) => {
    todoItems.map((item, i) => {
      if (i === index) {
        setDateValue(item.dueDate);
        handleOmit(i);
        setTodoValue(item.name);
      }
    });

    setAdd("Save");
  };

  function removeStrikethrough() {
    const todoItems = document.querySelectorAll("[id^='todoItem-']");
    todoItems.forEach((item) => {
      item.style.textDecoration = "none";
      item.style.transition = "0.3s linear";
    });
  }

  const handleSave = () => {
    toast("Please save changes before editing this ToDo");
  };

  return (
    <div className="container text-center todo-item">
      {todoItems.map((item, index) => (
        <div className="row spl" key={index}>
          <div className="col-5" id={`todoItem-${index}`}>
            {item.name}
          </div>
          <div className="col-3">{item.dueDate}</div>
          <div className="col-4">
            <button
              type="button"
              className="btn del"
              onClick={() => handleTodo(index)}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn edit"
              onClick={() => (add === "Add" ? handleEdit(index) : handleSave())}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
