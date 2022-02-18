import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">Motorcycle Mania!</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/manufacturers">Manufacturers</Link>
          </li>
        </ul>
        <Link href="/motorcycles/new.php">+ Add a Bike</Link>
      </nav>
    </header>
  );
};

export default Header;
