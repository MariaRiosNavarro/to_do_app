import DeleteSvg from "./DeleteSvg";

const ToDoItem = ({ todo }) => {
  const handleRemove = () => {};

  return (
    <article className="flex flex-col items-center">
      <div className="flex flex-col  w-[70%]">
        <p className="bg-red-300">{todo.todo}</p>
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
