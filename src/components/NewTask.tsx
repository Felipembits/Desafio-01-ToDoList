import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface NewTaskProps {
  onCreateNewTask: (newTask: any) => void;
}

export function NewTask({onCreateNewTask} : NewTaskProps) {

  const [newTaskText, setNewTaskText] = useState("")

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: newTaskText,
      checked: false,
    }
    onCreateNewTask(newTask)
  }  

  function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }
  return (
    <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        className={styles.newTaskInput}
        placeholder="Adicionar uma nova tarefa"
        onChange={handleNewTaskText}
      />
      <button className={styles.newTaskBtn}>
        Criar <PlusCircle size={16}/>
      </button>
    </form>
  );
}
