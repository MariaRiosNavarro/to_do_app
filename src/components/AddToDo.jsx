import { useRef, useState } from "react";

const AddToDo = ({ setRefresh }) => {
  const [error, setError] = useState(false);

  const todoRef = useRef();
  const priorityRef = useRef();
  const categoryRef = useRef();

  const save = () => {
    if (todoRef.current.value === "") {
      return setError(true);
    }

    const todo = {
      todo: todoRef.current.value,
      priority: priorityRef.current.value,
      category: categoryRef.current.value,
    };

    fetch("http://localhost:9995/api/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then((response) => {
      if (response.ok) {
        // Empty form
        setRefresh((prev) => !prev);
        todoRef.current.value = "";
        priorityRef.current.value = "normal";
        categoryRef.current.value = "personal";
      }
    });
  };

  return (
    <article className="flex flex-col items-center w-[30rem] my-0 mx-auto gap-4">
      <label htmlFor="todo">Task:</label>
      <input
        className="border-b-4 border-primary outline-none text-2xl bg-transparent"
        type="text"
        name="todo"
        id="todo"
        placeholder={error ? "Insert your task here!!" : ""}
        ref={todoRef}
        required
      />
      <select
        name="priority"
        className="select select-primary w-full max-w-[45%]"
        ref={priorityRef}
      >
        <option value="high">High</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>
      <select
        name="category"
        className="select select-primary w-full max-w-[45%]"
        ref={categoryRef}
      >
        <option value="personal">Personal</option>
        <option value="work">Work</option>
      </select>

      <button onClick={save} className="btn btn-primary">
        SAVE
      </button>
    </article>
  );
};

export default AddToDo;
