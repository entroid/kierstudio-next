import { MetadataRoute } from 'next'
import { es } from '@/translations'

const BASE = 'https://kierstudio.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Los casos salen de projectsData, que es también de donde salen las rutas:
  // agregar un trabajo no puede dejar el sitemap desactualizado.
  const trabajos: MetadataRoute.Sitemap = es.projectsData.map((project) => ({
    url: `${BASE}/trabajos/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.8,
  }))

  // Las legales (/privacy, /terms, /cookies) no van: se sirven con `noindex`
  // porque no aportan nada a quien busca. Ofrecerlas en el sitemap y a la vez
  // pedir que no se indexen son señales contradictorias.
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...trabajos,
  ]
}
