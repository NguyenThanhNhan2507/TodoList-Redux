import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../actions/MessAction";

export const Todos = ({ handleEditClick, editFormVisibility }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);
  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="actions-box">
        {editFormVisibility === false && (
          <>
            <span onClick={() => handleEditClick(todo)}>
              <button>Edit</button>
            </span>
            <span onClick={() => dispatch(removeTodo(todo.id))}>
              <button>Delete</button>
            </span>
          </>
        )}
      </div>
    </div>
  ));
};
