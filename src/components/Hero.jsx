import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-slate-200/90">
            Dutch no‑nonsense bureau
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight">
            Aandacht die converteert.
          </h1>
          <p className="mt-4 text-slate-200/80 text-lg">
            Wij maken campagnes die direct tot de kern komen. Geen bla bla — alleen werk dat resultaat oplevert: zichtbaar, meetbaar, schaalbaar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:opacity-90 transition">
              Start een project
            </a>
            <a href="#cases" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10 transition">
              Bekijk cases
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
    </section>
  );
}
