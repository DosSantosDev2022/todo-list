import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TextFild } from "./components/TextFild";
import { ListTask } from "./components/listTasks";

type Task = {
  id: number;
  title: string;
  isComplete: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  function handleNewTask(newTaskTitle: string): void {
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
  }

  const removeTask = (taskId: number) => {
    // Lógica para remover uma tarefa pelo id
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const CheckedTaskComplete = (taskId: number): void => {
    const updatedTasks: Task[] = tasks.map((task) =>
      task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
    updateCompletedTasks(updatedTasks);
  };
  const updateCompletedTasks = (tasks: Task[]): void => {
    const completedCount: number = tasks.filter(
      (tasks) => tasks.isComplete
    ).length;
    setCompletedTasks(completedCount);
  };

  return (
    <>
      <Header />
      <main>
        <TextFild handleNewTask={handleNewTask} />
        <div className="TaskContainer">
          <div className="headerNoTasks">
            <div className="NoTasksCalc">
              <p>Tarefas Criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div className="NoTasksCalc">
              <p>Concluidas</p>
              <span>{completedTasks}</span>
            </div>
          </div>
          {tasks.length === 0 ? (
            <div className="ListTaskContainer">
              <img src="/src/assets/Clipboard.svg" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p> Cadastre uma nova tarefa agora</p>
            </div>
          ) : (
            <div className="tasksList">
              {tasks.map((task) => {
                return (
                  <ListTask
                    removeTask={() => removeTask(task.id)}
                    title={task.title}
                    key={task.id}
                    isComplete={task.isComplete}
                    onCheckComplete={() => CheckedTaskComplete(task.id)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
