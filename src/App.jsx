import styles from "./App.module.css";

export const App = () => {
  return (
    <main className={styles.card}>
      <img
        src="/bg-pattern-card.svg"
        alt="Background pattern"
        className={styles.image}
      />
      <div className={styles.content}>
        <img
          src="/image-victor.jpg"
          alt="Victor's profile"
          className={styles.profile}
        />
        <div className={styles.info}>
          <h1 className={styles.name}>Victor Crest</h1>
          <p className={styles.age}>26</p>
        </div>
        <p className={styles.location}>London</p>
        <div className={styles.stats}>
          <div className={styles.category}>
            <h2 className={styles.total}>80K</h2>
            <p className={styles.name}>Followers</p>
          </div>
          <div className={styles.category}>
            <h2 className={styles.total}>803K</h2>
            <p className={styles.name}>Likes</p>
          </div>
          <div className={styles.category}>
            <h2 className={styles.total}>1.4K</h2>
            <p className={styles.name}>Photos</p>
          </div>
        </div>
      </div>
    </main>
  );
};
