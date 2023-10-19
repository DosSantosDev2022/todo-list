import styles from "./listTask.module.css";

interface ListTaskProps {
  title: string;
  removeTask: React.MouseEventHandler<HTMLButtonElement>;
  isComplete: boolean;
  onCheckComplete: () => void;
}

export function ListTask({
  title,
  removeTask,
  isComplete,
  onCheckComplete,
}: ListTaskProps) {
  return (
    <>
      <div
        className={`${styles.listTasks} ${isComplete ? styles.complete : ""}`}
      >
        <input
          type="checkbox"
          checked={isComplete}
          onChange={onCheckComplete}
        />
        <p className={styles.title}>{title}</p>
        <button onClick={removeTask} className={styles.btn}>
          <img src="/src/assets/btn.svg" />
        </button>
      </div>
    </>
  );
}
