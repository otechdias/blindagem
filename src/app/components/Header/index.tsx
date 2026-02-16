"use client";

import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="" />
        <h4>Home</h4>
        <button
          onClick={() => window.open("https://wa.me/553193548241", "_blank")}
        >
          Fale Conosco
        </button>
      </div>
    </header>
  );
}
