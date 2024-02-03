import styles from "./Task.module.css";
import { Circle, Trash } from "phosphor-react";

interface TaskProps {
  key: string;
  title: string;
  handleDeleteTask: (task:any) => void;
  checked?: boolean;
  id: string;
}

export function Task(props: TaskProps) {

  function onDeleteTask() {
    props.handleDeleteTask(props.id)
  }
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskInfo}>
        <button className={styles.checkCircle}><Circle size={24} weight="bold" /></button>
        <p>
          {props.title}
        </p>
      </div>
      <button className={styles.trash} onClick={onDeleteTask}>
          <Trash size={20} />
        </button>
    </div>
  );
}