import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo, checkLook, onCheckLook, onCheckDelete}) => {
  return (
    <div className="TodoList">
        <button className={`ListBtn ${checkLook ? "" : "lookbtn"}`} onClick={onCheckLook}>전체 목록</button>
        <button className={`ListBtn ${checkLook ? "lookbtn" : ""}`} onClick={onCheckLook}>완료 목록</button>
        <button className={`ListDeleteBtn ${checkLook ? "" : "lookbtn"}`} onClick={onCheckDelete}>완료 목록 삭제🗳️</button>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo} checkLook={checkLook} /> 
  ))}

    </div>
  );
};

export default TodoList;