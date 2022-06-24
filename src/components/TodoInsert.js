import React, { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.css";


const TodoInsert = ({onInsertToggle, onInsertTodo}) => {
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

    return (
      <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form onSubmit={onSubmit}>
          <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}></input>
          <input placeholder="설명을 입력하세요" value={value} onChange={onChange}></input>
          <button type="submit">
            <MdAddCircle />
          </button>
        </form>
      </div>
    );
  };
  
  export default TodoInsert;