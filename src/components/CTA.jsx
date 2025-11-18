export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-950 text-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Klaar voor resultaat zonder poeha?</h2>
        <p className="mt-3 text-slate-300">Plan een korte call. We toetsen je doel, bepalen focus en geven eerlijk advies. Zo simpel is het.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:opacity-90 transition">Plan een intro</a>
          <a href="mailto:hallo@nogniksbureau.nl" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10 transition">Mail ons</a>
        </div>
      </div>
    </section>
  );
}
