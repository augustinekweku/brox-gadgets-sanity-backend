import {defineField, defineType} from 'sanity'
import {CATEGORIES, PRODUCT_CONDITIONS} from '../utils/constants'

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
        list: [
          {title: CATEGORIES.phones.name, value: CATEGORIES.phones.value},
          {title: CATEGORIES.laptops.name, value: CATEGORIES.laptops.value},
          {title: CATEGORIES.tablets.name, value: CATEGORIES.tablets.value},
          {title: CATEGORIES.headphones.name, value: CATEGORIES.headphones.value},
          {title: CATEGORIES.earbuds.name, value: CATEGORIES.earbuds.value},
          {title: CATEGORIES.accessories.name, value: CATEGORIES.accessories.value},
          {title: CATEGORIES.consoles.name, value: CATEGORIES.consoles.value},
          {title: CATEGORIES.clothing.name, value: CATEGORIES.clothing.value},
        ],
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
  ],
})
