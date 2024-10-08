import { CiClock1, CiLocationOn, CiMail } from "react-icons/ci";
import styles from "./Footer.module.css";
import { FaRegAddressBook } from "react-icons/fa";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 0o6;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      <div className={styles.bloc}>
        <div className={styles.bloc1}>
          <div>
            <CiLocationOn className={styles.icon} />
            <span>+33466853815</span>
          </div>
          <div>
            <CiMail className={styles.icon} />
            <span>contact@harmonya.com</span>
          </div>
        </div>
      </div>
      <div className={styles.bloc}>
        <div className={styles.bloc2}>
          <h2>Harmonya</h2>
          <span>Copyright 2024</span>
        </div>
      </div>
      <div className={styles.bloc}>
        <div className={styles.bloc3}>
          <div>
            <FaRegAddressBook className={styles.icon} />
            <span>5 rue des oasis, 48000 Lozère</span>
          </div>
          <div>
            <CiClock1 className={styles.icon} />
            {isOpen ? (
              <span>nous sommes ouvert</span>
            ) : (
              <span>
                Nous sommes actuellement ferme. venez entre {openHour}h00 et{" "}
                {closeHour}h00
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
