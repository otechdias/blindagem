"use client";

import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "gsap";

export default function SmallSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.requestFullscreen?.();
      video.style.objectFit = "contain";
      video.play();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement !== videoRef.current && videoRef.current) {
        videoRef.current.pause();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reinicia o vídeo para o início
    }
  };

  useEffect(() => {
    // Registrar o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animação do título principal
    gsap.from(`.${styles.content} h3`, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `.${styles.content} h3`,
        start: "top 80%", // Inicia quando 80% do elemento entra no viewport
      },
    });

    // Animação do vídeo principal
    gsap.from(`.${styles.videoContainer}`, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `.${styles.videoContainer}`,
        start: "top 80%",
      },
    });

    // Animação das seções de vídeo
    gsap.from(`.${styles.videoSection} h3`, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `.${styles.videoSection} h3`,
        start: "top 80%",
      },
    });

    gsap.from(`.${styles.videoGrid} .${styles.videoItem}`, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2, // Animação sequencial para cada item
      scrollTrigger: {
        trigger: `.${styles.videoGrid}`,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>
          Assista ao vídeo e entenda como a KingBlindagens pode proteger seu
          celular com eficiência!
        </h3>
        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <video
              ref={videoRef}
              className={styles.videoPlayer}
              controls
              preload="metadata"
            >
              <source src="/blindagemVideo.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <img
              src="/play.svg"
              alt="Play"
              className={styles.playButton}
              onClick={handlePlay}
            />
          </div>
        </div>
      </div>

      <div className={styles.videoSection}>
        <h3>Assista aos vídeos para entender mais</h3>
        <div className={styles.videoGrid}>
          <div
            className={styles.videoItem}
            onMouseEnter={() => handleMouseEnter(videoRef1)}
            onMouseLeave={() => handleMouseLeave(videoRef1)}
          >
            <div className={styles.videoWrapper}>
              <video
                ref={videoRef1}
                className={styles.videoPlayer}
                preload="metadata"
                muted
              >
                <source src="/watch.MOV" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <div className={styles.overlay}>
                <h4>Blindagem</h4>
                <p>
                  agora o aparelho <br />
                  está 15x mais <br />
                  resistente contra <br />
                  quedas e arranhões
                </p>
              </div>
            </div>
          </div>
          <div
            className={styles.videoItem}
            onMouseEnter={() => handleMouseEnter(videoRef2)}
            onMouseLeave={() => handleMouseLeave(videoRef2)}
          >
            <div className={styles.videoWrapper}>
              <video
                ref={videoRef2}
                className={styles.videoPlayer}
                preload="metadata"
                muted
              >
                <source src="/hammer.MOV" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <div className={styles.overlay}>
                <h4>Blindagem</h4>
                <p>
                  agora o aparelho <br />
                  está 15x mais <br />
                  resistente contra <br />
                  quedas e arranhões
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.videoGrid}>
          <div
            className={styles.videoItem}
            onMouseEnter={() => handleMouseEnter(videoRef3)}
            onMouseLeave={() => handleMouseLeave(videoRef3)}
          >
            <div className={styles.videoWrapper}>
              <video
                ref={videoRef3}
                className={styles.videoPlayer}
                preload="metadata"
                muted
              >
                <source src="/drop.MOV" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <div className={styles.overlay}>
                <h4>Blindagem</h4>
                <p>
                  agora o aparelho <br />
                  está 15x mais <br />
                  resistente contra <br />
                  quedas e arranhões
                </p>
              </div>
            </div>
          </div>
          <div
            className={styles.videoItem}
            onMouseEnter={() => handleMouseEnter(videoRef4)}
            onMouseLeave={() => handleMouseLeave(videoRef4)}
          >
            <div className={styles.videoWrapper}>
              <video
                ref={videoRef4}
                className={styles.videoPlayer}
                preload="metadata"
                muted
              >
                <source src="/pen.MOV" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <div className={styles.overlay}>
                <h4>Blindagem</h4>
                <p>
                  agora o aparelho <br />
                  está 15x mais <br />
                  resistente contra <br />
                  quedas e arranhões
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
