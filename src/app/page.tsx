import Link from 'next/link';
import styles from './page.module.css'; // Make sure to create this CSS module

const Home = () => {
  return (
    <div className={styles.container}>
      
      <header className={styles.header}>
        <h1>Welcome to My Portfolio</h1>
        <p>I am a passionate developer creating web applications.</p>
      </header>
      

      <section className={styles.projects}>
        <h2 className='text-black'>My Projects</h2>
        <ul>
          <li>
            <Link href="https://staticresumebuilderbysharjeel.vercel.app/" className='text-orange-600'>Project 1</Link>
          </li>
          <li>
            <Link href="https://dynamicresumebuilderbysharjeel.vercel.app/" className='text-blue-600'>Project 2</Link>
          </li>
          <li>
            <Link href="https://projectbysharjeelahmed.vercel.app/" className='text-green-600' >Project 3</Link>
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Sharjeel Ahmed</p>
      </footer>
    </div>
  );
};

export default Home;
