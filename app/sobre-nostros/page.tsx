import Link from "next/link"
import {
    Building,
    Award,
    Users,
    Target,
    BookOpen,
    MapPin,
    Mail,
    Phone,
    Clock,
    TrendingUp,
    Star,
    Heart,
} from "lucide-react"
import styles from "./page.module.scss"

export const metadata = {
    title: "Sobre Nosotros | ArenaVibe Media",
    description:
        "Conoce más sobre ArenaVibe Media, nuestra misión, valores y el equipo detrás de nuestras publicaciones deportivas.",
}

export default function AboutPage() {
    return (
        <main className={styles.aboutPage}>
            <div className="container">
                <section className={styles.heroSection}>
                    <h1 className={styles.pageTitle}>Sobre Nosotros</h1>
                    <div className={styles.iconContainer}>
                        <Building className={styles.mainIcon} />
                    </div>
                    <p className={styles.tagline}>Pasión por el deporte, compromiso con la calidad</p>
                </section>

                <section className={styles.aboutSection}>
                    <div className={styles.sectionHeader}>
                        <BookOpen className={styles.sectionIcon} />
                        <h2>Quiénes Somos</h2>
                    </div>
                    <div className={styles.aboutContent}>
                        <p>
                            ArenaVibe Media es una editorial deportiva fundada en 2025 con la misión de revolucionar el periodismo
                            deportivo en España. Nos especializamos en la publicación de revistas impresas de alta calidad que cubren
                            los deportes más populares, ofreciendo análisis profundos, entrevistas exclusivas y reportajes que van más
                            allá de los titulares.
                        </p>
                        <p>
                            Nuestro equipo está formado por periodistas experimentados y apasionados que comparten un compromiso
                            inquebrantable con la excelencia editorial. Creemos en un periodismo deportivo que respeta la inteligencia
                            del lector, contextualiza cada historia y profundiza en los aspectos técnicos, humanos y culturales del
                            deporte.
                        </p>
                        <p>
                            En un mundo donde la información deportiva tiende a la inmediatez y la superficialidad, ArenaVibe Media
                            apuesta por la reflexión, el análisis y la calidad. Nuestras publicaciones son objetos físicos
                            cuidadosamente diseñados que invitan a una lectura pausada y enriquecedora.
                        </p>
                    </div>
                </section>

                <section className={styles.valuesSection}>
                    <div className={styles.sectionHeader}>
                        <Heart className={styles.sectionIcon} />
                        <h2>Nuestros Valores</h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconContainer}>
                                <Target className={styles.valueIcon} />
                            </div>
                            <h3>Excelencia</h3>
                            <p>Buscamos la perfección en cada artículo, diseño y publicación que creamos.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconContainer}>
                                <Users className={styles.valueIcon} />
                            </div>
                            <h3>Comunidad</h3>
                            <p>Construimos relaciones duraderas con nuestros lectores basadas en la confianza y el respeto.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconContainer}>
                                <Star className={styles.valueIcon} />
                            </div>
                            <h3>Innovación</h3>
                            <p>Reinventamos constantemente la forma de contar historias deportivas.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconContainer}>
                                <TrendingUp className={styles.valueIcon} />
                            </div>
                            <h3>Rigor</h3>
                            <p>Nos comprometemos con la precisión y la profundidad en cada información que publicamos.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.achievementsSection}>
                    <div className={styles.sectionHeader}>
                        <Award className={styles.sectionIcon} />
                        <h2>Nuestros Logros</h2>
                    </div>
                    <div className={styles.achievementsList}>
                        <div className={styles.achievementItem}>
                            <div className={styles.achievementIcon}>
                                <BookOpen />
                            </div>
                            <div className={styles.achievementContent}>
                                <h3>6 Revistas Especializadas</h3>
                                <p>Cubriendo los deportes más populares con análisis en profundidad y contenido exclusivo.</p>
                            </div>
                        </div>
                        <div className={styles.achievementItem}>
                            <div className={styles.achievementIcon}>
                                <Users />
                            </div>
                            <div className={styles.achievementContent}>
                                <h3>+100.000 Suscriptores</h3>
                                <p>Una comunidad fiel de lectores que valoran nuestro compromiso con la calidad.</p>
                            </div>
                        </div>
                        <div className={styles.achievementItem}>
                            <div className={styles.achievementIcon}>
                                <Award />
                            </div>
                            <div className={styles.achievementContent}>
                                <h3>12 Premios de Periodismo</h3>
                                <p>Reconocimientos a nuestra labor periodística y diseño editorial innovador.</p>
                            </div>
                        </div>
                        <div className={styles.achievementItem}>
                            <div className={styles.achievementIcon}>
                                <Star />
                            </div>
                            <div className={styles.achievementContent}>
                                <h3>Editorial Deportiva del Año</h3>
                                <p>Reconocidos como la mejor editorial deportiva de España en.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.contactSection}>
                    <div className={styles.sectionHeader}>
                        <MapPin className={styles.sectionIcon} />
                        <h2>Dónde Encontrarnos</h2>
                    </div>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactCard}>
                            <div className={styles.contactIconContainer}>
                                <Building className={styles.contactIcon} />
                            </div>
                            <h3>Sede Central</h3>
                            <p>Calle Mayor, 6, 41001 Sevilla, Spain</p>
                        </div>
                        <div className={styles.contactCard}>
                            <div className={styles.contactIconContainer}>
                                <Phone className={styles.contactIcon} />
                            </div>
                            <h3>Teléfono</h3>
                            <p>+34 681 315 927</p>
                            <p>Lunes a Viernes: 9:00 - 18:00</p>
                        </div>
                        <div className={styles.contactCard}>
                            <div className={styles.contactIconContainer}>
                                <Mail className={styles.contactIcon} />
                            </div>
                            <h3>Email</h3>
                            <p>info@arenavibemedia.com</p>
                        </div>
                        <div className={styles.contactCard}>
                            <div className={styles.contactIconContainer}>
                                <Clock className={styles.contactIcon} />
                            </div>
                            <h3>Horario</h3>
                            <p>Lunes a Viernes: 9:00 - 18:00</p>
                            <p>Fines de semana: Cerrado</p>
                        </div>
                    </div>
                </section>

                <section className={styles.subscriptionCta}>
                    <h2>¿Te gustaría formar parte de nuestra comunidad?</h2>
                    <p>
                        Suscríbete a nuestras revistas y disfruta de contenido exclusivo, análisis profundos y entrevistas con tus
                        deportistas favoritos.
                    </p>
                    <Link href="/contacto" className={styles.ctaButton}>
                        Suscríbete Ahora
                    </Link>
                </section>
            </div>
        </main>
    )
}
