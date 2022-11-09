import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "./redux/reducers/counterReducer/CounterReducer.jsx";
import "./App.css";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import { useState } from "react";

function App() {
  // const count = useSelector((state) => state.counter.count);
  const [updatedData, setupdatedData] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  console.log(updatedData);
  return (
    <div className="App">
      {isShown&&
      <TodoForm  updatedData={updatedData} setupdatedData={setupdatedData} />
    }
      
      <TodoList  setIsShown={setIsShown} updatedData={updatedData} setupdatedData={setupdatedData} />

    
    </div>
  );
}

export default App;
