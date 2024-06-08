import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const AddTasks = ({ setAllTasks }) => {
  const [addTask, setAddTask] = useState("");
  const statusVariants = {
    initial: { scale: 1 },
    clicked: { scale: 1.2 },
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (addTask.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        content: addTask,
        isComplete: false,
      };
      setAllTasks((prev) => [...prev, newTask]);
      setAddTask("");
    }
  }

  return (
    <form className="input_container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What will you be doing?"
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
        required
      />
      <motion.button
        type="submit"
        variants={statusVariants}
        initial="initial"
        whileTap="clicked"
        className="addBtn ri-add-circle-fill"
      ></motion.button>
    </form>
  );
};

export default AddTasks;
