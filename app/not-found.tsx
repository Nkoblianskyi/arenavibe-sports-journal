import Link from "next/link"
import Image from "next/image"
import styles from "./not-found.module.scss"

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <div className="container">
        <div className={styles.notFoundContent}>
          <div className={styles.notFoundImage}>
            <Image
              src="/placeholder.png?height=300&width=300&query=404 sports magazine error"
              alt="Página no encontrada"
              width={300}
              height={300}
              priority
            />
          </div>
          <h1 className={styles.notFoundTitle}>404</h1>
          <h2 className={styles.notFoundSubtitle}>Página no encontrada</h2>
          <p className={styles.notFoundText}>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
          <div className={styles.notFoundActions}>
            <Link href="/" className="btn btn-primary">
              Volver al inicio
            </Link>
            <Link href="/revistas" className="btn btn-outline">
              Ver revistas
            </Link>
          </div>
          <div className={styles.notFoundSuggestions}>
            <h3>Quizás te interese:</h3>
            <ul>
              <li>
                <Link href="/revistas">Nuestras Revistas</Link>
              </li>
              <li>
                <Link href="/historia">Nuestra Historia</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
