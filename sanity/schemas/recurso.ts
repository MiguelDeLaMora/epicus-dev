import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'recurso',
  title: 'Recurso',
  type: 'document',
  fields: [
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      description: 'Ej: Inversión, Mercado, Industrial, Finanzas, Guía',
    }),
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'resumen',
      title: 'Resumen (pie de card)',
      type: 'string',
    }),
    defineField({
      name: 'cuerpo',
      title: 'Cuerpo del artículo',
      type: 'text',
    }),
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
    }),
  ],
})