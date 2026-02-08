import { generateResourceMetadata } from "@/lib/metadata";
import { ResourceLayout } from "@/components/resources/resource-layout";
import { ResourceNav } from "@/components/resources/resource-nav";

export const metadata = generateResourceMetadata({
    title: "A Simple Public License Record (Example)",
    description:
        "See what a clear, readable image license record looks like in practice.",
    path: "/resources/public-license-record-example",
});

export default function PublicLicenseRecordExamplePage() {
    return (
        <ResourceLayout
            title="A Simple Public License Record (Example)"
            description="See what a clear license record looks like in practice."
            url="/resources/public-license-record-example"
        >
            <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-xl text-slate-800">
                    Here's what a straightforward image license record looks like. No
                    legal jargon. Just the facts.
                </p>

                <div className="my-12 p-8 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                                License Record
                            </h3>
                            <p className="text-2xl font-semibold text-slate-900">
                                Brand Photography for Acme Coffee Co.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                            <div>
                                <p className="text-sm font-semibold text-slate-500 mb-1">
                                    Photographer
                                </p>
                                <p className="text-slate-900">Sarah Chen Photography</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-500 mb-1">
                                    Client
                                </p>
                                <p className="text-slate-900">Acme Coffee Co.</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-200">
                            <p className="text-sm font-semibold text-slate-500 mb-3">
                                Licensed Images
                            </p>
                            <p className="text-slate-700">
                                15 images from photoshoot on January 15, 2026
                            </p>
                        </div>

                        <div className="pt-6 border-t border-slate-200">
                            <p className="text-sm font-semibold text-slate-500 mb-3">
                                Permitted Use
                            </p>
                            <ul className="space-y-2 text-slate-700">
                                <li>• Website and social media marketing</li>
                                <li>• Email newsletters</li>
                                <li>• In-store displays</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                            <div>
                                <p className="text-sm font-semibold text-slate-500 mb-1">
                                    Duration
                                </p>
                                <p className="text-slate-900">2 years (until Jan 15, 2028)</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-500 mb-1">
                                    Territory
                                </p>
                                <p className="text-slate-900">United States</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-200">
                            <p className="text-sm font-semibold text-slate-500 mb-1">
                                Exclusivity
                            </p>
                            <p className="text-slate-900">
                                Non-exclusive (photographer may license to others)
                            </p>
                        </div>

                        <div className="pt-6 border-t border-slate-200">
                            <p className="text-sm font-semibold text-slate-500 mb-3">
                                Restrictions
                            </p>
                            <ul className="space-y-2 text-slate-700">
                                <li>• No resale or sublicensing</li>
                                <li>• No use in paid advertising without additional license</li>
                                <li>• Credit required when feasible</li>
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-slate-200 text-sm text-slate-500">
                            <p>Issued: January 20, 2026</p>
                            <p>License ID: FR-2026-0120-AC</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    What Makes This Work
                </h2>
                <p>This license record is effective because it's:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Clear</strong> — Anyone can read it and understand what's
                        allowed
                    </li>
                    <li>
                        <strong>Specific</strong> — No ambiguity about terms or scope
                    </li>
                    <li>
                        <strong>Complete</strong> — All relevant details are included
                    </li>
                    <li>
                        <strong>Readable</strong> — Written in plain language, not legalese
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Key Elements Explained
                </h2>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
                    Permitted Use
                </h3>
                <p>
                    This section spells out exactly what the client can do with the
                    images. It's specific enough to be clear, but not so restrictive that
                    it's impractical.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
                    Duration
                </h3>
                <p>
                    The license has a clear end date. After January 15, 2028, the client
                    would need to renew or stop using the images.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
                    Territory
                </h3>
                <p>
                    Usage is limited to the United States. If the client wanted to use
                    the images internationally, they'd need a different license.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
                    Exclusivity
                </h3>
                <p>
                    This is non-exclusive, meaning the photographer can license the same
                    images to other clients. If Acme wanted exclusive rights, that would
                    cost more.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
                    Restrictions
                </h3>
                <p>
                    These clarify what's <em>not</em> allowed. The client can't resell
                    the images or use them in paid ads without upgrading the license.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Why Document It This Way
                </h2>
                <p>
                    A license record like this serves both parties. The photographer has
                    a clear record of what they authorized. The client has proof of what
                    they're allowed to do.
                </p>

                <p>
                    If there's ever a question—"Can we use this in a magazine ad?" or
                    "Can we use this after 2028?"—the answer is right here. No guessing.
                    No disputes.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Variations
                </h2>
                <p>
                    Not every license needs to look exactly like this. Some might be
                    simpler (personal use only). Some might be more complex (multi-year,
                    multi-territory, exclusive rights).
                </p>

                <p>
                    The key is that the terms are documented clearly, in writing, in a
                    way both parties can reference.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    The Bottom Line
                </h2>
                <p>
                    A good license record doesn't need to be complicated. It just needs
                    to be clear, complete, and readable.
                </p>

                <p>
                    When both parties can look at the same document and understand the
                    terms, that's when licensing works.
                </p>
            </div>

            <ResourceNav
                currentPage="/resources/public-license-record-example"
                siblingPage={{
                    title: "Common Ways Image Usage Gets Broken",
                    href: "/resources/common-image-usage-mistakes",
                }}
            />
        </ResourceLayout>
    );
}
