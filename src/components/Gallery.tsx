import styles from "./Gallery.module.css";
// Define the interface for a data card
interface ImagesInterface {
    id: number;
    front: string;
    back: string;
  }
  
  const images: ImagesInterface[] = [
    {
      id: 1,
      front: "../img1.jpg",
      back: " scéance de Yoga en pleine nature",
    },
    {
      id: 2,
      front: "../img2.jpg",
      back: "Pour voir le monde dans un grain de sable et un paradis dans une fleur sauvage,, tenez l'infini dans la paume de votre main et l'eternité dans une heure",
    },
    {
      id: 3,
      front: "../img3.jpg",
      back: " scéance de médiation dès le matin",
    },
    {
      id: 4,
      front: "../img4.jpg",
      back: " scéance de Yoga en pleine nature",
    },
    {
      id: 5,
      front: "../img5.jpg",
      back: " scéance de Yoga en pleine nature",
    },
    {
      id: 6,
      front: "../img6.jpg",
      back: " scéance de Yoga en pleine nature",
    },
    {
      id: 7,
      front: "../img7.jpg",
      back: " scéance de Yoga en pleine nature",
    },
    {
      id: 8,
      front: "../img8.jpg",
      back: " scéance de Yoga en pleine nature",
    },
    {
      id: 9,
      front: "../img9.jpg",
      back: " scéance de Yoga en pleine nature",
    },
  ];
export default function Gallery() {
  return (
    <section className={styles.gallery}>
    <div className={styles.galleryContainer}>
      {images.map((image) => (
        <GridImage image={image} key={image.id} />
      ))}
    </div>
  </section>
  )
}

// Define the props for the images component
interface ImageProps {
    image: ImagesInterface;
  }
  
  function GridImage({ image }: ImageProps) {
    return (
      <div>
        <img src={image.front} className={styles.image} />
      </div>
    );
  }
  