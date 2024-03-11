"use client"
import { useState } from "react";
import styles from "./header.module.css"
import Image from 'next/image'
import { useTheme } from "next-themes";

export default function Header () {
  const { theme, setTheme } = useTheme()
  const [useClientTheme, setUseClientTheme] = useState(true); // Początkowo ustawione na true lub false w zależności od Twoich potrzeb

  const toggleTheme = () => {
    setUseClientTheme(!useClientTheme); // Odwracamy stan przełącznika
    if (useClientTheme) {
      setTheme('light'); // Ustawiamy tryb na świetlny, gdy przełącznik jest włączony
    } else {
      setTheme('dark'); // Ustawiamy tryb na ciemny, gdy przełącznik jest wyłączony
    }
  };

  return(
    <header className={styles.header}>
      <span className={styles.logo}>Ticket To Ride</span>
      <button onClick={toggleTheme} className={styles["toggle-theme-btn"]}>
        <Image
          src={theme === 'light' ? "/sun.svg" : "/moon.svg"} 
          alt="logo" 
          height="30" 
          width="25"
        />
      </button>
    </header>
  )
}
