import React, { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import Legend from "./components/Legend";

const App = () => {
  const [allTasks, setAllTasks] = useState([]);

  return (
    <div className="App">
      <Legend />
      <AddTasks setAllTasks={setAllTasks} />
      <Tasks allTasks={allTasks} setAllTasks={setAllTasks} />
    </div>
  );
};

export default App;
