import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>L'équipe</h2>
        <div className={styles.bloc}>
          <div className={styles.card}>
            <img src="../naomi.jpeg" alt="nom prenom" className={styles.avatar} />
            <h4>Naomi</h4>
            <p>Soins & Massages</p>
          </div>

          <div className={styles.card}>
            <img src="../sebastien.jpeg" alt="sebastien" className={styles.avatar} />
            <h4>Sebastien</h4>
            <p>Yoga & massages</p>
          </div>
        </div>

        <div className={styles.bloc}>
          <div className={styles.card}>
            <img src="../Laura.png" alt="nom prenom" className={styles.avatar} />
            <h4>Laura</h4>
            <p>Guerison, reiki</p>
          </div>
          <div className={styles.card}>
            <img src="../Jessica.jpg" alt="nom prenom" className={styles.avatar} />
            <h4>Jessica</h4>
            <p>Yoga & bien etre</p>
          </div>
        </div>
      </div>
    </section>
  );
}
