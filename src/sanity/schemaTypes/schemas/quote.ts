import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Quotes',
  title: 'quote',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'bgColor',
      title: 'Color',
      type: 'string',
    }),
    defineField({
      name: 'Description',
      title: 'description',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
        }),
        defineField({
          name: 'vi',
          title: 'Vietnamese',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'Image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
  ],
})
