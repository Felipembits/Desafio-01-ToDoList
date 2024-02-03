import { useState } from 'react'
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskBoard } from "./components/TaskBoard";

function App() {

  
  const [tarefas, setTarefas] = useState([
    { title: "Teste de task" },
    { title: "123123123" },
  ]);

  return (
    <>
      <Header />
      <section className='appBody'>
        <div className="appContainer">
          <NewTask/>
          <TaskBoard tarefas={tarefas} />
        </div>
      </section>
    </>
  );
}

export default App;
