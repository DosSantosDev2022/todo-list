import { useState } from "react";
import styles from "./TextFild.module.css";

export function TextFild({ handleNewTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTaskTitle.trim() !== "") {
      handleNewTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  return (
    <form onSubmit={handleNewTask} className={styles.form}>
      <input
        type="text"
        value={newTaskTitle}
        placeholder="Adicione uma nova tarefa"
        className={styles.textfild}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button
        about=""
        onClick={handleAddTask}
        type="submit"
        className={styles.btn}
      >
        Criar
      </button>
    </form>
  );
}
