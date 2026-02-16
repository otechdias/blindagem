"use client";

declare global {
  interface Window {
    swiper: SwiperInstance;
  }
}

import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import type { Swiper as SwiperInstance } from "swiper";

export default function Banner() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(`.${styles.leftside}`, {
      x: -200,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    });

    tl.from(
      `.${styles.rightside}`,
      {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "<"
    );
  }, []);

  const handleVideoEnd = (swiper: SwiperInstance) => {
    if (swiper.isEnd) {
      swiper.slideTo(0); // Volta para o primeiro slide
    } else {
      swiper.slideNext(); // Vai para o próximo slide
    }
  };

  const handleSlideChange = (swiper: SwiperInstance) => {
    const videos = document.querySelectorAll<HTMLVideoElement>(
      `.${styles.swiper} video`
    );

    videos.forEach((video, index) => {
      if (index === swiper.activeIndex) {
        video.currentTime = 0; // Reinicia o vídeo atual
        video.play(); // Reproduz o vídeo atual
      } else {
        video.pause(); // Pausa os vídeos dos slides inativos
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <h1>
            A melhor proteção para o seu celular, aumente em 15x a resistência
            da sua tela
          </h1>
          <h5>
            A melhor proteção para o seu celular, aumente em 15x a resistência
            da sua tela
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
          <div className={styles.people}>
            <img src="/people.svg" alt="Pessoas" />
            <p>400 clientes satisfeitos</p>
          </div>
        </div>

        <div className={styles.rightside}>
          <div className={styles.swiper}>
            <Swiper
              slidesPerView={1}
              onSwiper={(swiper) => (window.swiper = swiper)}
              onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
              <SwiperSlide>
                <video
                  src="/coke.MOV"
                  autoPlay
                  muted
                  loop={false}
                  playsInline
                  onEnded={() => handleVideoEnd(window.swiper)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <video
                  src="/hammer.MOV"
                  autoPlay
                  muted
                  loop={false}
                  playsInline
                  onEnded={() => handleVideoEnd(window.swiper)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <video
                  src="/watch.MOV"
                  autoPlay
                  muted
                  loop={false}
                  playsInline
                  onEnded={() => handleVideoEnd(window.swiper)}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.bottom}>
            <h3>
              Testes incríveis <br />
              de resistência
            </h3>
            <hr />
            <h4>
              Este são alguns dos diversos testes que nosso produto foi
              submetido para provar sua resistência diaria
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
