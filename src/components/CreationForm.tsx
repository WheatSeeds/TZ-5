import { useDispatch } from "react-redux";
import { addToTodos } from "../store/todosSlice.ts";
import { useState } from "react";

const CreationForm = () => {
  const dispatch = useDispatch();
  const [todoDescription, setTodoDescription] = useState<string>("");

  return (
    <form className="creation-form">
      <input
        className="creation-form__input"
        type="text"
        placeholder="Your Todo"
        required
        value={todoDescription}
        onChange={(e) => {
          setTodoDescription(e.target.value);
        }}
      />
      <button
        className="creation-form__submit-button"
        type="submit"
        onClick={(e) => {
          if (todoDescription !== "") {
            e.preventDefault();
            dispatch(
              addToTodos({
                id: Date.now(),
                description: todoDescription!,
                isCompleted: false,
              }),
            );
            setTodoDescription("");
          }
        }}
      >
        Add
      </button>
    </form>
  );
};

export default CreationForm;
