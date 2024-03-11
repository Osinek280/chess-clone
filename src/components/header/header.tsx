import styles from "./header.module.css"

export default function Header () {
  return(
    <header className={styles.header}>
      <span className={styles.logo}>Ticket To Ride</span>
      
    </header>
  )
}