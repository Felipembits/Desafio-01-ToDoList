import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <form className={styles.newTaskForm}>
      <input
        type="text"
        className={styles.newTaskInput}
        placeholder="Adicionar uma nova tarefa"
      />
      <button className={styles.newTaskBtn}>
        Criar <PlusCircle size={16}/>
      </button>
    </form>
  );
}
