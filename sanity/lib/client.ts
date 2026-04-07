import { createClient } from 'next-sanity'
import { recursosQuery, imagenQuery, heroQuery } from './queries'
import { recursoBySlugQuery } from './queries'

export const client = createClient({
  projectId: 'hoq99nai',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})

export async function getRecursos() {
  return client.fetch(recursosQuery)
}

export async function getImagen(seccion: string) {
  return client.fetch(imagenQuery, { seccion })
}

export async function getHero() {
  return client.fetch(heroQuery)
}

export async function getRecursoBySlug(slug: string) {
  return client.fetch(recursoBySlugQuery, { slug })
}