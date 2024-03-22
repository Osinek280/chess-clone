import styles from "./mainSelector.module.css"
import Link from "next/link";

export default function MainSelector() {
  return(
    <>
      <div className={styles["info-box"]}>
        <p>Play Chess <br /> online with friends</p>
        <div className={styles["btn-container"]}>
            <Link 
              href={'?create-online-game=true'}
              className={`${styles.btn} ${styles.online}`}
              >
              <div className={styles.icon}></div>
              <div className={styles["btn-description"]}>
                <p className={styles["btn-title"]}>Play with Friends</p>
                <p className={styles["btn-subtitle"]}>invite a friend to play together</p>
              </div>
            </Link>
            <Link
              href={'?create-computer-game=true'}
              className={`${styles.btn} ${styles.computer}`}
              >
              <div className={styles.icon}></div>
              <div className={styles["btn-description"]}>
                <p className={styles["btn-title"]}>Play with Computer</p>
                <p className={styles["btn-subtitle"]}>Play vs customizable trening bots</p>
              </div>
            </Link>
            <Link
              href={'?create-stationary-game=true'}
              className={`${styles.btn} ${styles.stationary}`}
              >
              <div className={styles.icon}></div>
              <div className={styles["btn-description"]}>
                <p className={styles["btn-title"]}>Play Stationary</p>
                <p className={styles["btn-subtitle"]}>Play vs customizable trening bots</p>
              </div>
            </Link>
          </div>
        </div>
    </>
  )
}