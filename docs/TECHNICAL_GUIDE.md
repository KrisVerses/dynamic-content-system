# VersesLab Technical Implementation Guide

## Development Environment Setup

### Prerequisites
- Node.js 18.17 or later
- Next.js 13.5.6 (specific version for Contentlayer compatibility)
- Git for version control
- VS Code with recommended extensions

### Version Requirements
```json
{
  "dependencies": {
    "contentlayer": "0.3.4",
    "next-contentlayer": "0.3.4",
    "next": "13.5.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### Critical Configuration Files

1. **next.config.js** (NOT .ts)
```javascript
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withContentlayer(nextConfig)
```

2. **contentlayer.config.js** (NOT .ts)
```javascript
const { defineDocumentType, makeSource } = require('contentlayer/source-files')

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    url: { 
      type: 'string', 
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    },
  },
}))

module.exports = makeSource({ 
  contentDirPath: 'src/content/posts',
  documentTypes: [Post]
})
```

## Project Structure
```
src/
├── app/                    # Next.js App Router directory
│   ├── posts/             # Post routes
│   │   └── [slug]/        # Dynamic post pages
│   └── page.tsx           # Home page
├── content/               # Content files
│   └── posts/            # Markdown posts
└── components/           # Reusable components (optional)
```

## Known Issues and Solutions

### Configuration Issues
1. **Next.js Configuration**
   - Use `.js` not `.ts` for config files
   - Specific version requirements for compatibility
   - Clear cache when changing config

2. **Font Loading**
   - Use Google Fonts through next/font/google
   - Avoid custom font loading initially
   - Use supported font configurations

3. **Content Processing**
   - Clear `.contentlayer` cache frequently
   - Restart dev server after config changes
   - Use correct file extensions (.md)

### Performance Considerations
1. **Build Performance**
   - Keep content directory structure flat
   - Use appropriate file extensions
   - Minimize unnecessary recompilation

2. **Runtime Performance**
   - Implement proper caching
   - Use static generation
   - Optimize images and assets

## Testing and Validation

### Content Testing
1. **Markdown Validation**
   - Verify frontmatter structure
   - Check content rendering
   - Test dynamic routing

2. **Build Testing**
   - Verify static generation
   - Check dynamic routes
   - Test content updates

## Deployment Checklist

### Pre-deployment
1. Clean installation
   ```bash
   rm -rf node_modules .next .contentlayer
   npm install
   ```

2. Build verification
   ```bash
   npm run build
   ```

3. Version check
   - Verify Next.js version (13.5.6)
   - Check Contentlayer version (0.3.4)
   - Validate dependencies

### Post-deployment
1. Verify routes
2. Check content rendering
3. Validate dynamic pages
4. Monitor performance

## Maintenance

### Regular Tasks
1. Version updates
   - Check compatibility matrix
   - Test before upgrading
   - Document changes

2. Content updates
   - Clear cache after updates
   - Verify new content
   - Check build process

### Troubleshooting
1. Clear build cache
   ```bash
   rm -rf .next .contentlayer
   ```

2. Restart development
   ```bash
   npm run dev
   ```

3. Check for errors
   - Console errors
   - Build errors
   - Runtime errors

## Content Architecture

### MDX File Structure
```