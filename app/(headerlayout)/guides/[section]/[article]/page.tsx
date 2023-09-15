import React from "react";
import fs from "fs";
// import { CustomLink, Table } from "../../../components/markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export async function generateStaticParams(): Promise<
    Array<{ params: { section: string; article: string } }>
> {
    const sections = fs.readdirSync("content/guides");
    const articles = sections.map((section) => {
        const sectionArticles = fs.readdirSync(`content/guides/${section}`);
        return sectionArticles.map((article) => ({
            params: {
                section,
                article,
            },
        }));
    });
    return articles.flat();
}

export default function Page({
    params,
}: {
    params: {
        section: string;
        article: string;
    };
}): JSX.Element {
    const articlePath = params.section + "/" + params.article;
    const markdownArticle = fs.readFileSync(
        `content/guides/${articlePath}.md`,
        "utf8",
    );
    return (
        <>
            <div className="text-polar-4 mb-10 ml-10 mr-10 mt-10 font-bold text-xl">
                <Link href="/guides" className="hover:underline">
                    guides
                </Link>
                <span className="text-polar-4"> &gt; </span>
                <Link
                    href={`/guides/${params.section}`}
                    className="hover:underline"
                >
                    {params.section}
                </Link>
                <span className="text-polar-4"> &gt; </span>
                <Link
                    href={`/guides/${params.section}/${params.article}`}
                    className="hover:underline"
                >
                    {params.article}
                </Link>
            </div>

            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    // a: CustomLink,
                    // table: Table,
                    h1: ({ node, ...props }) => (
                        <h1
                            {...props}
                            className="mb-2 mt-8 text-4xl font-bold"
                        />
                    ),
                    h2: ({ node, ...props }) => (
                        <h2
                            {...props}
                            className="mb-2 mt-6 text-3xl font-bold"
                        />
                    ),
                    h3: ({ node, ...props }) => (
                        <h3
                            {...props}
                            className="mb-2 mt-4 text-2xl font-bold"
                        />
                    ),
                    h4: ({ node, ...props }) => (
                        <h4
                            {...props}
                            className="mb-2 mt-2 text-xl font-bold"
                        />
                    ),
                    code: ({ node, ...props }) => (
                        <code {...props} className="bg-polar-1" />
                    ),
                }}
                className="prose mx-auto mt-8 max-w-5xl leading-8"
            >
                {markdownArticle}
            </ReactMarkdown>
        </>
    );
}
