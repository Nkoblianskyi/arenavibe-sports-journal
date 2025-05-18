"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import styles from "./header.module.scss"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <div className={styles.logoContainer}>
              <Image src="/logo-icon.png" alt="ArenaVibe Icon" width={30} height={30} priority />
              <h3>ArenaVibe Media</h3>
            </div>
          </Link>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
            <ul className={styles.navList}>
              <li>
                <Link href="/" onClick={closeMenu}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/revistas" onClick={closeMenu}>
                  Revistas
                </Link>
              </li>
              <li>
                <Link href="/historia" onClick={closeMenu}>
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="/logros" onClick={closeMenu}>
                  Logros
                </Link>
              </li>
              <li>
                <Link href="/entrevista-fundador" onClick={closeMenu}>
                  Entrevista
                </Link>
              </li>
              <li>
                <Link href="/sobre-nostros" onClick={closeMenu}>
                  Sobre Nostros
                </Link>
              </li>
              <li>
                <Link href="/contacto" onClick={closeMenu}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.headerActions}>
            <button
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
