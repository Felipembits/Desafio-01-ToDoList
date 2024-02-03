import styles from "./Task.module.css";
import { Circle, Trash } from "phosphor-react";

interface TaskProps {
  title: string;
}

export function Task({title}: TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskInfo}>
        <button className={styles.checkCircle}><Circle size={24} weight="bold" /></button>
        <p>
          {title}
        </p>
      </div>
      <button className={styles.trash}>
          <Trash size={20} />
        </button>
    </div>
  );
}
