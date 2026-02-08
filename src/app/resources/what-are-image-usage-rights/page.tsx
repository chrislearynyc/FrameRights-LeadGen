import { generateResourceMetadata } from "@/lib/metadata";
import { ResourceLayout } from "@/components/resources/resource-layout";
import { ResourceNav } from "@/components/resources/resource-nav";

export const metadata = generateResourceMetadata({
    title: "What Image Usage Rights Actually Mean (Plain English Guide)",
    description:
        "A clear explanation of image usage rights without legal jargon. Understand what photographers license and what clients receive.",
    path: "/resources/what-are-image-usage-rights",
});

export default function WhatAreImageUsageRightsPage() {
    return (
        <ResourceLayout
            title="What Image Usage Rights Actually Mean (Plain English)"
            description="A clear explanation of image usage rights without legal jargon."
            url="/resources/what-are-image-usage-rights"
        >
            <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-xl text-slate-800">
                    When a photographer takes a picture, they own it. But ownership and
                    permission to use are different things.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    The Core Concept
                </h2>
                <p>
                    Image usage rights define <strong>who can use an image</strong>,{" "}
                    <strong>how they can use it</strong>, and{" "}
                    <strong>under what conditions</strong>. These rights are separate
                    from the image file itself.
                </p>

                <p>
                    Think of it like renting a car: you get the keys (the files), but
                    that doesn't mean you own the car or can do whatever you want with
                    it. The rental agreement (the license) spells out what's allowed.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    What Gets Licensed
                </h2>
                <p>When a photographer licenses an image, they typically specify:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Purpose</strong> — What the image can be used for (website,
                        print ad, social media, etc.)
                    </li>
                    <li>
                        <strong>Duration</strong> — How long the license lasts (one year,
                        perpetual, etc.)
                    </li>
                    <li>
                        <strong>Territory</strong> — Where the image can be used
                        (worldwide, US only, etc.)
                    </li>
                    <li>
                        <strong>Exclusivity</strong> — Whether the client has exclusive use
                        or if others can license it too
                    </li>
                    <li>
                        <strong>Medium</strong> — Digital, print, broadcast, or all of the
                        above
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Why This Matters
                </h2>
                <p>
                    Without clear usage rights, both photographers and clients are at
                    risk. Photographers can't enforce their terms if they're not
                    documented. Clients can't prove they have permission if it's not
                    written down.
                </p>

                <p>
                    Image usage rights aren't about being difficult—they're about being
                    clear. When everyone knows what's allowed, there are no surprises.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Common Misconceptions
                </h2>
                <p>
                    <strong>"If I paid for the photos, I own them."</strong>
                    <br />
                    Not automatically. Payment is for the license, not ownership transfer
                    (unless explicitly stated).
                </p>

                <p>
                    <strong>"If I have the files, I can use them however I want."</strong>
                    <br />
                    No. Having the files is like having a book—you can read it, but you
                    can't republish it without permission.
                </p>

                <p>
                    <strong>"Usage rights are just legal mumbo jumbo."</strong>
                    <br />
                    They're actually protection for both sides. Clear terms prevent
                    disputes.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    The Bottom Line
                </h2>
                <p>
                    Image usage rights are simply the rules for how an image can be used.
                    They protect photographers' work and give clients clarity about
                    what they're allowed to do.
                </p>

                <p>
                    When these rights are documented clearly, everyone benefits. No
                    confusion, no conflicts, no surprises.
                </p>
            </div>

            <ResourceNav
                currentPage="/resources/what-are-image-usage-rights"
                siblingPage={{
                    title: "Licensing vs File Delivery",
                    href: "/resources/licensing-vs-file-delivery",
                }}
            />
        </ResourceLayout>
    );
}
