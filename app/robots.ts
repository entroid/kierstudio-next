import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cookies', '/privacy', '/terms'],
    },
    sitemap: 'https://kierstudio.com/sitemap.xml',
  }
}
