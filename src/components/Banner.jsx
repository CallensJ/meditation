const dataCards = [
  {
    id: 1,
    title: "Massage",
    icon: "../facial-massage.png",
    description:
      "Massages innovants et naturels avec la promesse d'une expérience unique de bien être qui feront revivre votre esprit",
  },
  {
    id: 2,
    title: "Rituels",
    icon: "../spa.png",
    description:
      "Echappez vous dans l'un de nos salons et expérimentez un pur moment de sérénité et sentez vous revitalisé.",
  },
  {
    id: 3,
    title: "Guérison",
    icon: "../sound.png",
    description:
      "Suivez nos thérapies, laissez vous guider, ressentez, appréciez et guérissez grâce au pouvoir sonore des bols tibétains ",
  },
  {
    id: 4,
    title: "Yoga",
    icon: "../yoga.png",
    description:
      "Suivez nos séances de yoga. Plongez dans une relaxation complète ou votre corps et votre esprit entrent en harmonie ",
  },
];

import styles from "./Banner.module.css";
export default function Banner() {
  return (
    <div className={styles.banner}>
      <Cards />
    </div>
  );
}

function Cards() {
  return (
    <div className={styles.cards}>
      {dataCards.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
}

function Card({ data }) {
  return (
    <div className={styles.card}>
      <div>
        <img src={data.icon} alt={data.title} className={styles.icon} />
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
      </div>
    </div>
  );
}
