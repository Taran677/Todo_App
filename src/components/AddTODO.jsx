import React, { useState } from "react";
import styles from "./AddTODO.module.css";

function AddTODO({ onInputClick }) {
  const [todoValue, setTodoValue] = useState(""); 
  const [dateValue, setDateValue] = useState(""); 

 
  const handleTodoInputChange = (e) => {
    setTodoValue(e.target.value);
  };

  
  const handleDateInputChange = (e) => {
    setDateValue(e.target.value);
  };

 
  const handleButtonClick = () => {
    onInputClick(todoValue, dateValue); 
    setTodoValue(""); 
    setDateValue(""); 
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
            className={`btn ${styles.add}`}
            onClick={handleButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTODO;
