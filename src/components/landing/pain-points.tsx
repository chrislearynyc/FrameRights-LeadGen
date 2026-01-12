const PAIN_POINTS = [
  "“We thought this was included.”",
  "Old licenses that no one can find.",
  "Clients reusing images later with no clear reference.",
  "Editors or platforms asking for proof of rights.",
  "The choice between staying quiet or sounding aggressive.",
];

export function PainPoints() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">
            The problem with the current way.
          </h2>
          <p className="text-slate-600 mb-8">
            Most licensing misunderstandings aren&apos;t malicious—they&apos;re
            just a lack of documentation. When the terms are buried in a
            3-year-old email thread, everyone guesses.
          </p>
        </div>
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <ul className="space-y-4">
            {PAIN_POINTS.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <svg
                  className="w-5 h-5 text-red-400 mt-1 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
