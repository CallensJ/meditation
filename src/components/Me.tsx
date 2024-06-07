import styles from "./Me.module.css";
import angela from "../../public/angela.jpg";

export default function Me() {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.flex}>
        <img src={angela} alt="" className={styles.avatar} />
        <div className={styles.myintro}>
          <h3 className={styles.welcome}>Bonjour , </h3>

          <h2 className={styles.title}>Moi c'est Cassandra</h2>
          <p className={styles.description}>
            {" "}
            Entrepreneuse passionnée par le bien-être et l'épanouissement
            personnel.
          </p>
          <p className={styles.description}>
            Depuis plusieurs années, je me consacre à la pratique de la
            méditation, du yoga et des soins énergétiques, des disciplines qui
            ont transformé ma vie et que je souhaite partager avec vous.
          </p>
          <p className={styles.description}>
            Mon objectif est de vous accompagner sur le chemin de la sérénité et
            de l'harmonie intérieure, en vous proposant des outils et des
            techniques adaptés à vos besoins spécifiques
          </p>

        </div>
      </div>
    </section>
  );
}
