import { CiLocationOn } from "react-icons/ci";
import styles from "./Footer.module.css";


export default function Footer() {
  return (
    <footer>
      <div className={styles.bloc}>
        <div className={styles.bloc1}>
        <CiLocationOn />
          <span>
          
            +33466853815</span>
          <span>contact@harmonya.com</span>
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
          <span>5 rue des oasis, 48000 Lozère</span>
          <span>8h00 - 20h00 </span>
        </div>
      </div>
    </footer>
  );
}
