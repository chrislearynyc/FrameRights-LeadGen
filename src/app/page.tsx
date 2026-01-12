import { Hero } from "@/components/landing/hero";
import { WhyThisExists } from "@/components/landing/why-this-exists";
import { PainPoints } from "@/components/landing/pain-points";
import { WhatIsFrameRights } from "@/components/landing/what-is-frame-rights";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Comparison } from "@/components/landing/comparison";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-slate-900 tracking-tight">
            FrameRights
          </span>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#why" className="hover:text-slate-900 transition-colors">
              Why
            </a>
            <a
              href="#how-it-works"
              className="hover:text-slate-900 transition-colors"
            >
              How it works
            </a>
            <a
              href="#waitlist"
              className="hover:text-slate-900 transition-colors text-slate-900"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <WhyThisExists />
      <PainPoints />
      <WhatIsFrameRights />
      <HowItWorks />
      <Comparison />

      <section
        id="waitlist"
        className="px-6 py-24 bg-slate-50 border-t border-slate-100"
      >
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            Get early access.
          </h2>
          <p className="text-slate-600 mb-8">
            Be the first to create clearer license records.
          </p>
          <WaitlistForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
