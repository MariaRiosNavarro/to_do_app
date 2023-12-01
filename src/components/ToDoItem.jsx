import DeleteSvg from "./DeleteSvg";

const ToDoItem = ({ todo, setRefresh }) => {
  const handleRemove = () => {
    console.log("before");
    fetch("http://localhost:9995/api/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: todo.id }),
    }).then(() => {
      console.log("after");
      setRefresh((prev) => !prev);
      console.log("ToDo Deleted");
    });
  };

  return (
    <article className="flex flex-col items-center">
      <div className="flex flex-col  w-[70%]">
        <p className="bg-secondary py-1 text-neutral pl-2 font-bold rounded-xl my-1">
          {todo.todo}
        </p>
        <div className="flex items-stretch pl-[1rem] gap-[5rem] relative">
          <div>
            <span className="block">Category: </span>
            <p>{todo.category}</p>
          </div>
          <div>
            <span className="block">Priority:</span>
            <p>{todo.priority}</p>
          </div>
          <button
            className="btn absolute right-4 bg-transparent border-none"
            onClick={handleRemove}
          >
            <DeleteSvg />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ToDoItem;
