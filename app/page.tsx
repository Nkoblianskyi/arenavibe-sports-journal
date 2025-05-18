import Image from "next/image"
import Link from "next/link"
import SubscriptionForm from "@/components/subscription-form/subscription-form"
import JournalCard from "@/components/journal-card/journal-card"
import AthleteTips from "@/components/athlete-tips/athlete-tips"
import OwnerInterview from "@/components/owner-interview/owner-interview"
import { journals } from "@/services/journal-service"
import type { Journal } from "@/types/journal"
import styles from "./page.module.scss"

export default function Home() {
  // Mostrar solo 3 revistas en la página de inicio
  const featuredJournals = journals.slice(0, 3)

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>La mejor cobertura deportiva de España</h1>
              <p className={styles.heroSubtitle}>
                Desde 2025, ArenaVibe Media ofrece análisis deportivos de calidad en formato impreso y digital
              </p>
              <div className={styles.heroActions}>
                <Link href="/revistas" className="btn btn-primary">
                  Explorar Revistas
                </Link>
                <Link href="/historia" className="btn btn-primary">
                  Nuestra Historia
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/1be94a1c0494c155c6005633f967b176.jpg"
                alt="Revistas deportivas ArenaVibe"
                width={500}
                height={600}
                priority
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`section ${styles.about}`}>
        <div className="container">
          <h2 className="section-title">Sobre Nosotros</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <Image
                src="/74528cab6945beda396e3102cc18a882.jpg"
                alt="Equipo editorial de ArenaVibe Media"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
            <div className={styles.aboutText}>
              <p>
                ArenaVibe Media es una editorial deportiva líder en España, especializada en la publicación de revistas
                impresas de alta calidad que cubren los deportes más populares.
              </p>
              <p>
                Nuestro equipo de periodistas experimentados y apasionados trabaja incansablemente para ofrecer análisis
                profundos, entrevistas exclusivas y reportajes de calidad que van más allá de los titulares.
              </p>
              <p>
                Desde nuestra fundación en 2025, nos hemos comprometido a elevar el nivel del periodismo deportivo en
                España, combinando la tradición del formato impreso con la innovación digital.
              </p>
            </div>
            <div className={styles.aboutAction}>
              <Link href="/historia" className="btn btn-outline">
                Conoce Nuestra Historia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Journals Section */}
      <section className={`section ${styles.journals}`}>
        <div className="container">
          <h2 className="section-title">Nuestras Revistas</h2>
          <p className={styles.journalsIntro}>
            Publicamos revistas especializadas en los deportes más populares, cada una con un enfoque único y contenido
            exclusivo.
          </p>
          <div className={styles.journalGrid}>
            {featuredJournals.map((journal: Journal) => (
              <JournalCard key={journal.id} journal={journal} />
            ))}
          </div>
          <div className={styles.journalsAction}>
            <Link href="/revistas" className="btn btn-primary">
              Ver Todas las Revistas
            </Link>
          </div>
        </div>
      </section>

      {/* Athlete Tips Section */}
      <AthleteTips />

      {/* Owner Interview Section */}
      <OwnerInterview />

      {/* Timeline Section */}
      <section className={`section ${styles.timeline}`}>
        <div className="container">
          <h2 className="section-title">Nuestra Trayectoria</h2>
          <div className={styles.timelineContent}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineCard}>
                <h3>Fundación</h3>
                <p>ArenaVibe Media nace con la misión de revolucionar el periodismo deportivo en España.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineCard}>
                <h3>Primera Edición</h3>
                <p>Lanzamiento de nuestra primera revista "Fútbol Total" con gran acogida en el mercado.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineCard}>
                <h3>Expansión</h3>
                <p>Apertura de nuestra primera oficina en Madrid y contratación del equipo editorial inicial.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineCard}>
                <h3>Nuevas Publicaciones</h3>
                <p>Lanzamiento de "Basket Life", nuestra segunda revista especializada en baloncesto.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineCard}>
                <h3>Presencia Digital</h3>
                <p>Inauguración de nuestro sitio web y estrategia de contenido digital complementario.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className={`section ${styles.subscription}`}>
        <div className="container">
          <div className={styles.subscriptionContent}>
            <div className={styles.subscriptionText}>
              <h2 className={styles.subscriptionTitle}>Suscríbete a Nuestras Revistas</h2>
              <p className={styles.subscriptionDescription}>
                Recibe nuestras revistas directamente en tu domicilio y disfruta de contenido exclusivo, análisis
                profundos y entrevistas con tus deportistas favoritos.
              </p>
              <ul className={styles.subscriptionBenefits}>
                <li>Entrega prioritaria antes del lanzamiento oficial</li>
                <li>Acceso a contenido digital exclusivo</li>
                <li>Ediciones especiales para suscriptores</li>
                <li>Invitaciones a eventos deportivos</li>
              </ul>
            </div>
            <div className={styles.subscriptionFormWrapper}>
              <SubscriptionForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
