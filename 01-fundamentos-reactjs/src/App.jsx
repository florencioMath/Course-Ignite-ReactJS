import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          <Post author='Matheus Florêncio' content='Esse é o Post do Matheus' />
          <Post author='Diego Fernandes' content='Esse é o Post do Diego' />
        </main>
      </div>
    </>
  );
}
