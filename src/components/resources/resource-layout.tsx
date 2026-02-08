import Link from "next/link";
import { generateArticleSchema } from "@/lib/metadata";

interface ResourceLayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
    url: string;
}

export function ResourceLayout({
    children,
    title,
    description,
    url,
}: ResourceLayoutProps) {
    const schema = generateArticleSchema({
        headline: title,
        description,
        url: `https://framerights.com${url}`,
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className="min-h-screen bg-white">
                {/* Simple header */}
                <header className="border-b border-slate-100 bg-white">
                    <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-semibold text-slate-900 tracking-tight hover:text-slate-700 transition-colors"
                        >
                            FrameRights
                        </Link>
                    </div>
                </header>

                {/* Article content */}
                <article className="max-w-3xl mx-auto px-6 py-16">
                    <div className="prose prose-slate max-w-none">
                        <h1 className="text-4xl font-semibold text-slate-900 mb-6 leading-tight">
                            {title}
                        </h1>
                        {children}
                    </div>
                </article>
            </div>
        </>
    );
}
