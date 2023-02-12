import styles from "./Header.module.css"

import minhaimg from "../img/App-logo.jpeg"

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={minhaimg} alt="minha foto" />
        <span style={{
          paddingTop: "2px"
          }}>
          Meu App
        </span>
      </div>
    </div>
  )
}