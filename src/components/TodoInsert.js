import React, { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.css";
import { TiTrash, TiPencil } from "react-icons/ti";

const TodoInsert = ({onInsertToggle, onInsertTodo_todo, onInsertTodo_explain, selectedTodo, onRemove, onUpdate}) => {
  const [value_todo, setValue_todo] = useState("");
  const [value_explain, setValue_explain] = useState("");

  const onChange_todo = e => {
    setValue_todo(e.target.value);
  };

  const onChange_explain = e => {
    setValue_explain(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo_todo(value_todo);
    onInsertTodo_explain(value_explain);
    setValue_todo("");
    setValue_explain("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue_todo(selectedTodo.text);
      setValue_explain(selectedTodo.explain);
    }
  }, [selectedTodo]);

    return (
      <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form onSubmit={selectedTodo ? () => { onUpdate(selectedTodo.id, value_todo, value_explain);} : onSubmit }>
          <input placeholder="할 일을 입력하세요" value={value_todo} onChange={onChange_todo}></input>
          <input placeholder="설명을 입력하세요" value={value_explain} onChange={onChange_explain}></input>
          {selectedTodo ? (
          <div className="rewrite">
            <TiPencil
              onClick={() => { onUpdate(selectedTodo.id, value_todo, value_explain); }}
            />
            <TiTrash onClick={() => { onRemove(selectedTodo.id); }} />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
      </div>
    );
  };
  
  export default TodoInsert;