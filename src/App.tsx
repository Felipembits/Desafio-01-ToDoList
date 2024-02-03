import { useState } from 'react'
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskBoard } from "./components/TaskBoard";
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [tarefas, setTarefas] = useState([
    { id: uuidv4(), title: "Teste de task", checked: false},
  ]);

  function handleCreateNewTask(newTask: any) {
    setTarefas([...tarefas, newTask])
    console.log(tarefas)
  }

  function handleDeleteTask(id: string) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return (
    <>
      <Header />
      <section className='appBody'>
        <div className="appContainer">
          <NewTask onCreateNewTask={handleCreateNewTask}/>
          <TaskBoard tarefas={tarefas} handleDeleteTask={handleDeleteTask}/>
        </div>
      </section>
    </>
  );
}

export default App;
