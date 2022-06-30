import React, { useState, useEffect, useCallback } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.css";
import { TiTrash, TiPencil } from "react-icons/ti";

const TodoInsert = ({onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dated, setDated] = useState(new Date());
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const onChange_title = e => {
    setTitle(e.target.value);
  };

  const onChange_content = e => {
    setContent(e.target.value);
  };

  const onChange_date = e => {
    setDated(e.target.value);
  };

  const onChange_tag = useCallback((e) => {
    setTag(e.target.value);
  }, []);

  const onAddTags = useCallback(
    (e) => {
      e.preventDefault();
      if(tag === "") {
        return alert("태그를 입력해주세요 !");
      }
      if (tag !== "") {
        if (tags.includes(tag) === true) {
          return alert("이미 작성한 태그입니다 !");
        } else {
          setTags(tags.concat(tag));
          setTag("");
        }
      }
    },
    [tag, tags],
  );

  const onRemoveTag = useCallback(
    (item) => {
      setTags(tags.filter((tag) => tag !== item));
    },
    [tags],
  );

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo(title, content, dated, tags);
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
      setTag(selectedTodo.tag);
    }
  }, [selectedTodo]);

    return (
      <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form onSubmit={selectedTodo ? () => { onUpdate(selectedTodo.id, title, content, dated, tag );} : onSubmit }>
          <input placeholder="할 일을 입력하세요" value={title} onChange={onChange_title}></input>
          <input placeholder="설명을 입력하세요" value={content} onChange={onChange_content}></input>
          
          <input placeholder="#태그" value={tag} onChange={onChange_tag}></input><br></br>
          <button className="addTag" onClick={onAddTags}>태그 추가</button>
          {tags.map((item) => (
                <div className="tag_item" key={item} onClick={() => onRemoveTag(item)}>{item}</div>
                ))}
          
          <input type="date" value={dated} onChange={onChange_date}></input>
          {selectedTodo ? (
          <div className="rewrite">
            <TiPencil
              onClick={() => { onUpdate(selectedTodo.id, title, content, dated, tag ); }}
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