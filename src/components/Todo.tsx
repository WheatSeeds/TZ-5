import { ITodo } from "../types/types.ts";
import { useDispatch } from "react-redux";
import { completeThisTodo } from "../store/todosSlice.ts";
type TodoProps = {
  todo: ITodo;
};

const Todo = ({ todo }: TodoProps) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`todo ${todo.isCompleted ? "todo_complete" : ""}`}
      onClick={() => {
        dispatch(completeThisTodo(todo));
      }}
    >
      <p className="todo__description">{todo.description}</p>
      <p className="todo__mark">{String(todo.isCompleted)}</p>
    </div>
  );
};

export default Todo;
