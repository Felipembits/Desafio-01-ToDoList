// import { useState } from 'react'
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskBoard } from "./components/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <section className='appBody'>
        <div className="appContainer">
          <NewTask />
          <TaskBoard />
        </div>
      </section>
    </>
  );
}

export default App;
