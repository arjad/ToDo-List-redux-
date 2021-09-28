import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoCheck } from "react-icons/go";
import { motion } from "framer-motion";
import "../css/todo.css";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => 
{
  const [todo, setTodo] = useState("");

  const handleChange = (e) => 
  {
    setTodo(e.target.value);
  };

  const add = () => 
  {
    if (todo === "") {
      document.getElementsByClassName("todo-input")[0].classList.add("empty-input");
      document.getElementsByClassName("ptag")[0].innerHTML="Field cannot be Kept Empty";
    } 
    else 
    {
      document.getElementsByClassName("todo-input")[0].classList.remove("empty-input");
      document.getElementsByClassName("ptag")[0].innerHTML="";

      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div className="addTodosdiv">
      <p className="ptag"></p>

      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="addbtn"
        onClick={() => add()}
      >
        <GoCheck/>
      </motion.button>

      <br />
    </div>
  );
};
//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
