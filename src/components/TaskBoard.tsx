import { useState } from "react";
import { NoTasksHere } from "./NoTasksHere";
import { Task } from "./Task";
import styles from "./TaskBoard.module.css";

export function TaskBoard() {
  const [tarefas, setTarefas] = useState([
    { title: "Teste de task" },
    { title: "123123123" },
  ]);
  return (
    <section className={styles.taskBoardArea}>
      <header className={styles.taskBoardHeader}>
        <div className={styles.counterTitle}>
          <h2 className={styles.createdTasks}>Tarefas criadas</h2>
          <span className={styles.counterBall}>
            <p>0</p>
          </span>
        </div>
        <div className={styles.counterTitle}>
          <h2 className={styles.concludedTasks}>Concluídas</h2>
          <span className={styles.counterBall}>
            <p>0</p>
          </span>
        </div>
      </header>
    <div className={styles.taskBoardBlock}>
        <NoTasksHere />
        {tarefas.map(tarefa => {
            return <Task key={tarefa.title} {...tarefa} />;
        })}
    </div>
    </section>
  );
}
