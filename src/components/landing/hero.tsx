import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative px-6 pt-32 pb-20 md:pt-48 md:pb-32 max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 font-sans">
                A calm, clear way to document <br className="hidden md:block" />
                how your photos are licensed.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                FrameRights helps photographers keep a simple, shareable record of who is licensed to use an image, for what use, and under what terms—readable without login, printable, and easy to reference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="#waitlist">Join the waitlist</Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                    <Link href="#how-it-works">See how it works</Link>
                </Button>
            </div>
        </section>
    );
}
