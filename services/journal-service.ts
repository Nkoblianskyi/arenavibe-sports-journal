import type { Journal, JournalContent } from "@/types/journal"
import journalsData from "@/data/journals.json"

export const journals = journalsData

export const getJournals = (): Journal[] => {
  return journalsData
}

export const getJournalBySlug = (slug: string): Journal | undefined => {
  return journalsData.find((journal) => journal.slug === slug)
}

export const getJournalContent = async (slug: string): Promise<JournalContent | null> => {
  try {
    // En un entorno real, esto sería una llamada a API
    // Aquí simulamos la carga dinámica del contenido
    const content = await import(`@/data/journal-content/${slug}.json`)
    return content.default || content
  } catch (error) {
    console.error(`Error loading content for journal ${slug}:`, error)
    return null
  }
}
