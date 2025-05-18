import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getJournalBySlug, getJournalContent } from "@/services/journal-service"
import styles from "./page.module.scss"

interface JournalPageProps {
  params: {
    slug: string
  }
}

export default async function JournalPage({ params }: JournalPageProps) {
  const { slug } = params
  const journal = getJournalBySlug(slug)

  if (!journal) {
    notFound()
  }

  const journalContent = await getJournalContent(slug)

  if (!journalContent) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Error al cargar el contenido</h1>
          <p>No se pudo cargar el contenido de la revista.</p>
          <Link href="/revistas" className={styles.backButton}>
            Volver a revistas
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.coverContainer}>
            <Image
              src={journal.coverImage || "/placeholder.svg"}
              alt={journal.title}
              width={300}
              height={400}
              className={styles.cover}
            />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>{journal.title}</h1>
            <p className={styles.description}>{journal.description}</p>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Frecuencia:</span>
                <span className={styles.metaValue}>{journal.frequency}</span>
              </div>
              <div className={styles.metaItem}>
              </div>
            </div>
            <button className={styles.subscribeButton}>Suscribirse</button>
          </div>
        </div>

        <div className={styles.content}>
          {journalContent.sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>

              {section.content && <p className={styles.sectionContent}>{section.content}</p>}

              {section.items && (
                <ul className={styles.sectionList}>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.sectionListItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <Link href="/revistas" className={styles.backButton}>
          Volver a revistas
        </Link>
      </div>
    </main>
  )
}
