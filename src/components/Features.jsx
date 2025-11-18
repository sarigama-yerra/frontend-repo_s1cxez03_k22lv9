export default function Features() {
  const features = [
    {
      title: "Strategie, creatie, distributie",
      desc: "Van messcherpe positionering tot opvallende uitvoering en slimme media. Eén team, end‑to‑end.",
    },
    {
      title: "Snel schakelen",
      desc: "Lean sprints met wekelijkse output. Wat niet werkt, schrappen we. Wat scoort, schalen we.",
    },
    {
      title: "Radicaal helder",
      desc: "Duidelijke taal, duidelijke KPI's. Geen bureauspraat. Alleen impact.",
    },
  ];

  return (
    <section id="diensten" className="relative bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
