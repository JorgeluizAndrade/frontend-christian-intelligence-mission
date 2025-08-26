'use client';

import Link from "next/link";
import { Card } from "../ui/card";

interface PostProps {
  title: string;
  date: string;
  category?: string;
  contentHtml: string;
}

export function PostComponent({ title, date, category, contentHtml }: PostProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-950 to-gray-900 text-white py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Cabeçalho do Post */}
        <header className="mb-10 border-b border-blue-800 pb-6">
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 text-sm mb-4 inline-block"
          >
            ← Voltar para todos os posts
          </Link>
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-blue-300">
            <time dateTime={date}>{formatDate(date)}</time>
            {category && (
              <span className="px-3 py-1 bg-blue-800/50 rounded-full text-xs uppercase tracking-wide">
                {category}
              </span>
            )}
          </div>
        </header>

        
        <article
          className="prose 
          hyphens-auto
          prose-lg max-w-none prose-invert 
          prose-headings:text-blue-200 
          prose-a:text-blue-400 hover:prose-a:text-blue-300 
          prose-strong:text-white 
          prose-blockquote:border-blue-500 
          prose-blockquote:text-blue-100
          prose-pre:max-w-full break-words overflow-x-auto
          "
          

          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

    </div>

        {/* Rodapé */}
        <footer className="mt-12 pt-6 border-t border-blue-800 text-blue-300 text-sm">
          Que a graça e a paz de Cristo estejam conosco! 🙏
        </footer>
      </div>
    </div>
  );
}
