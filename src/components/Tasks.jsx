import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tasks = ({ allTasks, setAllTasks }) => {
  function handleDelete(id) {
    const updatedTasks = allTasks.filter((task) => task.id !== id);
    setAllTasks(updatedTasks);
  }

  const taskVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  function handleTaskStatus(id) {
    const updatedTasks = allTasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setAllTasks(updatedTasks);
  }

  const statusVariants = {
    initial: { scale: 1 },
    clicked: { scale: 1.2 },
  };

  console.log(allTasks);
  const completedTasksCount = allTasks.filter((task) => task.isComplete).length;
  return (
    <div className="tasks_container">
      <span>
        <b>{completedTasksCount}</b> of {allTasks.length} completed
      </span>

      <div className="tasks">
        <AnimatePresence>
          {allTasks.length !== 0 && (
            <>
              {allTasks.map((task) => (
                <motion.div
                  className="task"
                  key={task.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={taskVariants}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="status"
                    style={{
                      backgroundColor: `${
                        task.isComplete ? "#00D06C" : "#E6E6E6"
                      }`,
                    }}
                    variants={statusVariants}
                    initial="initial"
                    whileTap="clicked"
                    onClick={() => handleTaskStatus(task.id)}
                  >
                    <i className="ri-check-double-line"></i>
                  </motion.span>
                  <p className="content">{task.content}</p>
                  <button
                    className="ri-close-fill"
                    onClick={() => handleDelete(task.id)}
                  ></button>
                </motion.div>
              ))}
            </>
          )}

          {allTasks.length === 0 && (
            <div
              style={{
                color: "#B5B5B5",
                opacity: 0.5,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                fontWeight: 600,
              }}
            >
              No tasks
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tasks;
