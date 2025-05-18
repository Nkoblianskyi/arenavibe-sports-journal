import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ownerData from "@/data/owner-interview.json"
import styles from "./page.module.scss"

export const metadata = {
  title: `Entrevista con ${ownerData.name} | ArenaVibe Media`,
  description: `Entrevista en profundidad con ${ownerData.name}, ${ownerData.position}. Conoce la visión y los valores detrás de ArenaVibe Media.`,
}

export default function OwnerInterviewPage() {
  return (
    <main className={styles.interviewPage}>
      <div className="container">
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={20} /> Volver a inicio
        </Link>

        <div className={styles.interviewHeader}>
          <div className={styles.interviewImage}>
            <Image
              src={ownerData.image || "/b27328de19abc31eb23976a488af3e0b.jpg"}
              alt={ownerData.name}
              width={400}
              height={500}
              className={styles.ownerImage}
              priority
            />
          </div>

          <div className={styles.interviewIntro}>
            <h1 className={styles.interviewTitle}>Entrevista con {ownerData.name}</h1>
            <p className={styles.ownerPosition}>{ownerData.position}</p>
            <p className={styles.ownerBio}>{ownerData.shortBio}</p>
          </div>
        </div>

        <div className={styles.interviewContent}>
          <blockquote className={styles.interviewExcerpt}>
            <p>"{ownerData.excerpt}"</p>
          </blockquote>

          <div className={styles.interviewQuestions}>
            {ownerData.fullInterview.map((item, index) => (
              <div key={index} className={styles.interviewItem}>
                <h2 className={styles.question}>{item.question}</h2>
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
