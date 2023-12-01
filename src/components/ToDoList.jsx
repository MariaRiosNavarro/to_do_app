import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, setRefresh }) => {
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
        {toDos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} setRefresh={setRefresh} />
        ))}
      </section>
    );
  }
};

export default ToDoList;
