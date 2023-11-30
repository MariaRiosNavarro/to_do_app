const ToDoItem = ({ todo }) => {
  return (
    <article>
      <div className="flex flex-col w-[100%] ">
        <p className="bg-red-300">{todo.todo}</p>
        <div className="flex pl-[1rem] gap-[5rem]">
          <div>
            <span className="block">Category: </span>
            <p>{todo.category}</p>
          </div>
          <div>
            <span className="block">Priority:</span>
            <p>{todo.priority}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ToDoItem;
