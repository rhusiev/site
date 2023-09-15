import React from "react";
import { TextCard } from "../../components/card";
import { getGuidesForSection } from "../../lib/guides";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export async function generateStaticParams(): Promise<
    Array<{ params: { section: string } }>
> {
    const sections = fs.readdirSync("content/guides");
    return sections.map((section) => ({
        params: {
            section,
        },
    }));
}

export default function Page({
    params,
}: {
    params: {
        section: string;
    };
}): JSX.Element {
    const section = params.section;
    const guides = getGuidesForSection(section);
    return (
        <>
            <div className="text-polar-4 mb-10 ml-10 mr-10 mt-10 font-bold text-xl">
                <Link href="/guides" className="hover:underline">
                    guides
                </Link>
                <span className="text-polar-4"> &gt; </span>
                <Link href={`/guides/${section}`} className="hover:underline">
                    {section}
                </Link>
            </div>
            <div className="ml-10 mr-10 mt-20 flex flex-wrap justify-center gap-6 text-center md:gap-10">
                {guides.map((guide) => (
                    <TextCard
                        key={guide.fileName}
                        href={`/guides/${section}/${guide.fileName}`}
                        text={
                            <ReactMarkdown
                                components={{
                                    code: ({ node, ...props }) => (
                                        <code
                                            {...props}
                                            className="bg-polar-3"
                                        />
                                    ),
                                }}
                            >
                                {guide.title}
                            </ReactMarkdown>
                        }
                    />
                ))}
            </div>
        </>
    );
}
