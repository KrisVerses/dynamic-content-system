import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { PostCard } from "./PostCard";

// Home page component
export default function Home() {
  // Sort posts by date in descending order (newest first)
  const posts = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto max-w-xl py-8 px-4">
      <h1 className="mb-8 text-center text-2xl font-bold">
        Next.js + Contentlayer Example
      </h1>
      {/* Map through sorted posts and render PostCard for each */}
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
