"use client"; // Required for GSAP in Next.js app

import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import IO_Button from "../IO_Button/IO_Button";
import { gsap } from "gsap";

const Navbar = () => {
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Logo animation
    gsap.from(logoRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Nav links animation
    gsap.from(linksRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.5,
      ease: "power2.out",
    });

    // Button animation
    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 1.2,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <header>
      <nav className={styles.nav}>
        <div className="nav-left">
          <Link href={"/"}>
            <Image
              ref={logoRef}
              className={styles.infooceanlogo}
              src={"/assets/Info_Ocean_Logo_Without_Tagline.png"}
              alt="InfoOcean Logo"
              width={500}
              height={500}
              priority
            />
          </Link>
        </div>
        <div className={styles.navright}>
          <ul className={styles.navlinks}>
            {["Home", "About", "Services"].map((item, index) => (
              <li key={item}>
                <Link
                  href={"/"}
                  ref={(el) => (linksRef.current[index] = el)}
                  className={`${styles.navlink} ${item === "Home" ? styles.active : ""}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div ref={buttonRef}>
            <IO_Button title="Let's Talk" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
