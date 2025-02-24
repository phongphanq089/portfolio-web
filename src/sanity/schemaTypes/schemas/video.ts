import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'video',
  title: 'video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
    }),
    defineField({
      name: 'videoURL',
      title: 'Video URL',
      type: 'url',
      description: 'Nhúng video từ URL (YouTube, Vimeo, etc.)',
    }),
    defineField({
      name: 'videoFile',
      title: 'Upload Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
  ],
})
