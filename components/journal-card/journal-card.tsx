import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Journal } from "@/types/journal"
import styles from "./journal-card.module.scss"

interface JournalCardProps {
  journal: Journal
}

const JournalCard = ({ journal }: JournalCardProps) => {
  return (
    <div className={styles.journalCard}>
      <div className={styles.journalImage}>
        <Image
          src={journal.coverImage || "/placeholder.svg"}
          alt={`Portada de ${journal.title}`}
          width={300}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.journalContent}>
        <h3 className={styles.journalTitle}>{journal.title}</h3>
        <p className={styles.journalDescription}>{journal.description}</p>
        <div className={styles.journalMeta}>
        </div>
        <Link href={`/revistas/${journal.slug}`} className={styles.journalLink}>
          Ver detalles <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export default JournalCard
