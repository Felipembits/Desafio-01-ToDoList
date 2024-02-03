import { useState, useEffect } from "react";
import styles from "./Task.module.css";
import { CheckCircle, Circle, Trash } from "phosphor-react";

interface TaskProps {
  key: string;
  title: string;
  handleDeleteTask: (taskId: string) => void;
  handleClickCheck: (taskId: string) => void;
  checked?: boolean;
  id: string;
}

export function Task(props: TaskProps) {
  const [ativo, setAtivo] = useState(props.checked);

  useEffect(() => {
    // Atualiza o estado local 'ativo' quando a propriedade 'checked' mudar
    setAtivo(props.checked);
  }, [props.checked]);

  function onDeleteTask() {
    props.handleDeleteTask(props.id);
  }

  function onClickCheck() {
    setAtivo(!ativo);
    props.handleClickCheck(props.id);
  }

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskInfo}>
        <button
          className={ativo ? styles.checkCircleAtivo : styles.checkCircleInativo}
          onClick={onClickCheck}
        >
          {/* Renderize o ícone com base no estado local 'ativo' */}
          {ativo ? <CheckCircle size={24} weight="fill" className={styles.checked} /> : <Circle size={24} weight="bold" className={styles.unChecked} />}
        </button>
        <p className={ativo ? styles.taskTitleAtivo : styles.taskTitleInativo}>
          {props.title}
        </p>
      </div>
      <button className={styles.trash} onClick={onDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
