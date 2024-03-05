import React from "react";
import { toast } from "react-toastify";
import styles from "./TodoItem.module.css";

function TodoItem({
  todoItems,
  setTodoItems,
  setDateValue,
  setTodoValue,
  setAdd,
  add,
  setTimeValue,
}) {
  let done = document.createElement("div");
  done.innerHTML = `<img src="https://imgs.search.brave.com/AS0lUE0202aV8b9flLpiI9w67XF7M5w32ZPzx_WWOZg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS9k/b3dubG9hZC9ncmVl/bl90aWNrLzI3ODk0/LTctZ3JlZW4tdGlj/ay10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LnBuZw" alt="_/">`;

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
    const parentItem = todoItem.parentElement.parentElement;
    if (todoItem) {
      todoItem.style.textDecoration = "line-through rgb(100, 165, 255) 2px";
      todoItem.style.transition = "0.3s linear";
      setTimeout(() => {
        todoItem.style.opacity = "0";
        parentItem.style.transition = "0.6s";
        parentItem.style.translate = "1000px";
      }, 200);
      parentItem.childNodes[1].childNodes[1].firstChild.appendChild(done);
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
        setTimeValue(item.dueTime);
      }
    });

    setAdd("Save");
  };

  function removeStrikethrough() {
    const todoItems = document.querySelectorAll("[id^='todoItem-']");

    todoItems.forEach((item) => {
      let parentItem = item.parentElement.parentElement;
      console.log(parentItem.childNodes[1].childNodes[1].firstChild);
      parentItem.style.transition = "0s";
      parentItem.style.translate = "0";
      item.style.textDecoration = "none";
      item.style.opacity = "1";
      item.style.transition = "0.3s linear";
      let selectedDiv = parentItem.childNodes[1].childNodes[1].firstChild;
      if (selectedDiv.contains(done)) {
        selectedDiv.removeChild(done);
      }
    });
  }

  const handleSave = () => {
    toast("Please save changes before editing this ToDo");
  };

  return (
    <div className="container text-center todo-item">
      {todoItems.map((item, index) => (
        <div className={`row spl` + " " + `${styles["row"]}`} key={index}>
          <div className="col-3">
            <div className="headContainer">
              {" "}
              <div className="date">Date: </div>
              <div className="dueDate">{item.dueDate}</div>
            </div>
            <div className="headContainer">
              {" "}
              <div className="date">Time: </div>
              <div className="dueDate">{item.dueTime}</div>
            </div>
          </div>
          <div className={`${styles["secondContainer"]}`}>
            <div
              className={"col-5" + " " + `${styles["column"]}`}
              id={`todoItem-${index}`}
            >
              {item.name}
            </div>

            <div className={`${styles["col-4"]}`}>
              <button
                type="button"
                className="btn del"
                onClick={() => handleTodo(index)}
              ></button>
              <button
                type="button"
                className="btn edit"
                onClick={() =>
                  add === "Add" ? handleEdit(index) : handleSave()
                }
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
