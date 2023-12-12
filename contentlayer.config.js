import { makeSource, defineDocumentType } from '@contentlayer/source-files';

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/**/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    updatedAt: {
      type: 'date',
    },
    docType: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'image',
      required: true,
    },
    isPublished: {
      type: 'boolean',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc],
});
