import { allPosts, Post } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

interface PostPageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return allPosts.map((post: Post) => ({
        slug: post.slug,
    }))
}

export default function PostPage({ params }: PostPageProps) {
    // Find the post for the current page
    const post = allPosts.find((post: Post) => post.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="mx-auto max-w-xl py-8">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <time dateTime={post.date} className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </time>
            </div>
            {/* 
              Render the post's HTML content using dangerouslySetInnerHTML
              
              SECURITY NOTE: This is safe here because:
              1. Content is processed by Contentlayer at build time
              2. Markdown is sanitized during the build process
              3. No user-generated content is being rendered
              
              We use this instead of direct insertion because:
              - The content is pre-processed HTML from markdown
              - It preserves HTML elements and formatting
              - It allows for rich content (lists, code blocks, etc.)
              
              The 'prose' class from @tailwindcss/typography provides
              consistent styling for the markdown content
            */}
            <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </article>
    )
} 