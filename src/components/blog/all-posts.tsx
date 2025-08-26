import { getAllPosts } from "@/lib/post";
import Link from "next/link";

export function AllPostComponent() {
  const posts = getAllPosts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <ul>
        {posts.map(({ slug, title, date, description }) => (
          <li key={slug} className="mb-6">
            <Link href={`/blog/${slug}`} className="group">
              <h2 className="text-2xl font-semibold group-hover:text-blue-600">
                {title}
              </h2>
              <time dateTime={date}>{formatDate(date)}</time>
              <p className="text-gray-700 dark:text-white/65">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
