import Image from "next/image"
import styles from "./page.module.scss"

export const metadata = {
  title: "Nuestros Logros | ArenaVibe Media",
  description:
    "Descubre los premios, reconocimientos y logros más destacados de ArenaVibe Media en el mundo del periodismo deportivo.",
}

export default function AchievementsPage() {
  return (
    <div className={styles.achievementsPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Nuestros Logros</h1>
          <p className={styles.heroSubtitle}>
            Premios, reconocimientos y momentos destacados que han marcado nuestra trayectoria.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.achievementsIntro}>
            <p>
              Desde nuestra fundación en 2025, ArenaVibe Media ha sido reconocida por su excelencia en el periodismo
              deportivo, recibiendo numerosos premios y reconocimientos que avalan nuestro compromiso con la calidad y
              la innovación.
            </p>
          </div>

          <div className={styles.awardsSection}>
            <h2 className="section-title">Premios y Reconocimientos</h2>
            <div className={styles.awardsGrid}>
              <div className={styles.awardCard}>
                <div className={styles.awardIcon}>🏆</div>
                <div className={styles.awardContent}>
                  <h3>Premio Nacional de Periodismo Deportivo</h3>
                  <p className={styles.awardDescription}>
                    Reconocimiento a la mejor editorial deportiva de España por la calidad de nuestras publicaciones.
                  </p>
                </div>
              </div>

              <div className={styles.awardCard}>
                <div className={styles.awardIcon}>🏅</div>
                <div className={styles.awardContent}>
                  <h3>Premio a la Innovación Editorial</h3>
                  <p className={styles.awardDescription}>
                    Otorgado por la Asociación de Editores por nuestra integración de contenido impreso y digital.
                  </p>
                </div>
              </div>

              <div className={styles.awardCard}>
                <div className={styles.awardIcon}>🏆</div>
                <div className={styles.awardContent}>
                  <h3>Mejor Cobertura Deportiva</h3>
                  <p className={styles.awardDescription}>
                    Por nuestra cobertura de los Juegos Olímpicos, destacando por la profundidad de análisis.
                  </p>
                </div>
              </div>

              <div className={styles.awardCard}>
                <div className={styles.awardIcon}>🏅</div>
                <div className={styles.awardContent}>
                  <h3>Premio al Diseño Editorial</h3>
                  <p className={styles.awardDescription}>
                    Reconocimiento a la excelencia en diseño gráfico y maquetación de nuestras revistas.
                  </p>
                </div>
              </div>

              <div className={styles.awardCard}>
                <div className={styles.awardIcon}>🏆</div>
                <div className={styles.awardContent}>
                  <h3>Mejor Entrevista Deportiva</h3>
                  <p className={styles.awardDescription}>
                    Por nuestra entrevista exclusiva con la estrella del fútbol mundial tras su retirada.
                  </p>
                </div>
              </div>

              <div className={styles.awardCard}>
                <div className={styles.awardIcon}>🏅</div>
                <div className={styles.awardContent}>
                  <h3>Premio a la Fotografía Deportiva</h3>
                  <p className={styles.awardDescription}>
                    Por la calidad y originalidad de nuestras fotografías en eventos deportivos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.milestonesSection}>
            <h2 className="section-title">Hitos Destacados</h2>
            <div className={styles.milestonesList}> 
              <div className={styles.milestoneItem}>
                <div className={styles.milestoneImage}>
                  <Image
                    src="/359e93a8d79156a0939391cb8b00612f.jpg"
                    alt="Lanzamiento de nuestra primera revista"
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                </div>
                <div className={styles.milestoneContent}>
                  <h3>Primera edición agotada en tiempo récord</h3>
                  <p className={styles.milestoneYear}>2025</p>
                  <p className={styles.milestoneDescription}>
                    Nuestra primera edición de "Fútbol Total" se agotó en menos de una semana, estableciendo un récord
                    en el sector de las publicaciones deportivas en España.
                  </p>
                </div>
              </div>

              <div className={styles.milestoneItem}>
                <div className={styles.milestoneImage}>
                  <Image
                    src="/fd231a1bf716f45e5da2c8a03d591ebb.jpg"
                    alt="Entrevista exclusiva"
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                </div>
                <div className={styles.milestoneContent}>
                  <h3>Entrevista exclusiva mundial</h3>
                  <p className={styles.milestoneDescription}>
                    Conseguimos la primera entrevista exclusiva con la estrella del fútbol tras su histórico traspaso,
                    un contenido que fue reproducido por medios de todo el mundo.
                  </p>
                </div>
              </div>

              <div className={styles.milestoneItem}>
                <div className={styles.milestoneImage}>
                  <Image
                    src="/b4243f94a01b8832f30d24e218e7691f.jpg"
                    alt="100.000 ejemplares"
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                </div>
                <div className={styles.milestoneContent}>
                  <h3>100.000 ejemplares mensuales</h3>
                  <p className={styles.milestoneDescription}>
                    Alcanzamos la cifra de 100.000 ejemplares mensuales combinados entre todas nuestras publicaciones,
                    consolidándonos como líderes del sector.
                  </p>
                </div>
              </div>

              <div className={styles.milestoneItem}>
                <div className={styles.milestoneImage}>
                  <Image
                    src="/07c1ddd18811685138879c28aa7d546f.jpg"
                    alt="Plataforma digital"
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                </div>
                <div className={styles.milestoneContent}>
                  <h3>Lanzamiento de nuestra plataforma digital</h3>
                  <p className={styles.milestoneDescription}>
                    Nuestra plataforma digital alcanzó 50.000 suscriptores en su primer mes, demostrando la fidelidad de
                    nuestros lectores y la demanda de contenido de calidad.
                  </p>
                </div>
              </div>

              <div className={styles.milestoneItem}>
                <div className={styles.milestoneImage}>
                  <Image
                    src="/4e452512b9a585d5b2dff09578ff6030.jpg"
                    alt="Expansión internacional"
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                </div>
                <div className={styles.milestoneContent}>
                  <h3>Primeros acuerdos internacionales</h3>
                  <p className={styles.milestoneDescription}>
                    Firmamos acuerdos con editoriales de Francia, Italia y Reino Unido para compartir contenido y
                    expandir nuestra presencia internacional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.impactSection}>
            <h2 className="section-title">Nuestro Impacto</h2>
            <div className={styles.impactContent}>
              <div className={styles.impactText}>
                <p>
                  En ArenaVibe Media no solo nos enorgullecemos de nuestros premios y reconocimientos, sino también del
                  impacto positivo que hemos tenido en el periodismo deportivo y en la sociedad:
                </p>
                <ul className={styles.impactList}>
                  <li>
                    <strong>Formación de nuevos talentos:</strong> Hemos creado un programa de prácticas que ha formado
                    a más de 100 jóvenes periodistas.
                  </li>
                  <li>
                    <strong>Promoción del deporte base:</strong> Dedicamos espacio en nuestras publicaciones a
                    deportistas y competiciones que no suelen recibir cobertura mediática.
                  </li>
                  <li>
                    <strong>Periodismo responsable:</strong> Hemos establecido estándares éticos en la cobertura
                    deportiva, promoviendo valores positivos.
                  </li>
                  <li>
                    <strong>Sostenibilidad:</strong>todas nuestras publicaciones se imprimen en papel
                    reciclado y con tintas ecológicas.
                  </li>
                </ul>
              </div>
              <div className={styles.impactImage}>
                <Image
                  src="/ad38c552383b27a0824e43b622e0a32d.jpg"
                  alt="Programa de formación de periodistas"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
