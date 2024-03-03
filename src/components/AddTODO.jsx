import React from "react";
import styles from "./AddTODO.module.css";
import { toast } from 'react-toastify';

function AddTODO({
  onInputClick,
  dateValue,
  setDateValue,
  todoValue,
  setTodoValue,
  add,
  setAdd,
}) {
  const handleTodoInputChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleDateInputChange = (e) => {
    let updatedDate = e.target.value;
    let currentDate = new Date().toISOString().split('T')[0]; // Get current date in yyyy-mm-dd format
    if (updatedDate >= currentDate) {
      setDateValue(updatedDate);
    } else {
      toast("Invalid Date");
    }
  };

  const handleButtonClick = () => {
    onInputClick(todoValue, dateValue);
    setTodoValue("");
    setDateValue("");
    setAdd("Add");
  };

  return (
    <div className="container text-center heading-app">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoValue}
            onChange={handleTodoInputChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dateValue}
            onChange={handleDateInputChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn ${styles.add} add`}
            onClick={handleButtonClick}
          >
            {add}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTODO;
