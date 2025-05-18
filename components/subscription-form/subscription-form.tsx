"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import styles from "./subscription-form.module.scss"

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
    acceptTerms: false,
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      if (name === "acceptTerms") {
        setFormData((prev) => ({ ...prev, [name]: checked }))
      } else {
        // Para checkboxes de intereses
        setFormData((prev) => {
          const interests = [...prev.interests]
          if (checked) {
            interests.push(value)
          } else {
            const index = interests.indexOf(value)
            if (index > -1) {
              interests.splice(index, 1)
            }
          }
          return { ...prev, interests }
        })
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica
    if (!formData.name || !formData.email || !formData.acceptTerms) {
      setErrorMessage("Por favor, complete todos los campos obligatorios.")
      return
    }

    setFormStatus("submitting")

    try {
      // Simulación de envío de formulario
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Resetear formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        interests: [],
        acceptTerms: false,
      })

      setFormStatus("success")
      setTimeout(() => setFormStatus("idle"), 5000)
    } catch (error) {
      setFormStatus("error")
      setErrorMessage("Ha ocurrido un error. Por favor, inténtelo de nuevo.")
    }
  }

  return (
    <div className={styles.subscriptionForm}>
      {formStatus === "success" ? (
        <div className={styles.successMessage}>
          <CheckCircle size={48} className={styles.successIcon} />
          <h3>¡Gracias por suscribirte!</h3>
          <p>Hemos recibido tu solicitud. Pronto recibirás más información sobre nuestras revistas.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Nombre completo <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.formInput}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Correo electrónico <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Intereses deportivos</label>
            <div className={styles.checkboxGroup}>
              {["Fútbol", "Baloncesto", "Fórmula 1", "Tenis", "Atletismo", "Culturismo"].map((sport) => (
                <label key={sport} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="interests"
                    value={sport}
                    checked={formData.interests.includes(sport)}
                    onChange={handleChange}
                  />
                  <span>{sport}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
              />
              <span>
                Acepto la{" "}
                <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer">
                  política de privacidad
                </a>{" "}
                <span className={styles.required}>*</span>
              </span>
            </label>
          </div>

          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

          <button type="submit" className={styles.submitButton} disabled={formStatus === "submitting"}>
            {formStatus === "submitting" ? "Enviando..." : "Solicitar Suscripción"}
          </button>
        </form>
      )}
    </div>
  )
}

export default SubscriptionForm
