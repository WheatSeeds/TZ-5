import {ITodo} from "../types/types.ts";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {deleteFromTodos} from "../store/todosSlice.ts";

type NavProps = {
    todos: ITodo[]
}


const Nav = ({todos}: NavProps) => {
    const dispatch = useDispatch();
    const itemsLeftCalc = () => {
        return todos.filter(todo => !todo.isCompleted).length;
    };

    const [itemsLeft, setItemsLeft] = useState<number>(itemsLeftCalc());

    useEffect(() => {
        setItemsLeft(itemsLeftCalc());
    }, [todos]);



    return (
        <div>
            <p>{itemsLeft} items Left</p>
            <button
                onClick={() => {
                    dispatch(deleteFromTodos())
                }}
            >Clear Completed</button>
        </div>
    );
};

export default Nav;