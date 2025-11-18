export default function Cases() {
  const cases = [
    {
      tag: "E‑commerce",
      title: "+68% ROAS in 6 weken",
      desc: "Performance herbouwd met heldere proposities en dynamische creatives.",
    },
    {
      tag: "Tech",
      title: "Van niche naar marktleider",
      desc: "Demand gen die het sales team wekelijks warme leads bracht.",
    },
    {
      tag: "Consumer",
      title: "Campagne die blijft hangen",
      desc: "Merkcampagne met onmiskenbare eenvoud en gigantisch bereik.",
    },
  ];

  return (
    <section id="cases" className="relative bg-slate-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold">Cases</h2>
          <a href="#contact" className="text-sm text-slate-300 hover:text-white">Samen winnen →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <span className="text-xs uppercase tracking-widest text-slate-300">{c.tag}</span>
              <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-slate-300">{c.desc}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition text-slate-200/90 text-sm">Bekijk case →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
