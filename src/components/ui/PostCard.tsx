import { Post } from "contentlayer/generated";
import Link from "next/link";
import { format, parseISO } from 'date-fns'

// PostCard component to display individual blog posts
export function PostCard(post: Post) {
    return (
        <div className="mb-8">
            {/* Post title with link to full post */}
            <h2 className="mb-1 text-xl font-bold">
                <Link
                    href={post.url}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                >
                    {post.title}
                </Link>
            </h2>
            {/* Formatted date display */}
            <time dateTime={post.date} className="mb-2 block text-xs text-gray-600 dark:text-gray-400">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            {/* Post content preview with HTML rendering */}
            <div className="prose dark:prose-invert prose-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
                dangerouslySetInnerHTML={{ __html: post.body.html }}
            />
        </div>
    )
}