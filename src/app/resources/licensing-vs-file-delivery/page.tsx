import { generateResourceMetadata } from "@/lib/metadata";
import { ResourceLayout } from "@/components/resources/resource-layout";
import { ResourceNav } from "@/components/resources/resource-nav";

export const metadata = generateResourceMetadata({
    title: "Licensing vs File Delivery (Why Getting the Files Isn't the License)",
    description:
        "Understanding the difference between receiving image files and having permission to use them.",
    path: "/resources/licensing-vs-file-delivery",
});

export default function LicensingVsFileDeliveryPage() {
    return (
        <ResourceLayout
            title="Licensing vs File Delivery (Why Getting the Files Isn't the License)"
            description="Understanding the difference between receiving files and having permission."
            url="/resources/licensing-vs-file-delivery"
        >
            <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-xl text-slate-800">
                    One of the most common misunderstandings in photography: receiving
                    the files doesn't mean you have the license.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    File Delivery ≠ License
                </h2>
                <p>
                    When a photographer sends you image files, they're delivering the
                    <strong> physical product</strong>—the digital files themselves.
                    This is like receiving a DVD of a movie.
                </p>

                <p>
                    The <strong>license</strong> is the separate agreement that says what
                    you're allowed to do with those files. Just like owning a DVD doesn't
                    give you the right to broadcast the movie on TV.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Why They're Separate
                </h2>
                <p>
                    Photographers often deliver files before the final license terms are
                    confirmed, or they may deliver the same files to multiple clients
                    with different usage rights for each.
                </p>

                <p>For example:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Client A receives files for use on their website only (limited
                        license)
                    </li>
                    <li>
                        Client B receives the same files for use in a national ad campaign
                        (broader license, higher fee)
                    </li>
                </ul>

                <p>Same files. Different licenses. Different permissions.</p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    What File Delivery Includes
                </h2>
                <p>When you receive image files, you typically get:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>The digital image files (JPG, PNG, RAW, etc.)</li>
                    <li>Access to download or receive them</li>
                    <li>The ability to store them</li>
                </ul>

                <p>
                    <strong>What you don't automatically get:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Permission to publish them</li>
                    <li>Permission to modify them</li>
                    <li>Permission to use them commercially</li>
                    <li>Permission to transfer them to others</li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    What the License Includes
                </h2>
                <p>
                    The license is the legal permission that defines how you can use the
                    files. It specifies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>What you can use the images for</li>
                    <li>How long you can use them</li>
                    <li>Where you can use them</li>
                    <li>Whether you can modify them</li>
                    <li>Whether your usage is exclusive</li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Why This Confusion Exists
                </h2>
                <p>
                    In many industries, when you buy a product, you own it outright. But
                    creative work operates differently because of copyright law.
                </p>

                <p>
                    The photographer retains copyright by default, even after delivering
                    files. This isn't unique to photography—it's the same with music,
                    writing, software, and other creative works.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    How to Avoid Confusion
                </h2>
                <p>
                    The best practice is to document the license terms separately from
                    file delivery. This can be:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>A written contract or agreement</li>
                    <li>An invoice with usage terms listed</li>
                    <li>A license record (like what FrameRights creates)</li>
                    <li>An email confirming the terms</li>
                </ul>

                <p>
                    When the license is documented separately, both parties have clarity.
                    The photographer knows what they've authorized. The client knows what
                    they're allowed to do.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    The Bottom Line
                </h2>
                <p>
                    Receiving files is not the same as receiving permission to use them.
                    The files are the product. The license is the permission.
                </p>

                <p>
                    Both are necessary. Both should be clear. And they should be
                    documented separately.
                </p>
            </div>

            <ResourceNav
                currentPage="/resources/licensing-vs-file-delivery"
                siblingPage={{
                    title: "A Simple Public License Record",
                    href: "/resources/public-license-record-example",
                }}
            />
        </ResourceLayout>
    );
}
