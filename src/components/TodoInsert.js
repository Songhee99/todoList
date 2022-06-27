import React, { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.css";
import { TiTrash, TiPencil } from "react-icons/ti";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TodoInsert = ({onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dated, setDated] = useState(new Date());

  const onChange_title = e => {
    setTitle(e.target.value);
  };

  const onChange_content = e => {
    setContent(e.target.value);
  };

  const onChange_date = e => {
    setDated(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(dated.getMonth()+1+"/"+dated.getDate());
    var date = dated.getMonth()+1+"/"+dated.getDate();
    onInsertTodo(title, content
      , date
      );
    setTitle("");
    setContent("");
    setDated(new Date())
    onInsertToggle(); 
  };

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.text);
      setContent(selectedTodo.explain);
      setDated(selectedTodo.date);
    }
  }, [selectedTodo]);

    return (
      <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form onSubmit={selectedTodo ? () => { onUpdate(selectedTodo.id, title, content
          , dated
          );} : onSubmit }>
          <input placeholder="할 일을 입력하세요" value={title} onChange={onChange_title}></input>
          <input placeholder="설명을 입력하세요" value={content} onChange={onChange_content}></input><br></br>
          <Calendar value={dated} onChange={onChange_date}></Calendar>
          
          
          {selectedTodo ? (
          <div className="rewrite">
            <TiPencil
              onClick={() => { onUpdate(selectedTodo.id, title, content
                , dated
                ); }}
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