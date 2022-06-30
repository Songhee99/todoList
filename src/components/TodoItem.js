import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoItem.css";

const TodoItem = ({todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo, isChecked}) => {
  const { id, text, explain, date, checked, tag} = todo;
  return (
    <div className={`TodoItem ${checked ? "checked" : "non-checked"} ${isChecked ? "isChecked" : ""}`}>
          {checked ? <MdCheckBox
              onClick={() => {
                onCheckToggle(id);
              }}
            /> : <MdCheckBoxOutlineBlank 
            onClick={() => {
              onCheckToggle(id);
            }}
          />}
          <div className="text" onClick={() => { onChangeSelectedTodo(todo); onInsertToggle(); }}>{text}</div>
          <div className="explain" onClick={() => { onChangeSelectedTodo(todo); onInsertToggle(); }}>{explain}</div>
          <div className="date" onClick={() => { onChangeSelectedTodo(todo); onInsertToggle(); }}>{date}</div>
          <div className="tag" onClick={() => { onChangeSelectedTodo(todo); onInsertToggle(); }}>{tag}</div>
        </div>
  );
};

export default TodoItem;