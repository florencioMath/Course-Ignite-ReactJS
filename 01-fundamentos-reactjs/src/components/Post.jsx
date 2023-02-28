import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='http://github.com/florencioMath.png'
          />
          <div className={styles.authorInfo}>
            <strong>Matheus Florêncio</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title='27 de Fevereiro às 21:38h ' datatime='2023-02-27 21:38:13'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href='#'>jane.design/doctorcare</a>
        </p>

        <p>
          <a href='#'>#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}