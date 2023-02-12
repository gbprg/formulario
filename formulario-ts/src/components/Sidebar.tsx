import { PencilSimpleLine } from "phosphor-react"
import Avatar from "./Avatar"

import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />
      <div className={styles.profile}>
        <Avatar noBorder={true} src="https://github.com/gbprg.png"/>
        <strong>Gabriel Duarte</strong>
        <span>Web Developer</span>
      </div>
      <div className={styles.footer}>
        <a href="#" type="button">
          <PencilSimpleLine size={20} />
          Editar seu Perfil
        </a>
      </div>
    </aside>
  )
}