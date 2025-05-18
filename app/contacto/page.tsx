"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import styles from "./page.module.scss"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
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
        subject: "",
        message: "",
      })

      setFormStatus("success")
      setTimeout(() => setFormStatus("idle"), 5000)
    } catch (error) {
      setFormStatus("error")
      setErrorMessage("Ha ocurrido un error. Por favor, inténtelo de nuevo.")
    }
  }

  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Contacto</h1>
          <p className={styles.heroSubtitle}>Estamos aquí para responder a tus preguntas y escuchar tus comentarios.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Información de Contacto</h2>
              <p className={styles.infoDescription}>
                Puedes ponerte en contacto con nosotros a través de los siguientes medios o utilizando el formulario de
                contacto.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <Mail className={styles.contactIcon} />
                  <div>
                    <h3>Correo Electrónico</h3>
                    <a href="mailto:info@arenavibemedia.com">info@arenavibemedia.com</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Phone className={styles.contactIcon} />
                  <div>
                    <h3>Teléfono</h3>
                    <a href="tel:+34681315927">+34 681 315 927</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <MapPin className={styles.contactIcon} />
                  <div>
                    <h3>Dirección</h3>
                    <address>Calle Mayor, 6, 41001 Sevilla, España</address>
                  </div>
                </div>
              </div>


              <div className={styles.officeHours}>
                <h3>Horario de Atención</h3>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 10:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2 className={styles.formTitle}>Envíanos un Mensaje</h2>

              {formStatus === "success" ? (
                <div className={styles.successMessage}>
                  <CheckCircle size={48} className={styles.successIcon} />
                  <h3>¡Mensaje enviado con éxito!</h3>
                  <p>Gracias por contactar con nosotros. Responderemos a tu mensaje lo antes posible.</p>
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
                    <label htmlFor="subject" className={styles.formLabel}>
                      Asunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.formSelect}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="subscription">Suscripciones</option>
                      <option value="advertising">Publicidad</option>
                      <option value="content">Contenido Editorial</option>
                      <option value="careers">Oportunidades Laborales</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Mensaje <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.formTextarea}
                      rows={6}
                      required
                    ></textarea>
                  </div>

                  {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

                  <button type="submit" className={styles.submitButton} disabled={formStatus === "submitting"}>
                    {formStatus === "submitting" ? (
                      <span className={styles.submitting}>Enviando...</span>
                    ) : (
                      <span className={styles.submitText}>
                        Enviar Mensaje <Send size={16} />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
