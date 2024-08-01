import { useState } from "react";
import styles from "./Faqs.module.css";

// The FAQItem interface defines the shape of each FAQ item.
interface FAQItem {
  title: string;
  text: string;
}

// The faqs array is typed as FAQItem[], meaning it’s an array of FAQItem objects.
const faqs: FAQItem[] = [
  {
    title: "Qu'est-ce que la méditation et quels sont ses bienfaits ?",
    text: "La méditation est une pratique qui consiste à entraîner l'esprit à se concentrer et à être pleinement présent. Les bienfaits de la méditation incluent la réduction du stress, l'amélioration de la concentration, l'augmentation de la conscience de soi, la promotion de la santé émotionnelle et le développement d'une perspective positive sur la vie.",
  },
  {
    title: "Qu'est-ce que les soins énergétiques et comment fonctionnent-ils ?",
    text: "Les soins énergétiques sont des techniques qui visent à équilibrer l'énergie du corps pour favoriser la guérison et le bien-être. Ils fonctionnent en travaillant sur les champs énergétiques du corps, souvent par le toucher ou en utilisant des techniques de visualisation et de respiration. Des exemples courants incluent le Reiki et le magnétisme.",
  },
  {
    title: "Qu'est-ce qu'un massage bien-être et en quoi est-il différent d'un massage thérapeutique ?",
    text: "Un massage bien-être se concentre sur la relaxation générale, la réduction du stress, et l'amélioration du bien-être général. Un massage thérapeutique, en revanche, cible des zones spécifiques du corps pour traiter des problèmes de santé spécifiques, comme les douleurs musculaires ou les blessures.",
  },
  {
    title: "Quels sont les différents types de méditation que je peux essayer ?",
    text: "Il existe plusieurs types de méditation, y compris la méditation de pleine conscience, la méditation transcendantale, la méditation guidée, la méditation zen, et la méditation vipassana. Chaque type a ses propres techniques et objectifs, alors n'hésitez pas à essayer plusieurs styles pour voir lequel vous convient le mieux.",
  },
  {
    title: "Les soins énergétiques sont-ils sûrs pour tout le monde ?",
    text: "En général, les soins énergétiques sont sûrs pour la plupart des gens. Cependant, il est important de consulter un professionnel qualifié et d'informer votre praticien de toute condition médicale ou de tout traitement en cours. Les soins énergétiques ne doivent pas remplacer les soins médicaux conventionnels, mais peuvent être utilisés en complément.",
  },
];

export default function Faqs() {
  return (
    <section className={styles.faqs}>
      <h2>FAQS</h2>
      <Accordion data={faqs} />
    </section>
  );
}

// The Accordion component's data prop is typed as FAQItem[], ensuring it only accepts arrays of FAQItem objects.
function Accordion({ data }: { data: FAQItem[] }) {
  const [curOpen, setCurOpen] = useState<number | null>(null);
  return (
    <div className={styles.accordion}>
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

interface AccordionItemProps {
  onOpen: (num: number | null) => void;
  curOpen: number | null;
  num: number;
  title: string;
  children: string;
}

function AccordionItem({
  num,
  title,
  curOpen,
  onOpen,
  children,
}: AccordionItemProps) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(num);
  }
  return (
    <div
      className={`${styles.item} ${isOpen ? styles.open : ""}`}
      onClick={handleToggle}
    >
      <p className={styles.title}>{title}</p>
      <p className={styles.icon}>{isOpen ? "-" : "+"}</p>

      {isOpen && <div className={styles.contenBox}>{children}</div>}
    </div>
  );
}
