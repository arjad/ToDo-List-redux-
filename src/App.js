import "./css/main.css";
import "./css/app.css";
import DisplayTodos from "./components/List";
import Todos from "./components/Todos";
import { motion } from "framer-motion";
import {GoListOrdered} from "react-icons/go"
function App() {
  const refresing=()=>{
    window.location.reload();
  }
  return (
    <div className="App border">

      <button className="refresh_btn" onClick={refresing}>
        Refresh this Page
      </button>
      
      <motion.h1
        className="heading"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <GoListOrdered />
        Todo App (REDUX)
      </motion.h1>

      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}
export default App;
