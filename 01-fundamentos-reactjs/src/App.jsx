import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author='Matheus Florêncio' content='Esse é o Post do Matheus' />
          <Post author='Diego Fernandes' content='Esse é o Post do Diego' />
        </main>
      </div>
    </>
  );
}
