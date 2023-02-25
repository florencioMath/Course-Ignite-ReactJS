import { Post } from './Post';

export function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Matheus here!</p>
      <Post author='Matheus Florêncio' content='Esse é o Post do Matheus' />
      <Post author='Diego Fernandes' content='Esse é o Post do Diego' />
    </>
  );
}
