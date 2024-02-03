// import { useState } from "react";
// import { NoTasksHere } from "./NoTasksHere";
import { Task } from "./Task";
import styles from "./TaskBoard.module.css";

interface TaskProps {
    title: string;
    id: string;
    checked?: boolean;
  }  

interface TaskBoardProps {
    tarefas: TaskProps[];
    handleDeleteTask: (task:any) => void;
  }

export function TaskBoard({tarefas, handleDeleteTask}: TaskBoardProps) {
  
  
  return (
    <section className={styles.taskBoardArea}>
      <header className={styles.taskBoardHeader}>
        <div className={styles.counterTitle}>
          <h2 className={styles.createdTasks}>Tarefas criadas</h2>
          <span className={styles.counterBall}>
            <p>{tarefas.length}</p>
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
        {tarefas.map((tarefa) => {
            return <Task key={tarefa.id} handleDeleteTask={handleDeleteTask} {...tarefa}/>;
        })}
    </div>
    </section>
  );
}
