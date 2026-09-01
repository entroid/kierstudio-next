import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    // Las páginas legales sí se rastrean: bloquearlas por robots.txt no las saca
    // del índice, sólo impide que Google lea su contenido — y termina indexando
    // la URL sin descripción. Además el sitemap las ofrece, así que bloquearlas
    // era una señal contradictoria.
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://kierstudio.com/sitemap.xml',
  }
}
