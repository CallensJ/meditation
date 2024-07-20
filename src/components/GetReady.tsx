import styles from "./GetReady.module.css";

export default function GetReady() {
  return (
    <section className={styles.section}>
      <div className={styles.textBloc}>
        <h2 className={styles.title}>Si vous ètes prêts à ...</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          accusantium magni quae consequuntur in ad, iusto maxime voluptate
          nulla fugiat consequatur neque obcaecati, veritatis optio aliquam.
          Molestiae laborum molestias dolorum. Ipsum totam expedita nulla magnam
          reprehenderit eius necessitatibus aliquid unde rem quas consectetur
          sequi cum fuga voluptatibus dignissimos facilis est quidem voluptate,
          eligendi, assumenda sunt, culpa fugit odio. Nostrum, animi. Nemo unde
          harum aperiam repellendus, explicabo inventore excepturi minima ad
          tempora voluptatibus ratione est vero fuga ullam commodi laudantium
          ipsum culpa magnam voluptate? Fugiat expedita, sapiente est fuga
          corporis atque?
        </p>
      </div>
      <div className={styles.blocsContainer}>
        <div className={styles.bloc}>
          <img src="../spa.png" className={styles.icon} />
          <div>
            <h3 className={styles.title3}>Changez votre style de vie</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi dicta facilis perferendis quo harum facere et inventore
              sint, quidem cum odio, quae dignissimos ipsam voluptatibus rerum
              ab dolorum repellendus?
            </p>
          </div>
          <span className={styles.pricing}>$50</span>
          <button className={styles.cta}>Reserver</button>
        </div>

        <div className={styles.bloc}>
          <img src="../spa.png" className={styles.icon} />
          <div>
            <h3 className={styles.title3}>Changez votre style de vie</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi dicta facilis perferendis quo harum facere et inventore
              sint, quidem cum odio, quae dignissimos ipsam voluptatibus rerum
              ab dolorum repellendus?
            </p>
          </div>
          <span className={styles.pricing}>$50</span>
          <button className={styles.cta}>Reserver</button>
        </div>

        <div className={styles.bloc}>
          <img src="../spa.png" className={styles.icon} />
          <div>
            <h3 className={styles.title3}>Changez votre style de vie</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi dicta facilis perferendis quo harum facere et inventore
              sint, quidem cum odio, quae dignissimos ipsam voluptatibus rerum
              ab dolorum repellendus?
            </p>
          </div>
          <span className={styles.pricing}>$50</span>
          <button className={styles.cta}>Reserver</button>
        </div>
      </div>
    </section>
  );
}
