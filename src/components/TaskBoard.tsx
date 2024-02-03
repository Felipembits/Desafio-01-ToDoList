import { NoTasksHere } from "./NoTasksHere";
import { Task } from "./Task";
import styles from "./TaskBoard.module.css";

interface TaskProps {
  title: string;
  id: string;
  checked?: boolean;
}  

interface TaskBoardProps {
  tarefas: TaskProps[];
  handleDeleteTask: (task: any) => void;
  handleClickCheck: (task: any) => void;
}

export function TaskBoard({tarefas, handleDeleteTask, handleClickCheck}: TaskBoardProps) {
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.checked === true);

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
            <p>{tarefasConcluidas.length + ' de ' + tarefas.length}</p>
          </span>
        </div>
      </header>
      <div className={styles.taskBoardBlock}>
        { tarefas.length === 0 ? (
          <NoTasksHere />
        ) : (
          tarefas.map((tarefa) => (
            <Task key={tarefa.id} handleDeleteTask={handleDeleteTask} {...tarefa} handleClickCheck={handleClickCheck}/>
          ))
        )}
      </div>
    </section>
  );
}
