"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import styles from "./cookie-consent.module.scss"

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya ha dado su consentimiento
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className={styles.cookieConsent}>
      <div className={styles.container}>
        <button className={styles.closeButton} onClick={declineCookies} aria-label="Cerrar aviso de cookies">
          <X size={20} />
        </button>
        <div className={styles.content}>
          <h3 className={styles.title}>Política de Cookies</h3>
          <p className={styles.description}>
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestra{" "}
            <Link href="/politica-cookies">política de cookies</Link>.
          </p>
          <div className={styles.actions}>
            <button className={`${styles.button} ${styles.acceptButton}`} onClick={acceptCookies}>
              Aceptar
            </button>
            <button className={`${styles.button} ${styles.declineButton}`} onClick={declineCookies}>
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
