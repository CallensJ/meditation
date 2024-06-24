import styles from "./Homepage.module.css";
import Me from "../components/Me";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

import Footer from "../components/Footer";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import Introduction from "../components/Introduction";



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

      <Introduction />
      <Gallery />
      <Banner />
      <Me />
      <Team />
      
      <Footer />
    </main>
  );
}

export default HomePage;