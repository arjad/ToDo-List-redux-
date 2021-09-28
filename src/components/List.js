import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import "../css/list.css";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const List = (props) => {
  const [sort, setSort] = useState("all");
  
  return (
  <div className="list_div">
    {props.todos.length > 0 
      ? props.todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              removeTodo={props.removeTodo}
              updateTodo={props.updateTodo}
              completeTodo={props.completeTodo}
            />
          );
        })
      : null
    }
  </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
