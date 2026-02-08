import Link from "next/link";

interface ResourceNavProps {
    currentPage: string;
    siblingPage?: {
        title: string;
        href: string;
    };
}

export function ResourceNav({ currentPage, siblingPage }: ResourceNavProps) {
    const isCornerstone =
        currentPage === "/resources/what-are-image-usage-rights";

    return (
        <nav className="border-t border-slate-100 pt-8 mt-12">
            <div className="flex flex-col gap-3 text-sm">
                <Link
                    href="/resources"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                    ← Back to Resources
                </Link>

                {!isCornerstone && (
                    <Link
                        href="/resources/what-are-image-usage-rights"
                        className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        What Image Usage Rights Actually Mean
                    </Link>
                )}

                {siblingPage && (
                    <Link
                        href={siblingPage.href}
                        className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        {siblingPage.title}
                    </Link>
                )}
            </div>
        </nav>
    );
}
