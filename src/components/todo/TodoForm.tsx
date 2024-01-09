import { ChangeEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
    console.log(todo);
  };

  return (
    <div className="m-10 border border-purple-500 p-4">
      <h1 className="mx-2 mb-2">This is a todo form component</h1>
      <form onSubmit={handleSubmit}>
        <input
          onBlur={(e) => setTask(e.target.value)}
          type="text"
          id="name"
          name="name"
          placeholder="Your Task here"
          className="border border-red-500 mx-2"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
