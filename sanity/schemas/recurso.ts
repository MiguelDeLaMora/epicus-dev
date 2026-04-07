import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'recurso',
  title: 'Recurso',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: ['Inversión', 'Mercado', 'Industrial', 'Finanzas', 'Guía'],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha de publicación',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'resumen',
      title: 'Resumen (se muestra en la card)',
      type: 'string',
    }),
    defineField({
      name: 'imagenDestacada',
      title: 'Imagen destacada',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'cuerpo',
      title: 'Cuerpo del artículo',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
    }),
  ],
})