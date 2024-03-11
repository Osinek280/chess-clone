import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCrown } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
      <div className={styles.side}>
        <p>Your Deatails:</p>
        <div className={styles.form}>
          <input className={styles["user-box"]} placeholder="Username"/>
          <div className={styles["copy-box"]}>
            <p className={styles["user-box"]}>
              Your Party Code: sfgfdj
            </p>
            <span className={styles["icon-con"]}>
              <FontAwesomeIcon icon={faCopy} />
            </span>
          </div>
          <div className={styles["copy-box"]}>
            <p className={styles["user-box"]}>
              Enter Party Code: 
              <input className={styles["code-input"]} />
            </p>
          </div>
          <button className={styles["submit-btn"]}>Join To Party</button>
        </div>
      </div>
      <div className={styles.side}>
        <p>Your Party:</p>
        <div className={styles["party-container"]}>
          <span className={styles["party-player"]}>
            Osinek
            <FontAwesomeIcon icon={faCrown} className={styles["crown-icon"]}/>
          </span>
          <span className={styles["party-player"]}>
            ShadowStriker
          </span>
          <span className={styles["party-player"]}>
            BlazeBlitzer
          </span>
          <span className={styles["party-player"]}>
            ThunderSonic
          </span>
          <span className={styles["party-player"]}>
            FrostFury
          </span>
        </div>
        <button className={styles["submit-btn"]}>start</button>
      </div>
    </>
  );
}
