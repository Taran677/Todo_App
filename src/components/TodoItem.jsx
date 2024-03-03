import React from "react";

function TodoItem({ todoItems, setTodoItems }) {
  const handleTodo = (index) => {
    const updatedItems = todoItems.map((item, i) => {
      if (i === index) {
        console.log("Updating Item:", item);
        return { ...item, isDeleted: true };
      } else {
        return item;
      }
    });

    console.log("Updated Items:", updatedItems);

    setTimeout(() => {
      const filteredItems = updatedItems.filter((item) => !item.isDeleted);
      console.log("Filtered Items:", filteredItems);
      setTodoItems(filteredItems);

      // Call the function to remove strikethrough from all elements
      removeStrikethrough();
    }, 600);

    // Apply strikethrough effect to the todo item
    const todoItem = document.getElementById(`todoItem-${index}`);
    if (todoItem) {
      todoItem.style.textDecoration = "line-through blueviolet 3px";
      todoItem.style.transition = "0.3s linear";
    }
  };

  // JavaScript function to remove strikethrough from all elements
  function removeStrikethrough() {
    const todoItems = document.querySelectorAll("[id^='todoItem-']");
    todoItems.forEach((item) => {
      item.style.textDecoration = "none";
      item.style.transition = "0.3s linear";
    });
  }

  return (
    <div className="container text-center">
      {todoItems.map((item, index) => (
        <div className="row spl" key={index}>
          <div className="col-6" id={`todoItem-${index}`}>
            {item.name}
          </div>
          <div className="col-4">{item.dueDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn del"
              onClick={() => handleTodo(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
