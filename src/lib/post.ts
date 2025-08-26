import path from "path";
import fs from "fs";
import remarkGfm from 'remark-gfm';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypePrism from 'rehype-prism';
import rehypeStringify from 'rehype-stringify';


import matter from "gray-matter";
import { Post } from "./types";

const postsDirectory = path.join(process.cwd(), 'conteudos/post');


export async function readPost(year: string, fileName: string): Promise<Post | null> {
    const fullPath = path.join(postsDirectory, year, fileName);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug: `${year}/${fileName.replace(/\.md$/, "")}`,
        title: data.title,
        category: data.category,
        publishedAt: data.publishedAt,
        isPublished: data.isPublished,
        description: data.description,
        content,
    };
}


export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPost = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            slug,
            ...(matterResult.data as {
              title: string;
              date: string;
              category: string;
              tipo: string;
              description?: string;
            }),
          };
        });
      
        return allPost.sort((a, b) => (a.date < b.date ? 1 : -1));

}


export async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypePrism)
        .use(rehypeStringify)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        ...(matterResult.data as { title: string; category: string; date: string; tipo: string, description: string }),
    };
}