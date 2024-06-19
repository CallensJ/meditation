import styles from "./Homepage.module.css";
import Me from "../components/Me";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

import Footer from "../components/Footer";
import Team from "../components/Team";
import Gallery from "../components/Gallery";



const HomePage: React.FC = () => {
  return (
    <main className={styles.homepage}>
      <section className={styles.hero}>
        <Navbar />
        <div className={styles.titlesContainer}>
          <h1>Harmonya</h1>
          <h3 className={styles.title3}>Meditation et guérison par les sons</h3>
        </div>
      </section>

      <section className={styles.introduction}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Harmonya</h2>
          <p>
            La méditation et la guérison par les sons sont des pratiques
            ancestrales qui exploitent le pouvoir du son et de la pleine
            conscience pour promouvoir le bien-être mental, émotionnel et
            physique.
          </p>
          <p>
            La méditation implique de concentrer l'esprit et de cultiver un état
            de conscience détendue, souvent à travers des techniques telles que
            la respiration profonde, la visualisation et la répétition de
            mantras. La guérison par les sons, quant à elle, utilise les
            vibrations d'instruments comme les bols chantants, les gongs et les
            diapasons pour résonner avec les champs énergétiques du corps,
            facilitant un état de relaxation profonde et de guérison.
          </p>
          <p>
            {" "}
            Ensemble, ces pratiques peuvent aider à réduire le stress, améliorer
            la clarté mentale et favoriser un sentiment de paix intérieure, en
            faisant des outils puissants pour le bien-être holistique.
          </p>
        </div>
      </section>
      <Gallery />
      <Banner />
      <Me />
      <Team />
      
      <Footer />
    </main>
  );
}

export default HomePage;