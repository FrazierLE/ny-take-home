//App
export interface Articles {
  abstract: string
  byline: string
  created_date: string
  des_facet: string[]
  geo_facet: string[]
  item_type: string
  kicker: string | null
  material_type_facet: string | null
  multimedia: {
    caption: string
    copyright: string
    format: string
    height: number
    subtype: string
    type: string
    url: string
    width: number
  }[] 
  org_facet: []
  per_facet: []
  published_date: string
  section: string
  short_url: string
  world: string
  subsection: string
  title: string
  updated_date: string
  uri: string
  url: string
}

// ArticleCard
export interface Card {
  id: string
  byline: string
  title: string
  multimedia: {url: string}[]
}

export interface ArticlesArray {
  articles: Articles[]
}

// Form
export interface formFunctions {
  filterArticles: (search: string) => void
  resetFilter: () => void
}

// Home
export interface homeProps {
  articles: Articles[]
  filterArticles: (search: string) => void
  resetFilter: () => void
  setCategory: (event: string) => void
}
