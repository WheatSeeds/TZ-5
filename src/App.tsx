import CreationForm from "./components/CreationForm.tsx";
import List from "./components/List.tsx";
import { useSelector } from "react-redux";
import { RootState } from "./store/store.ts";
import Todo from "./components/Todo.tsx";
import { ITodo } from "./types/types.ts";
import Nav from "./components/Nav.tsx";
import "./styles/styles.css";
import { useEffect, useState } from "react";

function App() {
  const todos = useSelector((state: RootState) => state.todos);
  const [currentFilter, setCurrentFilter] = useState("");
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>(todos);

  useEffect(() => {
    switch (currentFilter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  }, [todos, currentFilter]);

  return (
    <>
      <main className="main">
        <section className="todos">
          <CreationForm />
          <Nav todos={todos} setCurrentFilter={setCurrentFilter} />
          <List
            className="todo-list"
            items={filteredTodos}
            renderItem={(todo: ITodo) => <Todo key={todo.id} todo={todo} />}
          />
        </section>
      </main>
    </>
  );
}

export default App;
