export interface JournalSection {
  title: string
  content?: string
  items?: string[]
}

export interface Journal {
  id: number
  title: string
  slug: string
  description: string
  coverImage: string
  frequency: string
  price: number
}

export interface JournalContent {
  sections: JournalSection[]
}
