import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>L'équipe</h2>
        <div className={styles.bloc}>
          <div className={styles.card}>
            <img src="../img5.jpg" alt="nom prenom" className={styles.avatar} />
            <h4>Nom Prenom</h4>
            <p>occupation</p>
          </div>

          <div className={styles.card}>
            <img src="../img5.jpg" alt="nom prenom" className={styles.avatar} />
            <h4>Nom Prenom</h4>
            <p>occupation</p>
          </div>
        </div>

        <div className={styles.bloc}>
          <div className={styles.card}>
            <img src="../img5.jpg" alt="nom prenom" className={styles.avatar} />
            <h4>Nom Prenom</h4>
            <p>occupation</p>
          </div>
          <div className={styles.card}>
            <img src="../img5.jpg" alt="nom prenom" className={styles.avatar} />
            <h4>Nom Prenom</h4>
            <p>occupation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
