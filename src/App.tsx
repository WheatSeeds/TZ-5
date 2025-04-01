import CreationForm from "./components/CreationForm.tsx";
import List from "./components/List.tsx";
import {useSelector} from "react-redux";
import {RootState} from "./store/store.ts";
import Todo from "./components/Todo.tsx";
import {ITodo} from "./types/types.ts";
import Nav from "./components/Nav.tsx";

function App() {
    const todos = useSelector((state: RootState) => state.todos);
  return (
    <>
      <main>
        <CreationForm/>
        <List items={todos} renderItem={(todo: ITodo) => (<Todo todo={todo}/>)}/>
        <Nav todos={todos}/>
      </main>
    </>
  )
}

export default App
