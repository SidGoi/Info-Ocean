import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import IO_Button from "../IO_Button/IO_Button";
import styles from "./Hero.module.css";

const Hero = () => {
  const titleRef = useRef();
  const secondRef = useRef();
  const subtitleRef = useRef();
  const buttonRef = useRef();
  const glowRef = useRef();
  const waveRef = useRef();
  const audioRef = useRef();

  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.9 },
    });

    tl.from(titleRef.current.children, {
      y: 100,
      opacity: 0,
      stagger: 0.15,
    })
      .from(secondRef.current, { y: 80, opacity: 0 }, "-=0.7")
      .from(subtitleRef.current, { y: 50, opacity: 0 }, "-=0.6")
      .from(buttonRef.current, { scale: 0.8, opacity: 0 }, "-=0.5");

    gsap.to(glowRef.current, {
      scale: 1.09,
      rotation: 15,
      yoyo: true,
      repeat: -1,
      duration: 6,
      ease: "sine.inOut",
    });

    gsap.to(waveRef.current, {
      scale: 1.09,
      rotation: 20,
      x: 10,
      y: 10,
      yoyo: true,
      repeat: -1,
      duration: 6,
      ease: "sine.inOut",
    });
  }, []);

  const playAudio = () => {
    if (audioRef.current && !audioStarted) {
      audioRef.current.volume = 0.1;
      audioRef.current.loop = true;
      audioRef.current.play();
      setAudioStarted(true);
    }
  };

  return (
    <div className={styles.hero} onClick={playAudio}>
      <audio ref={audioRef} src="/sounds/ocean-waves.mp3" />

      <div className={styles.title}>
        <div className={styles.first} ref={titleRef}>
          <span>Ride</span>
          <span>the</span>
          <span>Wave</span>
          <span>of</span>
        </div>

        <div className={styles.second} ref={secondRef}>
          Innovation!
        </div>
      </div>

      <p className={styles.subtitle} ref={subtitleRef}>
        <span>We turn complex challenges into smooth-sailing solutions</span>
        <span>with creativity, code, and commitment.</span>
      </p>

      <div className={styles.btn} ref={buttonRef}>
        <IO_Button title="Explore Services" />
      </div>

      <div className={styles.circleglow} ref={glowRef}></div>
      <Image
        ref={waveRef}
        src="/assets/Infinity_Shape_New.png"
        width={800}
        height={800}
        className={styles.waveblur}
        alt="Wave Shape"
      />
    </div>
  );
};

export default Hero;
