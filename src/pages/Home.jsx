import { useEffect, useState } from "react";
import Header from "../components/Header";
import ToDoList from "../components/TodoList";
import AddToDo from "../components/AddToDo";

const Home = () => {
  const [toDos, setToDos] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9995/api/todos")
      .then((response) => response.json())
      .then((data) => setToDos(data));
  }, [refresh]);

  return (
    <section className="max-w-[95vw] my-0 mx-auto h-screen">
      <Header />
      <AddToDo setRefresh={setRefresh} />
      <ToDoList toDos={toDos} setRefresh={setRefresh} />
    </section>
  );
};

export default Home;
