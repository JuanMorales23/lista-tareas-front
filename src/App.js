import "./App.css";
import FormList from "./components/FormList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import DoneList from "./components/DoneList";
import PostponedList from "./components/PostponedList";
import RefuseList from "./components/RefuseList";

function App() {
  const url = "http://localhost:8080/";
  const [task, setTask] = useState([]);

  const getDates = () => {
    axios.get(url).then(({ data }) => setTask(data));
  };

  useEffect(() => {
    getDates();
  }, [task]);

  return (
    <div className="App">
      <h1>App Lista de tareas</h1>
      <FormList />
      <div class="row ">
        <TaskList
          task={task}
          
        />
        <DoneList />
        <PostponedList />
        <RefuseList />
      </div>
    </div>
  );
}

export default App;
