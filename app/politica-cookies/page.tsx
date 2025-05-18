import Link from "next/link"
import styles from "./page.module.scss"

export const metadata = {
  title: "Política de Cookies | ArenaVibe Media",
  description:
    "Política de cookies de ArenaVibe Media. Información sobre cómo utilizamos las cookies en nuestro sitio web.",
}

export default function CookiePolicyPage() {
  return (
    <div className={styles.policyPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Política de Cookies</h1>
          <p className={styles.heroSubtitle}>Información sobre cómo utilizamos las cookies en nuestro sitio web.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.policyContent}>
            <div className={styles.lastUpdated}>Última actualización: 15 de mayo de 2025</div>

            <div className={styles.policySection}>
              <h2>1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o
                móvil) cuando visitas un sitio web. Las cookies son ampliamente utilizadas para hacer que los sitios web
                funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los
                propietarios del sitio.
              </p>
              <p>
                Las cookies pueden ser "persistentes" o "de sesión". Las cookies persistentes permanecen en tu
                dispositivo durante un período de tiempo definido en la cookie, y se activan cada vez que visitas el
                sitio web que creó esa cookie en particular. Las cookies de sesión se eliminan cuando cierras tu
                navegador.
              </p>
            </div>

            <div className={styles.policySection}>
              <h2>2. Cómo utilizamos las cookies</h2>
              <p>
                Utilizamos cookies por varias razones que se detallan a continuación. Desafortunadamente, en la mayoría
                de los casos, no existen opciones estándar de la industria para deshabilitar las cookies sin
                deshabilitar por completo la funcionalidad y características que agregan a este sitio. Se recomienda que
                dejes activadas todas las cookies si no estás seguro de si las necesitas o no, en caso de que se
                utilicen para proporcionar un servicio que utilizas.
              </p>
              <p>Utilizamos los siguientes tipos de cookies:</p>
              <ul>
                <li>
                  <strong>Cookies estrictamente necesarias:</strong> Son esenciales para que puedas navegar por el sitio
                  web y utilizar sus funciones, como acceder a áreas seguras del sitio web. Sin estas cookies, no
                  podemos proporcionar los servicios que has solicitado.
                </li>
                <li>
                  <strong>Cookies de rendimiento:</strong> Estas cookies recopilan información sobre cómo los visitantes
                  utilizan un sitio web, por ejemplo, qué páginas visitan con más frecuencia y si reciben mensajes de
                  error de las páginas web. Estas cookies no recopilan información que identifique a un visitante. Toda
                  la información que recopilan estas cookies es agregada y, por lo tanto, anónima. Solo se utilizan para
                  mejorar el funcionamiento de un sitio web.
                </li>
                <li>
                  <strong>Cookies de funcionalidad:</strong> Estas cookies permiten que el sitio web recuerde las
                  elecciones que haces (como tu nombre de usuario, idioma o la región en la que te encuentras) y
                  proporciona funciones mejoradas y más personales. Estas cookies también pueden ser utilizadas para
                  recordar los cambios que has realizado al tamaño del texto, fuentes y otras partes de las páginas web
                  que puedes personalizar.
                </li>
                <li>
                  <strong>Cookies de orientación o publicidad:</strong> Estas cookies se utilizan para entregar anuncios
                  más relevantes para ti y tus intereses. También se utilizan para limitar el número de veces que ves un
                  anuncio, así como para ayudar a medir la efectividad de la campaña publicitaria. Suelen ser colocadas
                  por redes publicitarias con el permiso del operador del sitio web.
                </li>
              </ul>
            </div>

            <div className={styles.policySection}>
              <h2>3. Las cookies que utilizamos</h2>
              <p>A continuación se muestra una lista de las cookies que utilizamos en nuestro sitio web:</p>
              <div className={styles.cookieTable}>
                <div className={styles.cookieTableHeader}>
                  <div className={styles.cookieName}>Nombre</div>
                  <div className={styles.cookiePurpose}>Propósito</div>
                  <div className={styles.cookieExpiry}>Caducidad</div>
                </div>
                <div className={styles.cookieTableRow}>
                  <div className={styles.cookieName}>_ga</div>
                  <div className={styles.cookiePurpose}>
                    Utilizada por Google Analytics para distinguir usuarios únicos.
                  </div>
                  <div className={styles.cookieExpiry}>2 años</div>
                </div>
                <div className={styles.cookieTableRow}>
                  <div className={styles.cookieName}>_gid</div>
                  <div className={styles.cookiePurpose}>Utilizada por Google Analytics para distinguir usuarios.</div>
                  <div className={styles.cookieExpiry}>24 horas</div>
                </div>
                <div className={styles.cookieTableRow}>
                  <div className={styles.cookieName}>_gat</div>
                  <div className={styles.cookiePurpose}>
                    Utilizada por Google Analytics para limitar la tasa de solicitudes.
                  </div>
                  <div className={styles.cookieExpiry}>1 minuto</div>
                </div>
                <div className={styles.cookieTableRow}>
                  <div className={styles.cookieName}>cookieConsent</div>
                  <div className={styles.cookiePurpose}>Almacena tu preferencia de consentimiento de cookies.</div>
                  <div className={styles.cookieExpiry}>1 año</div>
                </div>
                <div className={styles.cookieTableRow}>
                  <div className={styles.cookieName}>session</div>
                  <div className={styles.cookiePurpose}>Mantiene el estado de la sesión del usuario.</div>
                  <div className={styles.cookieExpiry}>Sesión</div>
                </div>
              </div>
            </div>

            <div className={styles.policySection}>
              <h2>4. Cómo controlar las cookies</h2>
              <p>
                Puedes controlar y/o eliminar las cookies según desees. Puedes eliminar todas las cookies que ya están
                en tu dispositivo y puedes configurar la mayoría de los navegadores para evitar que se coloquen. Sin
                embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que
                visites un sitio y algunos servicios y funcionalidades pueden no funcionar.
              </p>
              <p>
                Puedes configurar tu navegador para que no acepte cookies, y el siguiente sitio web te indica cómo
                eliminar las cookies de tu navegador. Sin embargo, en algunos casos, algunas de nuestras funciones del
                sitio web pueden no funcionar como resultado.
              </p>
              <p>
                Para obtener más información sobre cómo gestionar las cookies en los navegadores más populares, visita
                los siguientes enlaces:
              </p>
            </div>

            <div className={styles.policySection}>
              <h2>5. Más información</h2>
              <p>
                Esperamos que esto haya aclarado las cosas para ti. Como se mencionó anteriormente, si no estás seguro
                de si necesitas o no algo, generalmente es más seguro dejar las cookies habilitadas en caso de que
                interactúen con una de las funciones que utilizas en nuestro sitio.
              </p>
              <p>
                Sin embargo, si todavía estás buscando más información, puedes contactarnos a través de uno de nuestros
                métodos de contacto preferidos:
              </p>
              <ul>
                <li>
                  Email: <p>info@arenavibemedia.com</p>
                </li>
                <li>Teléfono: +34 681 315 927</li>
              </ul>
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
