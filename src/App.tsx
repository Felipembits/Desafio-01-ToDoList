import { useState } from 'react'
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskBoard } from "./components/TaskBoard";

function App() {
  
  const [tarefas, setTarefas] = useState([
    { title:"Teste de task"},
    { title:"teste"},
  ]);

  function handleCreateNewTask(newTask: any) {
    setTarefas([...tarefas, newTask])
    console.log(tarefas)
  }

  return (
    <>
      <Header />
      <section className='appBody'>
        <div className="appContainer">
          <NewTask onCreateNewTask={handleCreateNewTask}/>
          <TaskBoard tarefas={tarefas} />
        </div>
      </section>
    </>
  );
}

export default App;
