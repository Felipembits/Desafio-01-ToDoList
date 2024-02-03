import styles from './NoTasksHere.module.css'
import { ClipboardText } from 'phosphor-react'

export function NoTasksHere() {
    return(
        <div className={styles.noTasksContainer}>
            <ClipboardText size={56} className={styles.clipboard}/>
            <div className={styles.noTasksText}>
                
                <strong>Você ainda não tem tarefas cadastradas.</strong>
                <p>Crie tarefas e organize seus itens a fazer.</p>
            </div>
        </div>
    )
}