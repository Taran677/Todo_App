import React from "react";
import styles from "./AddTODO.module.css";
import { toast } from "react-toastify";

function AddTODO({
  onInputClick,
  dateValue,
  setDateValue,
  todoValue,
  setTodoValue,
  add,
  setAdd,
  timeValue,
  setTimeValue,
}) {
  const handleTodoInputChange = (e) => {
    setTodoValue(e.target.value);
  };
  const handleTimeInputChange = (e) => {
    let updatedTime = e.target.value;
    let currentTime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    let currentDate = new Date().toISOString().split("T")[0];
    if (dateValue == currentDate) {
      if (updatedTime >= currentTime) {
        setTimeValue(updatedTime);
      } else {
        toast("Please select valid time");
      }
    } else {
      setTimeValue(updatedTime);
      console.log(updatedTime, "parelse", typeof dateValue, typeof currentDate);
    }
  };
  const handleDateInputChange = (e) => {
    let updatedDate = e.target.value;
    let currentDate = new Date().toISOString().split("T")[0];
    if (updatedDate >= currentDate) {
      setDateValue(updatedDate);
    } else {
      toast("Invalid Date");
    }
  };

  const handleButtonClick = () => {
    onInputClick(todoValue, dateValue, timeValue);
    setTodoValue("");
    setDateValue("");
    setTimeValue("");
    setAdd("Add");
  };

  return (
    <div className="container text-center heading-app">
      <div className="row row-head">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo here"
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
          <input
            type="time"
            value={timeValue}
            onChange={handleTimeInputChange}
          />
        </div>
        <div className="col-2">
          <div className="addContainer">
            <button
              type="button"
              className={`btn ${styles.add} add`}
              onClick={handleButtonClick}
            >
              {add}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTODO;
