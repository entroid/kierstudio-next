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

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...trabajos,
    {
      url: `${BASE}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
