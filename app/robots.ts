import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    // No se bloquea nada, y es deliberado.
    //
    // Las páginas legales (/privacy, /terms, /cookies) no se indexan, pero eso
    // se resuelve con `noindex` en la metadata de cada una — no acá. Bloquear
    // el rastreo impediría que Google leyera justamente ese `noindex`, y
    // terminaría indexando la URL igual, sin descripción: lo contrario de lo
    // que se busca. Para sacar una página del índice hay que dejar que la lean.
    //
    // Tampoco van en el sitemap: ofrecerlas y pedir que no se indexen serían
    // señales contradictorias.
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://kierstudio.com/sitemap.xml',
  }
}
