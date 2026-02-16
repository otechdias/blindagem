"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface AccordionItem {
  question: string;
  answer: string;
}

const accordionData: AccordionItem[] = [
  {
    question: "O que é a blindagem?",
    answer:
      "É um procedimento que utiliza-se liquido de dióxido de silício, que visa aumentar a resistência da sua tela em até 15x, contra arranhões e quedas.",
  },
  {
    question: "Altera a garantia?",
    answer:
      "Não, a blindagem é feita sobre as partes de vidro, não alteramos a originalidade do seu aparelho, então sua garantia permanece normal",
  },
  {
    question: "É possível remover?",
    answer:
      "Sim, de forma simples e descomplicada é totalmente possivel remover futuramente caso queira.",
  },
  {
    question: "Altera a sensibilidade?",
    answer:
      "Não, o procedimento é feito de forma superficial, fortificando o vidro, não perde a sensibilidade.",
  },
  {
    question: "Altera a qualidade da camera?",
    answer: "Não, sua câmera fica com qualidade normal.",
  },
  {
    question: "Pode usar capa?",
    answer: "Sim, caso queira pode continuar utilizando normalmente.",
  },
  {
    question: "Pode usar película?",
    answer:
      "Sim, caso você queira pode usar, não tem nada que atrapalhe ou fique exagerado.",
  },
  {
    question: "É preciso usar capa e película ainda?",
    answer:
      "Se você quiser, sim pode utilizar normalmente, mas caso não goste de ambas opções, pode utilizar somente a blindagem como proteção única, pois é muito resistente contra quedas e arranhões, proporcionando segurança e tranquilidade no dia a dia",
  },
  {
    question: "Quanto tempo dura a blindagem?",
    answer:
      "Não tem um tempo específico, varia do perfil de cliente, a blindagem sai com os desgastes do dia a dia, como quedas e atritos com superficies. Recomendamos a todos clientes que façam novamente depois de 1 ano.",
  },
  {
    question: "Para que serve a blindagem?",
    answer:
      "Para proporcionar mais segurança e tranquilidade no seu dia a dia com o uso do aparelho. É um procedimento que aumenta a resistência da sua tela em até 15x, contra arranhões e quedas.",
  },
  {
    question: "O que é possível blindar?",
    answer: "Celulares, tablets e smartwatches.",
  },
  {
    question: "É possivel fazer em tela trincada?",
    answer: "Não é possível, somente após a troca.",
  },
  {
    question: "Quanto tempo demora pra fazer?",
    answer:
      "É um processo rápido, após 45 minutos o aparelho está pronto para uso",
  },
  {
    question: "Tem loja física?",
    answer:
      "Trabalhamos somente com atendimento a domicílio, proporcionando total comodidade ao cliente.",
  },
];

const NewQuestions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Perguntas Frequentes!</h2>
        </div>
        <div className={styles.accordion}>
          {accordionData.map((item, index) => (
            <div
              className={`${styles.accordionItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              key={index}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => handleToggle(index)}
              >
                <h3>{item.question}</h3>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight:
                    activeIndex === index
                      ? isMobile
                        ? "470px"
                        : "135px"
                      : "0",
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewQuestions;
