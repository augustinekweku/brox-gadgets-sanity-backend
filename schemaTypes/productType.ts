import {defineField, defineType} from 'sanity'
import {CATEGORIES, PRODUCT_CONDITIONS, PRODUCT_PUBLISH_STATUS} from '../utils/constants'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'image2',
      type: 'image',
    }),
    defineField({
      name: 'image3',
      type: 'image',
    }),
    defineField({
      name: 'image4',
      type: 'image',
    }),
    //category field
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: Object.values(CATEGORIES).map((category) => ({
          title: category.name,
          value: category.value,
        })),
      },
      validation: (rule) => rule.required(),
    }),

    //condition field
    defineField({
      name: 'condition',
      type: 'string',
      options: {
        list: [
          {title: PRODUCT_CONDITIONS.new.name, value: PRODUCT_CONDITIONS.new.value},
          {title: PRODUCT_CONDITIONS.used.name, value: PRODUCT_CONDITIONS.used.value},
          {title: PRODUCT_CONDITIONS.openBox.name, value: PRODUCT_CONDITIONS.openBox.value},
          {title: PRODUCT_CONDITIONS.foreignUsed.name, value: PRODUCT_CONDITIONS.foreignUsed.value},
          {title: PRODUCT_CONDITIONS.refurbished.name, value: PRODUCT_CONDITIONS.refurbished.value},
        ],
      },
      validation: (rule) => rule.required(),
    }),

    //price field
    defineField({
      name: 'price',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),

    //product status field
    defineField({
      name: 'publishStatus',
      type: 'string',
      options: {
        list: [
          {
            title: PRODUCT_PUBLISH_STATUS.published.name,
            value: PRODUCT_PUBLISH_STATUS.published.value,
          },
          {
            title: PRODUCT_PUBLISH_STATUS.archived.name,
            value: PRODUCT_PUBLISH_STATUS.archived.value,
          },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
