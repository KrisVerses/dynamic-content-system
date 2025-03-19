// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'


/*
This configuration specifies a single document type called Post. These documents are expected to be Markdown files that live within a posts directory in your project.

Any data objects generated from these files will contain the fields specified above, along with a body field that contains the raw and HTML content of the file. The url field is a special computed field that gets automatically added to all post documents, based on meta properties from the source file.
*/

// Define the structure and validation rules for our content documents
export const Post = defineDocumentType(() => ({
  // Name of the document type - used for type generation and validation
  name: 'Post',
  
  // Pattern to match files - in this case, any .md file
  filePathPattern: `**/*.md`,
  
  // Define required fields and their types for each document
  fields: {
    title: { type: 'string', required: true },  // Every post must have a title
    date: { type: 'date', required: true },     // Every post must have a date
  },
  
  // Define computed fields that are generated based on document data
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    // Generate a URL for each post based on its file path
    url: { 
      type: 'string', 
      resolve: (post) => `/posts/${post._raw.flattenedPath}` //_raw.flattenedPath is a property that returns the path of the file without the file extension.
    },
  },
}))

// Configure the content source
export default makeSource({ 
  // Directory where content files are located
  contentDirPath: 'src/content/posts',
  // List of document types to process
  documentTypes: [Post]
})