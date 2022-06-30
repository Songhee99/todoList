import React, { useState } from "react";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "./components/TodoInsert";

let nextId = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [checkLook, setCheckLook] = useState(false);
  // const [tag, setTag] = useState([]);

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "피자랑 치킨 먹기",
      explain: "점심 저녁 나눠서",
      checked: true,
      date:"2022-06-25",
      // tag: "약속"
    },
    {
      id: 2,
      text: "리액트 공부하기",
      explain: "투두리스트 만들기",
      checked: true,
      date:"2022-06-26",
      // tag: "공부"
    },
    {
      id: 3,
      text: "사내맞선 정주행",
      explain: "넷플릭스로 보기",
      checked: false,
      date:"2022-06-27",
      // tag: 
    }
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = (text, explain, date) => {
    if (text === "" || explain === "") {
      return alert("빈 칸을 채워주세요 !");
    } else {
      const todo = {
        id: nextId,
        text: text,
        explain: explain,
        date: date,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = todo => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const onUpdate = (id, text, explain, date ) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, text, explain, date } : todo))
    );
  };

  const onCheckLook = () => {
    setCheckLook(prev => !prev);
  }

  const onCheckDelete = () => {
    setTodos(todos => todos.filter(todo => todo.checked !== true));
  }

  return (
  <Template todoLength={todos.length}>
    <TodoList todos={todos} 
      onCheckToggle={onCheckToggle} 
      onInsertToggle={onInsertToggle} 
      onChangeSelectedTodo={onChangeSelectedTodo} 
      checkLook={checkLook} 
      onCheckLook={onCheckLook}
      onCheckDelete={onCheckDelete}/>
    <div className="add-todo-button" onClick={onInsertToggle} >
      <MdAddCircle />
    </div>
    {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
    </Template>
  );
}; 

export default App;