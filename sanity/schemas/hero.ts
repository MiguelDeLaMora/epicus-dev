import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero — Inicio',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow (texto pequeño arriba)',
      type: 'string',
    }),
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaPrimario',
      title: 'Botón primario',
      type: 'string',
    }),
    defineField({
      name: 'ctaSecundario',
      title: 'Botón secundario',
      type: 'string',
    }),
    defineField({
      name: 'stat1Num',
      title: 'Stat 1 — Número',
      type: 'string',
    }),
    defineField({
      name: 'stat1Label',
      title: 'Stat 1 — Label',
      type: 'string',
    }),
    defineField({
      name: 'stat2Num',
      title: 'Stat 2 — Número',
      type: 'string',
    }),
    defineField({
      name: 'stat2Label',
      title: 'Stat 2 — Label',
      type: 'string',
    }),
    defineField({
      name: 'stat3Num',
      title: 'Stat 3 — Número',
      type: 'string',
    }),
    defineField({
      name: 'stat3Label',
      title: 'Stat 3 — Label',
      type: 'string',
    }),
  ],
})