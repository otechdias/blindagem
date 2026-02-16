"use client";

import React from "react";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.left}>
          <div className={styles.info}>
            <h2 className={styles.title}>Horário de Atendimento</h2>
            <p className={styles.text}>Segunda a Sábado de 8h as 21h</p>
            <p className={styles.text}>Em Belo horizonte e região</p>
          </div>
          <img
            src="/logoW.svg"
            alt="King Blindagem"
            className={styles.logoImage}
          />
        </div>
        <div className={styles.contact}>
          <button
            className={styles.button}
            onClick={() => window.open("https://wa.me/553193548241", "_blank")}
          >
            Contato
          </button>
          <div className={styles.details}>
            <h3 className={styles.contactTitle}>Contato</h3>
            <p className={styles.contactItem}>
              <img src="/phone.svg" alt="" />
              <a href="tel:+554132391794">(31) 9354-8241</a>
            </p>
            <p className={styles.contactItem}>
              <img src="/whats.svg" alt="" />
              <a href="https://wa.me/553193548241">(31) 9354-8241</a>
            </p>
            <p className={styles.contactItem}>
              <img src="/mail.svg" alt="" />
              <a href="mailto:contato@kingBlindagem.com.br">
                contato@kingBlindagem.com.br
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
