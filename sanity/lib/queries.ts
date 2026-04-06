import { groq } from 'next-sanity'

export const recursosQuery = groq`
  *[_type == "recurso"] | order(orden asc) {
    _id,
    categoria,
    titulo,
    resumen,
    cuerpo,
    orden
  }
`

export const imagenQuery = groq`
  *[_type == "imagenSitio" && seccion == $seccion][0] {
    imagen,
    alt
  }
`

export const heroQuery = groq`
  *[_type == "hero"][0] {
    eyebrow,
    titulo,
    descripcion,
    ctaPrimario,
    ctaSecundario,
    stat1Num,
    stat1Label,
    stat2Num,
    stat2Label,
    stat3Num,
    stat3Label,
  }
`