import { NoTasksHere } from './NoTasksHere'
import styles from './TaskBoard.module.css'

export function TaskBoard() {
    return (
        <section className={styles.taskBoardArea}>
            <header className={styles.taskBoardHeader}>
                <div className={styles.counterTitle}>
                    <h2 className={styles.createdTasks}>Tarefas criadas</h2>
                    <span className={styles.counterBall}><p>0</p></span>
                </div>
                <div className={styles.counterTitle}>
                    <h2 className={styles.concludedTasks}>Concluídas</h2>
                    <span className={styles.counterBall}><p>0</p></span>
                </div>
            </header>
            <div className={styles.taskBoardBlock}>
                <NoTasksHere/>
            </div>
        </section>
    )
}