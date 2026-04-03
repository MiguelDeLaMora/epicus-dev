import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'imagenSitio',
  title: 'Imágenes del sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'seccion',
      title: 'Sección',
      type: 'string',
      description: 'Ej: hero, propuesta, nosotros',
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'alt',
      title: 'Texto alternativo',
      type: 'string',
    }),
  ],
})