import logo from '../../../public/imgs/logo.png'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.containerBg}>
      <div className={styles.container}>
        <img src={logo} />
        <ul>
          <li>floricultura@gmail.com</li>
          <li>+55 (99) 99192-9394</li>
          <li>Rua Flores Campos, Fortaleza - CE</li>
        </ul>
      </div>
    </footer>
  )
}