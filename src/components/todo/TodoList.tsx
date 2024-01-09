import { useContext } from "react";
import { TTodo, TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  return (
    <div>
      {state.map((item: TTodo) => (
        <p
          onClick={() => dispatch({ type: "taskComplete", payload: item.id })}
          className={`border border-blue-600 py-1 px-2 mb-4 ml-10 w-fit cursor-pointer ${
            item.isCompleted ? "line-through" : ""
          }`}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
