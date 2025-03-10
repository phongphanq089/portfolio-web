import { defineType, defineArrayMember } from 'sanity'
import { UserIcon } from '@sanity/icons'

import TitleStyle from '@/sanity/customs/TitleStyle'
import ExternalLinkRenderer from '@/sanity/customs/ExternalLinkRenderer'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'code',
    },
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineArrayMember({
      title: 'Block',
      type: 'block',

      styles: [
        {
          title: 'Title',
          value: 'title',
          component: TitleStyle,
        },
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Hidden', value: 'blockComment' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          {
            title: 'Highlight',
            value: 'highlight',
            icon: () => 'H',
          },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.regex(
                    /https:\/\/(www\.|)(portabletext\.org|sanity\.io)\/.*/gi,
                    {
                      name: 'internal url',
                      invert: true,
                    }
                  ).warning(
                    `This is not an external link. Consider using internal links instead.`
                  ),
              },
            ],
            components: {
              annotation: ExternalLinkRenderer,
            },
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: UserIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'post' },
                  { type: 'category' },
                  { type: 'tags' },
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    }),
  ],
})
