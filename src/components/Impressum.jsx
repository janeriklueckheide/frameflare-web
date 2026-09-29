function Impressum() {
  return (
    <div className="min-h-screen bg-graphite text-off-white">
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-off-white/10 bg-graphite/80 px-6 py-5 backdrop-blur-md sm:px-12 lg:px-24">
        <a
          href="/"
          className="font-display text-sm uppercase tracking-[0.2em] text-off-white sm:text-base"
        >
          Frame Flare Works
        </a>
        <a
          href="/"
          className="font-sans text-xs uppercase tracking-[0.2em] text-off-white/70 transition-colors hover:text-off-white sm:text-sm"
        >
          Back to website
        </a>
      </header>

      <main className="px-6 pb-12 pt-32 sm:px-12 sm:pt-40 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-off-white/50">
            FRAME FLARE WORKS
          </p>
          <h1 className="mt-6 font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
            Impressum
          </h1>

          <div className="mt-20 space-y-16 font-sans text-base leading-relaxed text-off-white/80 sm:mt-28 sm:space-y-20">
            <section aria-labelledby="provider-heading">
              <h2
                id="provider-heading"
                className="mb-6 text-xs uppercase tracking-[0.2em] text-off-white/50"
              >
                Angaben gemäß § 5 DDG
              </h2>
              <address className="not-italic">
                <span className="block text-lg text-off-white">Frame Flare Works</span>
                Jan-Erik Lückheide
                <br />
                Hanauer Str. 50
                <br />
                80992 München
              </address>
            </section>

            <section aria-labelledby="contact-heading">
              <h2
                id="contact-heading"
                className="mb-6 text-xs uppercase tracking-[0.2em] text-off-white/50"
              >
                Kontakt
              </h2>
              <p>
                Telefon:{' '}
                <a
                  href="tel:+4915112262904"
                  className="transition-colors hover:text-off-white"
                >
                  +49 151 12262904
                </a>
                <br />
                E-Mail:{' '}
                <a
                  href="mailto:jan-erik.lueckheide@frameflare.works"
                  className="transition-colors hover:text-off-white"
                >
                  jan-erik.lueckheide@frameflare.works
                </a>
              </p>
            </section>

            <section aria-labelledby="editor-heading">
              <h2
                id="editor-heading"
                className="mb-6 text-xs uppercase tracking-[0.2em] text-off-white/50"
              >
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <address className="not-italic">
                Jan-Erik Lückheide
                <br />
                Hanauer Str. 50
                <br />
                80992 München
              </address>
            </section>

            <section aria-labelledby="eu-dispute-heading">
              <h2
                id="eu-dispute-heading"
                className="mb-6 text-xs uppercase tracking-[0.2em] text-off-white/50"
              >
                EU-Streitschlichtung
              </h2>
              <p>
                Die Plattform der Europäischen Kommission zur Online-Streitbeilegung
                (OS-Plattform) wurde zum 20. Juli 2025 eingestellt.
              </p>
            </section>

            <section aria-labelledby="consumer-dispute-heading">
              <h2
                id="consumer-dispute-heading"
                className="mb-6 text-xs uppercase tracking-[0.2em] text-off-white/50"
              >
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="mx-6 mt-12 border-t border-off-white/10 py-8 font-sans text-xs uppercase tracking-[0.2em] text-off-white/50 sm:mx-12 lg:mx-24">
        FRAME FLARE WORKS &copy; 2026
      </footer>
    </div>
  )
}

export default Impressum
