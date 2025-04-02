import { ITodo } from "../types/types.ts";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFromTodos } from "../store/todosSlice.ts";

type NavProps = {
  todos: ITodo[];
  setCurrentFilter: (filter: string) => void;
};

const Nav = ({ todos, setCurrentFilter }: NavProps) => {
  const dispatch = useDispatch();
  const itemsLeftCalc = () => {
    return todos.filter((todo) => !todo.isCompleted).length;
  };

  const [itemsLeft, setItemsLeft] = useState<number>(itemsLeftCalc());

  useEffect(() => {
    setItemsLeft(itemsLeftCalc());
  }, [todos]);

  const filters = [
    {
      value: "all",
      name: "All",
    },
    {
      value: "active",
      name: "Active",
    },
    {
      value: "completed",
      name: "Completed",
    },
  ];

  return (
    <nav className="navbar">
      <p className="navbar__left-counter">{itemsLeft} items Left</p>
      <select
        className="navbar__filter-list"
        onChange={(e) => {
          setCurrentFilter(e.target.value);
        }}
      >
        {filters.map((filter) => (
          <option
            className="navbar__filter-item"
            value={filter.value}
            key={filter.name}
          >
            {filter.name}
          </option>
        ))}
      </select>
      <button
        className="navbar__clear-button"
        onClick={() => {
          dispatch(deleteFromTodos());
        }}
      >
        Clear Completed
      </button>
    </nav>
  );
};

export default Nav;
