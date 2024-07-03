import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget; // currentTarget is already typed as HTMLFormElement in this context
    const formData = new FormData(form);

    formData.append("access_key", "c28ec2eb-1144-42be-abcc-83f5a876f00b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <section className={styles.contact}>
      <form onSubmit={onSubmit}>
        <h2>Contactez nous</h2>
        <div className={styles.inputBox}>
          <label>Nom</label>
          <input
            type="text"
            name="name"
            className={styles.field}
            placeholder="votre nom"
            required
          />
        </div>
        <div className={styles.inputBox}>
          <label>Adresse Email</label>
          <input
            type="email"
            name="email"
            className={styles.field}
            placeholder="votre email"
            required
          />
        </div>
        <div className={styles.inputBox}>
          <label>Votre Message</label>
          <textarea
            name="message"
            id=""
            className={`${styles.field} ${styles.mess}`}
            placeholder="votre message"
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
      <span>{result}</span>
    </section>
  );
}
