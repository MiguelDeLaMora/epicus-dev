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