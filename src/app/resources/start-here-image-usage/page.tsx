import { generateResourceMetadata } from "@/lib/metadata";
import { ResourceLayout } from "@/components/resources/resource-layout";
import { ResourceNav } from "@/components/resources/resource-nav";

export const metadata = generateResourceMetadata({
    title: "Start Here: Image Usage, Explained Without Legal Language",
    description:
        "A beginner-friendly introduction to image usage rights for clients, marketers, and anyone working with photography.",
    path: "/resources/start-here-image-usage",
});

export default function StartHereImageUsagePage() {
    return (
        <ResourceLayout
            title="Start Here: Image Usage, Explained Without Legal Language"
            description="A beginner-friendly introduction to image usage rights."
            url="/resources/start-here-image-usage"
        >
            <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-xl text-slate-800">
                    If you're new to working with photographers or managing image
                    licensing, this is your starting point. No legal jargon. Just the
                    basics.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    The One Thing to Understand
                </h2>
                <p>
                    When you hire a photographer and receive image files, you're not
                    automatically buying ownership of those images. You're buying{" "}
                    <strong>permission to use them</strong> in specific ways.
                </p>

                <p>
                    That permission is called a <strong>license</strong>.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Why It Works This Way
                </h2>
                <p>
                    Photography is protected by copyright law, just like music, books,
                    and software. The person who creates it owns it by default.
                </p>

                <p>
                    When you pay a photographer, you're paying for their time, expertise,
                    and the license to use the images. Unless you specifically negotiate
                    to buy full ownership (which is rare and expensive), the photographer
                    retains the copyright.
                </p>

                <p>This isn't unique to photography—it's how creative work operates.</p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    What a License Covers
                </h2>
                <p>A typical image license defines:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>What you can use the images for</strong> (website, social
                        media, print ads, etc.)
                    </li>
                    <li>
                        <strong>How long you can use them</strong> (one year, five years,
                        forever, etc.)
                    </li>
                    <li>
                        <strong>Where you can use them</strong> (US only, worldwide, etc.)
                    </li>
                    <li>
                        <strong>Whether you have exclusive rights</strong> (or if the
                        photographer can license the same images to others)
                    </li>
                </ul>

                <p>
                    The more extensive the license, the higher the cost. A license for
                    website use only costs less than a license for a national ad
                    campaign.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Common Scenarios
                </h2>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
                    Scenario 1: Website Photos
                </h3>
                <p>
                    You hire a photographer to shoot photos for your company website.
                    You'll likely get a license that allows you to use the images on your
                    website and social media for a set period (e.g., two years).
                </p>
                <p>
                    If you later want to use those same images in a print brochure or TV
                    commercial, you'd need to upgrade the license.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
                    Scenario 2: Event Coverage
                </h3>
                <p>
                    You hire a photographer to cover a corporate event. The license might
                    allow you to use the images for internal presentations, your website,
                    and social media.
                </p>
                <p>
                    If you want to sell the images to attendees or use them in paid
                    advertising, that would require a different license.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
                    Scenario 3: Product Photography
                </h3>
                <p>
                    You hire a photographer to shoot product images for your e-commerce
                    site. The license might be perpetual (no expiration) and cover all
                    marketing uses.
                </p>
                <p>
                    If you later sell your company, the new owner might need a new
                    license to continue using the images.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    What Happens If You Don't Have a License
                </h2>
                <p>
                    If you use images without a proper license, you're technically
                    infringing on the photographer's copyright. This can lead to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Legal disputes</li>
                    <li>Unexpected invoices for unauthorized use</li>
                    <li>Damage to your professional relationship with the photographer</li>
                </ul>

                <p>
                    Most photographers won't immediately sue—they'll reach out and ask
                    you to either stop using the images or pay for the additional usage.
                    But it's better to avoid the situation entirely by having clear terms
                    upfront.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    How to Make Sure You're Covered
                </h2>
                <p>Before you start using images, make sure you have:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Written documentation</strong> of what you're allowed to do
                        (contract, invoice, license record, or email confirmation)
                    </li>
                    <li>
                        <strong>Clear terms</strong> that specify the scope, duration, and
                        any restrictions
                    </li>
                    <li>
                        <strong>Easy access</strong> to the license so your team can
                        reference it when needed
                    </li>
                </ul>

                <p>
                    If you're not sure what your license covers, ask the photographer.
                    It's better to clarify upfront than to assume and be wrong.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    What If You Need More Than the Original License?
                </h2>
                <p>
                    If your needs change—maybe you want to use the images in a new way,
                    for a longer period, or in a new market—just ask the photographer to
                    upgrade the license.
                </p>

                <p>
                    Most photographers are happy to expand a license for an additional
                    fee. It's a normal part of the process.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    The Bottom Line
                </h2>
                <p>
                    Image licensing doesn't have to be complicated. The key is to
                    understand that receiving files isn't the same as receiving unlimited
                    permission to use them.
                </p>

                <p>
                    When you have a clear license that documents what you're allowed to
                    do, you're protected. You can use the images confidently, knowing
                    you're operating within the agreed terms.
                </p>

                <p>
                    And if you ever have questions, just ask the photographer. Clear
                    communication solves most problems before they start.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Where to Go Next
                </h2>
                <p>If you want to learn more, check out:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <a
                            href="/resources/what-are-image-usage-rights"
                            className="text-slate-900 underline hover:text-slate-700"
                        >
                            What Image Usage Rights Actually Mean
                        </a>{" "}
                        — A deeper dive into the core concepts
                    </li>
                    <li>
                        <a
                            href="/resources/licensing-vs-file-delivery"
                            className="text-slate-900 underline hover:text-slate-700"
                        >
                            Licensing vs File Delivery
                        </a>{" "}
                        — Why getting the files isn't the same as getting the license
                    </li>
                    <li>
                        <a
                            href="/resources/public-license-record-example"
                            className="text-slate-900 underline hover:text-slate-700"
                        >
                            A Simple Public License Record
                        </a>{" "}
                        — See what a clear license looks like in practice
                    </li>
                </ul>
            </div>

            <ResourceNav
                currentPage="/resources/start-here-image-usage"
                siblingPage={{
                    title: "Common Ways Image Usage Gets Broken",
                    href: "/resources/common-image-usage-mistakes",
                }}
            />
        </ResourceLayout>
    );
}
