import {ITodo} from "../types/types.ts";
import {useDispatch} from "react-redux";
import {completeThisTodo} from "../store/todosSlice.ts";
type TodoProps = {
    todo: ITodo;
};

const Todo = ({todo} :TodoProps) => {
    const dispatch = useDispatch();
    return (
        <div onClick={() => {
            dispatch(completeThisTodo(todo));
        }}>
            <p>{todo.description}</p>
            <p>{String(todo.isCompleted)}</p>
        </div>
    );
};

export default Todo;