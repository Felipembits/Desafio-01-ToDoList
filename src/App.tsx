import { useState } from 'react'
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskBoard } from "./components/TaskBoard";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tarefas, setTarefas] = useState([
    { id: uuidv4(), title: "Teste de task", checked: true},
  ]);

  function handleCreateNewTask(newTask: any) {
    setTarefas([...tarefas, newTask]);
  }

  function handleDeleteTask(id: string) {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  }

  function handleClickCheck(id: string) {
    const updatedTarefas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          checked: !tarefa.checked
        };
      }
      return tarefa;
    });

    updatedTarefas.sort((a, b) => {
      if (a.checked && !b.checked) {
        return 1;
      } else if (!a.checked && b.checked) {
        return -1;
      } else {
        return 0;
      }
    });

    setTarefas(updatedTarefas);
  }

  return (
    <>
      <Header />
      <section className='appBody'>
        <div className="appContainer">
          <NewTask onCreateNewTask={handleCreateNewTask}/>
          <TaskBoard tarefas={tarefas} handleDeleteTask={handleDeleteTask} handleClickCheck={handleClickCheck}/>
        </div>
      </section>
    </>
  );
}

export default App;
