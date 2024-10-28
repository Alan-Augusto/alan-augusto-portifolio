// /app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Header from '@/components/header';

interface Params {
    slug: string;
}

const ArticlePage = async ({ params }: { params: Params }) => {
    const { slug } = params;
    const articlePath = path.join(process.cwd(), 'src/data/blog/articles', slug, 'index.md');
    // /home/alan-augusto/github/alan-augusto-portifolio/nextjs/portifolio-alan-augusto/src/data/blog/articles/article1/index.md

    if (!fs.existsSync(articlePath)) {
        return notFound();
    }

    const fileContents = fs.readFileSync(articlePath, 'utf8');
    const { content, data: frontMatter } = matter(fileContents);

    return (
        <div className="w-full">
            <Header />
            <div className="prose mx-auto pt-10 mt-10 px-5">
                <h1 className="text-center mt-10 sm:mt-5">{frontMatter.title}</h1>
                <div>
                    <MDXRemote source={content} />
                </div>
            </div>

        </div>
    );
};

export default ArticlePage;
