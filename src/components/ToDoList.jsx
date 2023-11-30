import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos }) => {
  if (toDos.length === 0) {
    return (
      <section className="flex justify-center items-center">
        <p className="text-xl">No TASKS</p>
      </section>
    );
  } else {
    return (
      <section>
        <h2 className="text-center text-primary p-8 text-2xl font-bold rounded-xl mx-auto">
          Tasks
        </h2>
        {toDos.map((todo, index) => (
          <ToDoItem key={index} todo={todo} />
        ))}
      </section>
    );
  }
};

export default ToDoList;
