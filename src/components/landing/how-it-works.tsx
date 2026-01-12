export function HowItWorks() {
  const steps = [
    {
      title: "Create a license record",
      description:
        "Define who, what, where, and the term. Use clear language, not legalese.",
    },
    {
      title: "Attach it to image(s)",
      description:
        "Upload low-res references or link to a gallery. Generate a unique ID.",
    },
    {
      title: "Share the clean public record",
      description:
        "Send a professional link that shows license status clearly. No login required for them.",
    },
  ];

  return (
    <section id="how-it-works" className="px-6 py-20 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-slate-900 mb-4">
          How it works
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-semibold mb-6">
              {i + 1}
            </div>
            <h3 className="text-xl font-medium text-slate-900 mb-3">
              {step.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
