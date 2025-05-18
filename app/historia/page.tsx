import { Flag, BookOpen, Building, Award, Globe, Users, TrendingUp, Trophy } from "lucide-react"
import styles from "./page.module.scss"

export const metadata = {
  title: "Nuestra Historia | ArenaVibe Media",
  description: "Conoce la historia y trayectoria de ArenaVibe Media, editorial líder en revistas deportivas en España.",
}

export default function HistoryPage() {
  return (
    <main className={styles.historyPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Nuestra Historia</h1>
        <p className={styles.pageIntro}>
          Desde nuestra fundación en 2025, ArenaVibe Media ha recorrido un camino apasionante en el mundo del periodismo
          deportivo. Conoce los momentos clave que han definido nuestra trayectoria y nos han convertido en referentes
          del sector.
        </p>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}>
              <Flag className={styles.timelineIcon} />
            </div>
            <div className={styles.timelineContent}>
              <h2>Fundación</h2>
              <p>
                ArenaVibe Media nace con la misión de revolucionar el periodismo deportivo en España, apostando por un
                contenido de calidad en un momento donde el formato digital parecía imponerse sobre el papel.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}>
              <BookOpen className={styles.timelineIcon} />
            </div>
            <div className={styles.timelineContent}>
              <h2>Primera Edición</h2>
              <p>
                Lanzamiento de nuestra primera revista "Fútbol Total" con una tirada inicial de 10.000 ejemplares que se
                agotaron en menos de una semana, demostrando que existía un público ávido de contenido deportivo de
                calidad.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}>
              <Building className={styles.timelineIcon} />
            </div>
            <div className={styles.timelineContent}>
              <h2>Expansión</h2>
              <p>
                Apertura de nuestra primera oficina en Madrid y contratación del equipo editorial inicial, formado por
                periodistas de renombre y jóvenes talentos con una visión fresca del periodismo deportivo.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}>
              <Award className={styles.timelineIcon} />
            </div>
            <div className={styles.timelineContent}>
              <h2>Reconocimiento</h2>
              <p>
                "Fútbol Total" recibe el premio a la mejor publicación deportiva del año, destacando por su rigor
                periodístico, diseño innovador y enfoque analítico que va más allá del resultado.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}>
              <TrendingUp className={styles.timelineIcon} />
            </div>
            <div className={styles.timelineContent}>
              <h2>Crecimiento</h2>
              <p>
                Duplicamos nuestra plantilla y lanzamos tres nuevas publicaciones especializadas: "Basket Life", "F1
                Racing" y "Tennis World", ampliando nuestra cobertura a nuevos deportes con el mismo nivel de
                excelencia.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}>
              <Globe className={styles.timelineIcon} />
            </div>
            <div className={styles.timelineContent}>
              <h2>Presencia Digital</h2>
              <p>
                Inauguración de nuestro sitio web y estrategia de contenido digital complementario, creando un
                ecosistema donde el papel y lo digital conviven y se enriquecen mutuamente.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}>
              <Users className={styles.timelineIcon} />
            </div>
            <div className={styles.timelineContent}>
              <h2>Comunidad</h2>
              <p>
                Lanzamiento de nuestro programa de suscriptores premium con más de 50.000 miembros en el primer año,
                creando una comunidad activa de apasionados del deporte que participan en eventos exclusivos.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}>
              <Trophy className={styles.timelineIcon} />
            </div>
            <div className={styles.timelineContent}>
              <h2>Actualidad</h2>
              <p>
                Hoy ArenaVibe Media es un referente en el periodismo deportivo español, con seis publicaciones
                especializadas, más de 100 profesionales en plantilla y una comunidad de lectores fieles que valoran
                nuestro compromiso con la calidad.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.visionMission}>
          <div className={styles.visionBox}>
            <h2>Nuestra Visión</h2>
            <p>
              Aspiramos a ser el referente indiscutible del periodismo deportivo de calidad en el mundo hispanohablante,
              demostrando que el formato impreso y digital pueden coexistir y complementarse cuando el contenido es
              excelente.
            </p>
          </div>
          <div className={styles.missionBox}>
            <h2>Nuestra Misión</h2>
            <p>
              Ofrecer a los aficionados al deporte un periodismo riguroso, analítico y apasionado que vaya más allá del
              resultado, contextualizando cada historia y respetando la inteligencia del lector.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
