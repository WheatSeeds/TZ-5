import {ITodo} from "../types/types.ts";
type TodoProps = {
    todo: ITodo;
};

const Todo = ({todo} :TodoProps) => {
    return (
        <div>
            <p>{todo.description}</p>
            <p>{todo.isCompleted}</p>
        </div>
    );
};

export default Todo;