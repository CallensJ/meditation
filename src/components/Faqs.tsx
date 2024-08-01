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
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
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
