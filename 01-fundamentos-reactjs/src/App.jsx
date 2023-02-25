import { Header } from '../components/Header';
import { Post } from './Post';
import './styles.css';

export function App() {
  return (
    <>
      <Header />
      <h1>Hello World</h1>
      <p>Matheus here!</p>
      <Post author='Matheus Florêncio' content='Esse é o Post do Matheus' />
      <Post author='Diego Fernandes' content='Esse é o Post do Diego' />
    </>
  );
}
