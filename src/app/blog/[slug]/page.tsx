import { getAllPosts, getPostData } from "@/lib/post";
import { PostComponent } from "@/components/blog/get-post";

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Params) {
  const post = await getPostData(params.slug);
  return {
    title: post.title,
    description:  post.description || "Conteúdo cristão",
  };
}

export default async function PostPage({ params }: Params) {
  const post = await getPostData(params.slug);

  return (
    <PostComponent
      title={post.title}
      date={post.date}
      category={post.category}
      contentHtml={post.contentHtml}
    />
  );
}
