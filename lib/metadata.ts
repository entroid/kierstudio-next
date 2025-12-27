import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'es': '/es',
        'x-default': '/',
      },
    },
  };
}

export function generateAlternateUrls(path: string = '') {
  const baseUrl = 'https://kierstudio.com';
  const fullPath = path ? `${path}` : '';
  
  return {
    canonical: `${baseUrl}${fullPath}`,
    languages: {
      'en': `${baseUrl}/en${fullPath}`,
      'es': `${baseUrl}/es${fullPath}`,
      'x-default': `${baseUrl}${fullPath}`,
    },
  };
}
