import styles from "./Events.module.css";

export default function Events() {
  return (
    <section className={styles.eventSection}>
      <h2>evenements</h2>
    
      <Cards />
    </section>
  );
}

function Cards() {
  return (
    <div className={styles.cardsContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src="./img1.jpg" className={styles.image} alt="card image"/>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>Event title</h3>
        <p className={styles.cardText}>
          this is a little introduction about the event. this is a class for
          beginner section.
        </p>
      </div>
      <div className={styles.cardFooter}>
        <button className={styles.cta}>Reserver</button>
        <span className={styles.price}>150$</span>
      </div>
    </div>
  );
}
