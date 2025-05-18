import Link from "next/link"
import Image from "next/image"
import { getJournals } from "@/services/journal-service"
import styles from "./page.module.scss"

export default function JournalsPage() {
  const journals = getJournals()

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Nuestras Revistas</h1>
        <p className={styles.description}>Descubre nuestra colección de revistas deportivas especializadas</p>

        <div className={styles.grid}>
          {journals.map((journal) => (
            <Link href={`/revistas/${journal.slug}`} key={journal.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={journal.coverImage || "/placeholder.svg"}
                  alt={journal.title}
                  width={240}
                  height={320}
                  className={styles.cover}
                />
              </div>
              <div className={styles.content}>
                <h2>{journal.title}</h2>
                <p>{journal.description}</p>
                <div className={styles.meta}>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
