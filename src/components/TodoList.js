import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo, isChecked, onIsChecked, onCheckDelete}) => {
  return (
    <div className="TodoList">
        <button className={`ListBtn ${isChecked ? "" : "lookbtn"}`} onClick={onIsChecked}>전체 목록</button>
        <button className={`ListBtn ${isChecked ? "lookbtn" : ""}`} onClick={onIsChecked}>완료 목록</button>
        <button className={`ListDeleteBtn ${isChecked ? "" : "lookbtn"}`} onClick={onCheckDelete}>완료 목록 삭제🗳️</button>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo} isChecked={isChecked} /> 
  ))}

    </div>
  );
};

export default TodoList;