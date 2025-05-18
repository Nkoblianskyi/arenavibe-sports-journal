import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import styles from "./footer.module.scss"
import Image from "next/image"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>
              <div className={styles.footerLogo}>
                <Image src="/logo-icon.png" alt="ArenaVibe Icon" width={24} height={24} />
                <span>ArenaVibe Media</span>
              </div>
            </h3>
            <p className={styles.footerDescription}>
              Revista deportiva líder en España, especializada en fútbol, baloncesto, Fórmula 1, tenis, atletismo y
              culturismo.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Enlaces Rápidos</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/revistas">Nuestras Revistas</Link>
              </li>
              <li>
                <Link href="/historia">Nuestra Historia</Link>
              </li>
              <li>
                <Link href="/logros">Logros</Link>
              </li>
              <li>
                <Link href="/entrevista-fundador">
                  Entrevista
                </Link>
              </li>
              <li>
                <Link href="/sobre-nostros">
                  Sobre Nostros
                </Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Legal</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/politica-privacidad">Política de Privacidad</Link>
              </li>
              <li>
                <Link href="/politica-cookies">Política de Cookies</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contacto</h3>
            <ul className={styles.contactInfo}>
              <li>
                <Mail size={16} />
                <a href="mailto:info@arenavibemedia.com">info@arenavibemedia.com</a>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:+34681315927">+34 681 315 927</a>
              </li>
              <li>
                <MapPin size={16} />
                <address>Calle Mayor, 6, 41001 Sevilla, España</address>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} ArenaVibe Media. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
