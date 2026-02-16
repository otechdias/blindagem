"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.scss";

export default function Section2() {
  useEffect(() => {
    const tl = gsap.timeline();

    // Animação para o lado esquerdo (telefone deslizando de baixo para cima)
    tl.from(`.${styles.phone3}`, {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animação para o meio (telefone com zoom-in)
    tl.from(
      `.${styles.middle} img`,
      {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5" // Sobreposição de 0.5 segundos
    );

    // Animação para o lado direito (texto deslizando da direita)
    tl.from(
      `.${styles.rightside}`,
      {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <img src="/ipad3.svg" alt="" className={styles.phone3} />
        </div>
        <div className={styles.middle}>
          <img src="/watch.svg" alt="" />
        </div>
        <div className={styles.rightside}>
          <h2>Proteja também seu tablet e smartwatch</h2>
          <h5>
            Utilizamos o líquido de dióxido de silicio, tornando capaz a
            proteção a todas superfícies de vidro do seus aparelhos eletronicos,
            proporcionando segurança e tranquilidade no seu uso diário dos
            aparelhos.
          </h5>
          <div className={styles.buttons}>
            <button
              onClick={() =>
                window.open("https://wa.me/553193548241", "_blank")
              }
            >
              Agendar agora
            </button>
            <button
              onClick={() =>
                window.open("https://wa.me/553193548241", "_blank")
              }
              className={styles.zero}
            >
              Tirar dúvidas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
