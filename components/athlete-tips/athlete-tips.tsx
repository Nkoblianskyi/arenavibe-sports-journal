import styles from "./athlete-tips.module.scss"
import athleteTips from "@/data/athlete-tips.json"

export default function AthleteTips() {
  return (
    <section className={styles.tipsSection}>
      <div className="container">
        <h2 className="section-title">Consejos de Campeones</h2>
        <p className={styles.tipsIntro}>
          Consejos directos de deportistas de élite que han alcanzado la cima en sus disciplinas. Sabiduría destilada de
          años de experiencia al más alto nivel.
        </p>

        <div className={styles.tipsGrid}>
          {athleteTips.map((tip, index) => (
            <div key={tip.id} className={`${styles.tipCard} ${index % 2 === 0 ? styles.even : styles.odd}`}>
              <div className={styles.tipContent}>
                <h3 className={styles.tipQuestion}>{tip.question}</h3>
                <blockquote className={styles.tipAnswer}>
                  <p>"{tip.answer}"</p>
                  <footer className={styles.tipSport}>— Deportista de {tip.sport}</footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
