// Navbar.js
"use client"; // Required for GSAP in Next.js app

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import IO_Button from "../IO_Button/IO_Button";
import styles from "./Navbar.module.css"; // Ensure this path is correct

const Navbar = () => {
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
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

        <div className={styles.navRight}>
          <ul className={styles.navlinks}>
            {["Home", "About", "Services"].map((item, index) => (
              <li key={item}>
                <Link
                  href={"/"}
                  ref={(el) => (linksRef.current[index] = el)}
                  className={`${styles.navlink} ${
                    item === "Home" ? styles.active : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div ref={buttonRef} className={styles.desktopButton}>
            <IO_Button title="Let's Talk" />
          </div>
        </div>

        <div
          className={styles.hamburger}
          ref={hamburgerRef}
          onClick={toggleMenu}
        >
          <div className={`${styles.bar} ${isOpen ? styles.bar1 : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.bar2 : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.bar3 : ""}`}></div>
        </div>

        <div
          ref={mobileMenuRef}
          className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}
        >
          <ul className={styles.mobileNavlinks}>
            {["Home", "About", "Services"].map((item) => (
              <li key={item} onClick={toggleMenu}>
                <Link
                  href={"/"}
                  className={`${styles.mobileNavLink} ${
                    item === "Home" ? styles.active : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileButton} onClick={toggleMenu}>
            <IO_Button title="Let's Talk" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
