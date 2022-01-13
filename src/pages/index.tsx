import type { NextPage } from 'next'
import styles from 'styles/top.module.css'

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <p className={styles.color}>Financial Planner App</p>
      </h1>
      <div className={styles.grid}>
        <a
          href="https://yuzuki-aritomo.github.io/ReserveTaskBackend/dist/index.html"
          className={styles.card}
        >
          <h2>Api reference &rarr;</h2>
          <p>Github Source code</p>
        </a>

        <a
          href="https://github.com/yuzuki-aritomo/ReserveTaskFrontend"
          className={styles.card}
        >
          <h2>Front end  &rarr;</h2>
          <p>Github Source code</p>
        </a>

        <a
          href="https://github.com/yuzuki-aritomo/ReserveTaskBackend"
          className={styles.card}
        >
          <h2>Back end &rarr;</h2>
          <p>Github Source code</p>
        </a>
      </div>
    </main>
  )
}

export default Home
