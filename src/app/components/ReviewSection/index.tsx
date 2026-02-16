"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function ReviewsSection() {
  useEffect(() => {
    // Registrar o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animação do título principal
    gsap.from(`.${styles.title}`, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `.${styles.title}`,
        start: "top 80%", // Inicia quando 80% do elemento entra no viewport
      },
    });

    // Animação do subtítulo
    gsap.from(`.${styles.subtitle}`, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `.${styles.subtitle}`,
        start: "top 80%",
      },
    });

    // Animação dos cards de avaliação
    gsap.from(`.${styles.reviewCard}`, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2, // Efeito sequencial para cada card
      scrollTrigger: {
        trigger: `.${styles.reviewsGrid}`,
        start: "top 80%",
      },
    });

    // Animação da seção de inovação
    gsap.from(`.${styles.innovationTitle}`, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `.${styles.innovationTitle}`,
        start: "top 80%",
      },
    });

    gsap.from(`.${styles.iconItem}`, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: `.${styles.iconGrid}`,
        start: "top 80%",
      },
    });

    // Animação da seção Explore
    gsap.from(`.${styles.exploreTitle}`, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `.${styles.exploreTitle}`,
        start: "top 80%",
      },
    });

    gsap.from(`.${styles.contactButton}`, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `.${styles.contactButton}`,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className={styles.reviewsSection}>
      {/* Avaliações de clientes */}
      <div className={styles.reviewsContainer}>
        <h2 className={styles.title}>Avaliações de clientes</h2>
        <p className={styles.subtitle}>
          Veja o que nossos clientes dizem sobre nós. É realmente importante
          para nós! Seja positivo ou negativo, suas avaliações ajudam para
          tornar a KingBlindagens ainda melhor.
        </p>
        <div className={styles.reviewsGrid}>
          {["review1", "review2", "review3", "review4"].map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <p>
                Estou muito satisfeito com a blindagem do meu celular! Material
                de qualidade, recomendo muito.
              </p>
              <div className={styles.reviewAuthor}>
                <Image src="/girl.svg" alt="Usuário" width={40} height={40} />
                <span>@username</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de inovação */}
      <div className={styles.innovationSection}>
        <div className={styles.innovationTitle}>
          <h2>
            Acreditamos em <br />
            inovação <img src="/heart.svg" alt="" />
          </h2>
          <p>
            Nossa equipe da KingBlindagens está pronta para ajudar você a
            encontrar a melhor proteção para o seu celular.
          </p>
        </div>
        <div className={styles.iconGrid}>
          {[
            { src: "/hand.svg", label: "Seja Sincero" },
            { src: "/hands.svg", label: "Mais Fortes Juntos" },
            { src: "/check.svg", label: "Simples e direto" },
            { src: "/bulb.svg", label: "Assuma riscos inteligentes" },
          ].map((icon, index) => (
            <div key={index} className={styles.iconItem}>
              <Image src={icon.src} alt={icon.label} width={50} height={50} />
              <span>{icon.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Explore nossos produtos */}
      {/* <div className={styles.exploreSection}>
        <div className={styles.exploreTitle}>
          <h2>
            Explore nossos produtos <img src="/arrow.svg" alt="" />
          </h2>
          <p className={styles.exploreText}>
            Transformamos sua visão em uma presença marcante, ajudando sua marca
            a se destacar com autenticidade e impacto.
          </p>
          <button
            className={styles.contactButton}
            onClick={() => window.open("https://wa.me/553193548241", "_blank")}
          >
            Entre em Contato <img src="/diagonal.svg" alt="" />
          </button>
        </div>
      </div> */}
    </section>
  );
}
