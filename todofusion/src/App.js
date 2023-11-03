import "./App.css";
import Input from "./components/input/Input";
import Checklist from "./components/checklist/Checklist";
import { useState } from "react";
function App() {
  // const updateTodo
  const [todo, setTodo] = useState("");
  // const [variable,dispatchfunction]=useState(value: type any string, boolean number or object)
  // above line is used to get the input value
  const [buttonPressed, setButtonPressed] = useState(false);
  //  above line will tell us wther the button is being pressed or not
  const [updatedTodo, setUpdatedTodo] = useState("");
  
  if (buttonPressed === true) {
    setUpdatedTodo(todo);
    setButtonPressed(false);
  }
  return (
    <div className="App">
      <div className="app__heading">
        <h1>Todo Fusion</h1>
      </div>
      <Input setTodo={setTodo} setButtonPressed={setButtonPressed} />
      <div id="app__dividerline" />
      <Checklist updatedTodo={updatedTodo} />
    </div>
  );
}

export default App;
