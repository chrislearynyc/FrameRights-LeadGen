import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 py-12 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-semibold text-slate-900 mb-2">FrameRights</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Documentation-first licensing records for photographers.
            </p>
          </div>

          {/* Resources */}
          <div>
            <p className="font-semibold text-slate-900 mb-3">Resources</p>
            <nav className="space-y-2">
              <Link
                href="/resources"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                All Resources
              </Link>
              <Link
                href="/resources/what-are-image-usage-rights"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                What Are Usage Rights
              </Link>
              <Link
                href="/resources/start-here-image-usage"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Start Here
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold text-slate-900 mb-3">Company</p>
            <nav className="space-y-2">
              <span className="block text-sm text-slate-400 cursor-not-allowed">
                About
              </span>
              <span className="block text-sm text-slate-400 cursor-not-allowed">
                Contact
              </span>
              <span className="block text-sm text-slate-400 cursor-not-allowed">
                Privacy
              </span>
              <span className="block text-sm text-slate-400 cursor-not-allowed">
                Terms
              </span>
            </nav>
          </div>
        </div>

        {/* Bottom note */}
        <div className="pt-8 border-t border-slate-100">
          <p className="text-sm text-slate-500 text-center">
            We only use your email for FrameRights updates.
          </p>
        </div>
      </div>
    </footer>
  );
}

