import "./input.css";
import Button from "../button/Button";
const Input = ({ setTodo, setButtonPressed }) => {
  return (
    <div className="todoFusion__todoInput">
      <input
        type="text"
        placeholder="Add new...."
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="todoFusion__todoInput-action">
        <div>
          <input type="date" />
          <div className="todoInput-action_suggestionbox">
            <p>set due date</p>
          </div>
        </div>
        <Button setButtonPressed={setButtonPressed} />
      </div>
    </div>
  );
};

export default Input;
