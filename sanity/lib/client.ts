import { createClient } from 'next-sanity'
import { recursosQuery } from './queries'

export const client = createClient({
  projectId: 'hoq99nai',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function getRecursos() {
  return client.fetch(recursosQuery)
}