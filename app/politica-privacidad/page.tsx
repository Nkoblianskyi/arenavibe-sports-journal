import Link from "next/link"
import styles from "./page.module.scss"

export const metadata = {
  title: "Política de Privacidad | ArenaVibe Media",
  description:
    "Política de privacidad de ArenaVibe Media. Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.policyPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Política de Privacidad</h1>
          <p className={styles.heroSubtitle}>
            Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.policyContent}>
            <div className={styles.lastUpdated}>Última actualización: 15 de mayo de 2025</div>

            <div className={styles.policySection}>
              <h2>1. Introducción</h2>
              <p>
                En ArenaVibe Media ("nosotros", "nuestro", "la empresa") respetamos tu privacidad y nos comprometemos a
                proteger tus datos personales. Esta política de privacidad te informará sobre cómo cuidamos tus datos
                personales cuando visitas nuestro sitio web y te informará sobre tus derechos de privacidad y cómo la
                ley te protege.
              </p>
              <p>Esta política de privacidad se aplica a la información que recopilamos cuando:</p>
              <ul>
                <li>Visitas nuestro sitio web</li>
                <li>Te suscribes a nuestras revistas</li>
                <li>Te registras para recibir nuestros boletines</li>
                <li>Participas en nuestras encuestas o concursos</li>
                <li>Nos contactas a través de nuestros formularios</li>
              </ul>
            </div>

            <div className={styles.policySection}>
              <h2>2. Datos que recopilamos sobre ti</h2>
              <p>
                Datos personales, o información personal, significa cualquier información sobre un individuo a partir de
                la cual esa persona puede ser identificada. No incluye datos donde la identidad ha sido eliminada (datos
                anónimos).
              </p>
              <p>
                Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti, que hemos
                agrupado de la siguiente manera:
              </p>
              <ul>
                <li>
                  <strong>Datos de identidad:</strong> incluye nombre, apellidos, nombre de usuario o identificador
                  similar.
                </li>
                <li>
                  <strong>Datos de contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección
                  de correo electrónico y números de teléfono.
                </li>
                <li>
                  <strong>Datos de transacción:</strong> incluye detalles sobre pagos hacia y desde ti, y otros detalles
                  de productos y servicios que has adquirido de nosotros.
                </li>
                <li>
                  <strong>Datos técnicos:</strong> incluye dirección de protocolo de Internet (IP), datos de inicio de
                  sesión, tipo y versión de navegador, configuración de zona horaria y ubicación, tipos y versiones de
                  complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que
                  utilizas para acceder a este sitio web.
                </li>
                <li>
                  <strong>Datos de perfil:</strong> incluye tu nombre de usuario y contraseña, compras o pedidos
                  realizados por ti, tus intereses, preferencias, comentarios y respuestas a encuestas.
                </li>
                <li>
                  <strong>Datos de uso:</strong> incluye información sobre cómo utilizas nuestro sitio web, productos y
                  servicios.
                </li>
                <li>
                  <strong>Datos de marketing y comunicaciones:</strong> incluye tus preferencias para recibir marketing
                  de nosotros y de nuestros terceros, y tus preferencias de comunicación.
                </li>
              </ul>
            </div>

            <div className={styles.policySection}>
              <h2>3. Cómo recopilamos tus datos personales</h2>
              <p>Utilizamos diferentes métodos para recopilar datos de y sobre ti, incluyendo:</p>
              <ul>
                <li>
                  <strong>Interacciones directas:</strong> Puedes proporcionarnos tus datos de identidad, contacto y
                  financieros al completar formularios o al comunicarte con nosotros por correo postal, teléfono, correo
                  electrónico o de otra manera.
                </li>
                <li>
                  <strong>Tecnologías o interacciones automatizadas:</strong> A medida que interactúas con nuestro sitio
                  web, podemos recopilar automáticamente datos técnicos sobre tu equipo, acciones de navegación y
                  patrones. Recopilamos estos datos personales mediante cookies y otras tecnologías similares.
                </li>
                <li>
                  <strong>Terceros o fuentes disponibles públicamente:</strong> Podemos recibir datos personales sobre
                  ti de varios terceros y fuentes públicas.
                </li>
              </ul>
            </div>

            <div className={styles.policySection}>
              <h2>4. Cómo utilizamos tus datos personales</h2>
              <p>
                Solo utilizaremos tus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos tus
                datos personales en las siguientes circunstancias:
              </p>
              <ul>
                <li>
                  Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado contigo.
                </li>
                <li>
                  Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y tus intereses y
                  derechos fundamentales no anulen esos intereses.
                </li>
                <li>Cuando necesitemos cumplir con una obligación legal o regulatoria.</li>
              </ul>
              <p>
                En general, no confiamos en el consentimiento como base legal para procesar tus datos personales,
                excepto en relación con el envío de comunicaciones de marketing directo de terceros a través de correo
                electrónico o mensaje de texto.
              </p>
            </div>

            <div className={styles.policySection}>
              <h2>5. Divulgación de tus datos personales</h2>
              <p>
                Podemos compartir tus datos personales con las partes establecidas a continuación para los fines
                establecidos en la sección 4 anterior:
              </p>
              <ul>
                <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
                <li>Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradores.</li>
                <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
                <li>
                  Terceros a quienes podemos elegir vender, transferir o fusionar partes de nuestro negocio o nuestros
                  activos.
                </li>
              </ul>
              <p>
                Requerimos a todos los terceros que respeten la seguridad de tus datos personales y los traten de
                acuerdo con la ley. No permitimos a nuestros proveedores de servicios terceros utilizar tus datos
                personales para sus propios fines y solo les permitimos procesar tus datos personales para fines
                específicos y de acuerdo con nuestras instrucciones.
              </p>
            </div>

            <div className={styles.policySection}>
              <h2>6. Seguridad de datos</h2>
              <p>
                Hemos implementado medidas de seguridad apropiadas para evitar que tus datos personales se pierdan,
                utilicen o accedan de forma no autorizada, se modifiquen o divulguen accidentalmente. Además, limitamos
                el acceso a tus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen
                una necesidad comercial de conocer. Solo procesarán tus datos personales según nuestras instrucciones y
                están sujetos a un deber de confidencialidad.
              </p>
              <p>
                Hemos implementado procedimientos para tratar cualquier sospecha de violación de datos personales y te
                notificaremos a ti y a cualquier regulador aplicable de una violación cuando estemos legalmente
                obligados a hacerlo.
              </p>
            </div>

            <div className={styles.policySection}>
              <h2>7. Retención de datos</h2>
              <p>
                Solo conservaremos tus datos personales durante el tiempo que sea necesario para cumplir con los fines
                para los que los recopilamos, incluyendo para satisfacer cualquier requisito legal, contable o de
                informes.
              </p>
              <p>
                Para determinar el período de retención apropiado para los datos personales, consideramos la cantidad,
                naturaleza y sensibilidad de los datos personales, el riesgo potencial de daño por uso o divulgación no
                autorizada de tus datos personales, los propósitos para los cuales procesamos tus datos personales y si
                podemos lograr esos propósitos a través de otros medios, y los requisitos legales aplicables.
              </p>
            </div>

            <div className={styles.policySection}>
              <h2>8. Tus derechos legales</h2>
              <p>
                Bajo ciertas circunstancias, tienes derechos bajo las leyes de protección de datos en relación con tus
                datos personales:
              </p>
              <ul>
                <li>Solicitar acceso a tus datos personales.</li>
                <li>Solicitar la corrección de tus datos personales.</li>
                <li>Solicitar la eliminación de tus datos personales.</li>
                <li>Oponerse al procesamiento de tus datos personales.</li>
                <li>Solicitar la restricción del procesamiento de tus datos personales.</li>
                <li>Solicitar la transferencia de tus datos personales.</li>
                <li>Derecho a retirar el consentimiento.</li>
              </ul>
              <p>
                Si deseas ejercer cualquiera de los derechos establecidos anteriormente, contáctanos en
                <p> info@arenavibemedia.com</p>.
              </p>
            </div>

            <div className={styles.policySection}>
              <h2>9. Cambios a esta política de privacidad</h2>
              <p>
                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
                Proporcionaremos una nueva política de privacidad cuando hagamos actualizaciones sustanciales.
              </p>
            </div>

            <div className={styles.policySection}>
              <h2>10. Contacto</h2>
              <p>
                Si tienes alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad,
                contáctanos en:
              </p>
              <address className={styles.contactAddress}>
                ArenaVibe Media
                <br />
                Atención: Responsable de Protección de Datos
                <br />
                Calle Mayor, 6<br />
                41001 Sevilla, España
                <br />
                Email: <p>info@arenavibemedia.com</p>
                <br />
                Teléfono: +34 681 315 927
              </address>
            </div>

            <div className={styles.policyFooter}>
              <Link href="/" className={styles.backLink}>
                Volver a la página de inicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
