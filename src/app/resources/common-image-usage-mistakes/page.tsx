import { generateResourceMetadata } from "@/lib/metadata";
import { ResourceLayout } from "@/components/resources/resource-layout";
import { ResourceNav } from "@/components/resources/resource-nav";

export const metadata = generateResourceMetadata({
    title: "Common Ways Image Usage Gets Broken (and How to Avoid It)",
    description:
        "Understanding common image licensing mistakes and how to prevent them. No blame, just clarity.",
    path: "/resources/common-image-usage-mistakes",
});

export default function CommonImageUsageMistakesPage() {
    return (
        <ResourceLayout
            title="Common Ways Image Usage Gets Broken (and How to Avoid It)"
            description="Understanding common mistakes and how to prevent them."
            url="/resources/common-image-usage-mistakes"
        >
            <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-xl text-slate-800">
                    Image usage mistakes happen all the time. Most aren't intentional—
                    they're the result of unclear terms or simple misunderstandings.
                </p>

                <p>Here are the most common ones, and how to avoid them.</p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    1. Using Images Beyond the Licensed Scope
                </h2>
                <p>
                    <strong>What happens:</strong> A client licenses images for their
                    website, then uses them in a print ad campaign without realizing
                    that's outside the original license.
                </p>
                <p>
                    <strong>Why it happens:</strong> The original license terms weren't
                    specific enough, or the client didn't realize different uses require
                    different permissions.
                </p>
                <p>
                    <strong>How to avoid it:</strong> Document exactly what uses are
                    permitted. If the scope changes, update the license.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    2. Continuing to Use Images After the License Expires
                </h2>
                <p>
                    <strong>What happens:</strong> A client has a one-year license, but
                    keeps using the images on their website for three years.
                </p>
                <p>
                    <strong>Why it happens:</strong> No one tracked the expiration date,
                    or the client didn't realize licenses can have time limits.
                </p>
                <p>
                    <strong>How to avoid it:</strong> Clearly state the duration in the
                    license. Set calendar reminders for renewal or removal.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    3. Transferring Images to Third Parties
                </h2>
                <p>
                    <strong>What happens:</strong> A client gives licensed images to
                    their marketing agency or web developer, who then uses them in ways
                    not covered by the original license.
                </p>
                <p>
                    <strong>Why it happens:</strong> The client assumes that if they have
                    permission, anyone working for them does too.
                </p>
                <p>
                    <strong>How to avoid it:</strong> Specify whether the license allows
                    transfer to contractors or agencies. If it does, make sure those
                    parties understand the terms.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    4. Assuming "Unlimited Use" Without Documentation
                </h2>
                <p>
                    <strong>What happens:</strong> A client pays for photos and assumes
                    they can use them however they want, forever, without any
                    restrictions.
                </p>
                <p>
                    <strong>Why it happens:</strong> The photographer didn't clarify the
                    terms, and the client filled in the blanks with their own
                    assumptions.
                </p>
                <p>
                    <strong>How to avoid it:</strong> Always document the scope, even if
                    it's broad. "Unlimited use" should be explicitly stated, not assumed.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    5. Modifying Images Without Permission
                </h2>
                <p>
                    <strong>What happens:</strong> A client crops, filters, or otherwise
                    edits images without checking if that's allowed.
                </p>
                <p>
                    <strong>Why it happens:</strong> The license didn't address
                    modifications, and the client assumed it was fine.
                </p>
                <p>
                    <strong>How to avoid it:</strong> State whether modifications are
                    permitted. If they are, specify any limits (e.g., "minor cropping
                    okay, but no filters").
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    6. Using Images in Different Territories
                </h2>
                <p>
                    <strong>What happens:</strong> A client licenses images for use in
                    the US, then expands internationally and uses the same images on
                    their global website.
                </p>
                <p>
                    <strong>Why it happens:</strong> The client didn't realize territory
                    restrictions applied, or they forgot about them as the business grew.
                </p>
                <p>
                    <strong>How to avoid it:</strong> Clearly define the territory in the
                    license. If the client's needs change, update the license
                    accordingly.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    7. Forgetting to Credit the Photographer
                </h2>
                <p>
                    <strong>What happens:</strong> The license requires photo credit, but
                    the client forgets or doesn't know how to provide it.
                </p>
                <p>
                    <strong>Why it happens:</strong> The credit requirement wasn't
                    emphasized, or the client didn't understand where/how to add it.
                </p>
                <p>
                    <strong>How to avoid it:</strong> If credit is required, specify
                    exactly how it should appear (e.g., "Photo by [Name]" in caption or
                    metadata).
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    8. Losing Track of Which Images Are Licensed
                </h2>
                <p>
                    <strong>What happens:</strong> A client has hundreds of images from
                    multiple photographers and can't remember which ones they're allowed
                    to use or under what terms.
                </p>
                <p>
                    <strong>Why it happens:</strong> No central record of licenses. Terms
                    are scattered across emails, invoices, and contracts.
                </p>
                <p>
                    <strong>How to avoid it:</strong> Keep a centralized record of all
                    image licenses. Make it easy to look up what's allowed.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Why These Mistakes Happen
                </h2>
                <p>
                    Most image usage mistakes aren't malicious. They happen because:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>The license terms weren't documented clearly</li>
                    <li>The client didn't understand copyright basics</li>
                    <li>The photographer didn't communicate the restrictions</li>
                    <li>Both parties made assumptions instead of asking questions</li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    How to Prevent Them
                </h2>
                <p>The solution is straightforward:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Document everything</strong> — Write down the terms, even
                        if they seem obvious
                    </li>
                    <li>
                        <strong>Be specific</strong> — Don't leave room for interpretation
                    </li>
                    <li>
                        <strong>Make it accessible</strong> — Both parties should be able
                        to reference the license easily
                    </li>
                    <li>
                        <strong>Update when needed</strong> — If the client's needs change,
                        update the license
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    The Bottom Line
                </h2>
                <p>
                    Image usage mistakes are common, but they're also preventable. Clear
                    documentation, specific terms, and open communication solve most
                    problems before they start.
                </p>

                <p>
                    When both parties know exactly what's allowed, there's no confusion.
                    And when there's no confusion, there are no mistakes.
                </p>
            </div>

            <ResourceNav
                currentPage="/resources/common-image-usage-mistakes"
                siblingPage={{
                    title: "Why Clear Image Usage Helps Clients",
                    href: "/resources/why-clear-image-usage-helps-clients",
                }}
            />
        </ResourceLayout>
    );
}
