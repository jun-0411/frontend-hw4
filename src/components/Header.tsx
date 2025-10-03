import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>천개의 레시피</h1>
    </header>
  );
}

export default Header;