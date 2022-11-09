import React from "react";
import "./todolist.css";
import { useSelector, useDispatch } from "react-redux";
import { toogleComplete } from "../../redux/reducers/todoReducer/todoSlice";
import { removeTodo } from "../../redux/reducers/todoReducer/todoSlice";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useState } from "react";
import TodoForm from "../todoForm/TodoForm";

import ListItem from "../listItem/ListItem";

function TodoList({ setupdatedData, updatedData,setIsShown },) {

  const dispatch = useDispatch();
  const handleComplete = (id, completed) => {
    dispatch(toogleComplete({ id: id, completed: !completed }));
  };
  const handleDelete = (id) => {
    dispatch(removeTodo({ id: id }));
    console.log("sjdhsjd");
  };
  const Todos = useSelector((state) => state.todos);
  const handleUpdate = (todo, index) => {
    console.log(todo);
    let obj = {
      ...todo,
      index: index,
    };
    setupdatedData(obj);
  };
  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <div className="container">
     
      

      <div className="todolistContainer">
        <div className="addButon">
          <button onClick={handleClick}>Add Todo Data</button>
        </div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>id</th>
              <th>TodoData</th>
              <th>lastName</th>
              <th>Email</th>
              <th>Changes</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Todos.map((todo, index) => (
              <tr className="trBox">
                <td>{todo.id}</td>
                <td>
                  <div className="todoTitle">
                    {todo.completed ? "Completed" : "Pending"}
                    <input
                      onChange={() => handleComplete(todo.id, todo.completed)}
                      type="checkbox"
                      checked={todo.completed}
                    />
                    {todo.firstName}
                  </div>
                </td>
                <td>
                  {todo.lastName}
                </td>
                <td>
                {todo.email}
                </td>
                
                <td>
                  <div className="listButon">
                    <button onClick={() => handleUpdate(todo, index)}>
                      Edit
                    </button>
                  </div>
                </td>
                <td>
                  {console.log(Todos)}
                  <div className="deleteeIcon">
                    <RiDeleteBin7Fill
                      className="delico"
                      onClick={() => handleDelete(todo.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
