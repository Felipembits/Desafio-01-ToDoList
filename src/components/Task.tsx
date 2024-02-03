import styles from "./Task.module.css";
import { Circle, Trash } from "phosphor-react";

export function Task() {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskInfo}>
        <button className={styles.checkCircle}><Circle size={24} weight="bold" /></button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          non laborum odit error suscipit excepturi repellendus alias ratione,
          pariatur esse provident consectetur aliquam sit, libero, aut
          dignissimos impedit nemo a!
        </p>
        <button className={styles.trash}>
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
