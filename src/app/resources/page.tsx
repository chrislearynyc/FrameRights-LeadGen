import Link from "next/link";
import { generateResourceMetadata } from "@/lib/metadata";

export const metadata = generateResourceMetadata({
    title: "Resources — FrameRights",
    description:
        "Clear explanations of image usage rights, licensing, and common issues. Reference material for photographers and clients.",
    path: "/resources",
});

export default function ResourcesPage() {
    return (
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

            {/* Resources index content */}
            <main className="max-w-3xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-semibold text-slate-900 mb-4">
                    Resources
                </h1>
                <p className="text-lg text-slate-600 mb-16 leading-relaxed">
                    Clear explanations of image usage rights, licensing, and common
                    issues. No sales pitch—just reference material.
                </p>

                {/* Image usage basics */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                        Image Usage Basics
                    </h2>
                    <div className="space-y-4">
                        <ResourceLink
                            href="/resources/what-are-image-usage-rights"
                            title="What Image Usage Rights Actually Mean"
                            description="Core explainer in plain English"
                        />
                        <ResourceLink
                            href="/resources/start-here-image-usage"
                            title="Start Here: Image Usage, Explained Without Legal Language"
                            description="Default introduction for non-photographers"
                        />
                    </div>
                </section>

                {/* Practical examples */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                        Practical Examples
                    </h2>
                    <div className="space-y-4">
                        <ResourceLink
                            href="/resources/public-license-record-example"
                            title="A Simple Public License Record"
                            description="Show, don't explain"
                        />
                        <ResourceLink
                            href="/resources/licensing-vs-file-delivery"
                            title="Licensing vs File Delivery"
                            description="Why getting the files isn't the license"
                        />
                    </div>
                </section>

                {/* Common issues */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                        Common Issues
                    </h2>
                    <div className="space-y-4">
                        <ResourceLink
                            href="/resources/common-image-usage-mistakes"
                            title="Common Ways Image Usage Gets Broken"
                            description="And how to avoid it"
                        />
                        <ResourceLink
                            href="/resources/why-clear-image-usage-helps-clients"
                            title="Why Clear Image Usage Helps Clients"
                            description="Not just photographers"
                        />
                    </div>
                </section>

                {/* About these resources */}
                <section className="pt-12 border-t border-slate-100">
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">
                        About These Resources
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        These pages exist to explain image licensing clearly. They're
                        written to be shared, cited, and linked to. No CTAs, no product
                        pitch—just documentation of how image usage rights actually work.
                    </p>
                </section>
            </main>
        </div>
    );
}

function ResourceLink({
    href,
    title,
    description,
}: {
    href: string;
    title: string;
    description: string;
}) {
    return (
        <Link
            href={href}
            className="block p-6 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all"
        >
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600">{description}</p>
        </Link>
    );
}
