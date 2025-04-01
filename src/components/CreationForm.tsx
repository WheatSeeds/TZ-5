import {useDispatch, useSelector} from "react-redux";
import {addToTodos} from "../store/todosSlice.ts";
import {useEffect, useState} from "react";
import {RootState} from "../store/store.ts";

const CreationForm = () => {
    const dispatch = useDispatch();
    const [todoDescription, setTodoDescription] = useState<string>('');
    const todos = useSelector((state: RootState) => state.todos);

    useEffect(() => {
        console.log(todos);
    }, [todos])

    return (
        <form>
            <input
                type="text"
                placeholder="Your Todo"
                value={todoDescription}
                onChange={(e) => {
                setTodoDescription(e.target.value)}}
                required
            />
            <button type="submit" onClick={(e) => {
                e.preventDefault();
                dispatch(addToTodos({id: Date.now(), description: todoDescription!, isCompleted: false}));
            }}>Add</button>
        </form>
    );
};

export default CreationForm;