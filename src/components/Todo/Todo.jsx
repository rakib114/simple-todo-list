import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editMood, setEditMood] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);
  const createHandelar = () => {
    if (todoTitle !== "") {
      const newIteam = {
        id: Date.now(),
        title: todoTitle,
      };
      setTodoList([...todoList, newIteam]);
      setTodoTitle("");
    } else {
      alert("Please Enter some text");
    }
  };
  const DeleteHandelar = (id) => {
    const newList = todoList.filter((iteam) => iteam.id !== id);
    setTodoList(newList);
  };
  const EditHandelar = (id) => {
    const editingTodo = todoList.find((todo) => todo.id === id);
    setEditMood(true);
    setEditableTodo(editingTodo);
    setTodoTitle(editingTodo.title);
    console.log(editingTodo);
  };
  const UpdateHandelar = () => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editableTodo.id) {
          todo.title = todoTitle;
        }
        return todo;
      })
    );
    setEditMood(false);
    setTodoTitle("");
    setEditableTodo(null);
  };
  return (
    <div>
      <div className="container">
        <div className="sub__container">
          <br />
          <h2>ToDo List</h2>
          <input
            type="text"
            placeholder="Add a Iteam"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <button
            className="add_btn"
            onClick={() => {
              editMood ? UpdateHandelar() : createHandelar();
            }}
          >
            {editMood ? "Update Todo" : "Add to List"}
          </button>
          <ul className="todoList">
            {todoList.map((todo) => (
              <li className="todo_list_itam">
                {" "}
                <span>{todo.title}</span>{" "}
                <button
                  className="Edit_btn"
                  onClick={() => EditHandelar(todo.id)}
                >
                  Edit
                </button>
                <button
                  className="delte_btn"
                  onClick={() => DeleteHandelar(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
