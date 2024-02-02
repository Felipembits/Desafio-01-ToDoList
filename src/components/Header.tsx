import styles from './Header.module.css';
import rocket from '../assets/rocket.svg'


export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Logo de um foguete em forma cartoonesca nas cores azul e púrpura" />
      <h1 className={styles.appName}>todo</h1>
    </header>
  );
}