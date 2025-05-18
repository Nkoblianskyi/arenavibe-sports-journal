import Image from "next/image"
import Link from "next/link"
import styles from "./owner-interview.module.scss"
import ownerData from "@/data/owner-interview.json"

export default function OwnerInterview() {
  return (
    <section className={styles.interviewSection}>
      <div className="container">
        <h2 className="section-title">Entrevista con el Fundador</h2>

        <div className={styles.interviewCard}>

          <div className={styles.interviewContent}>
            <div className={styles.interviewHeader}>
              <h3 className={styles.ownerName}>{ownerData.name}</h3>
              <p className={styles.ownerPosition}>{ownerData.position}</p>
            </div>

            <p className={styles.ownerBio}>{ownerData.shortBio}</p>

            <blockquote className={styles.interviewExcerpt}>
              <p>"{ownerData.excerpt}"</p>
            </blockquote>

            <Link href="/entrevista-fundador" className={styles.readMoreLink}>
              Leer entrevista completa
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
