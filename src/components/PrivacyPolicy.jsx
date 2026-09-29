const RIGHTS = [
  'Auskunft über die verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)',
  'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
  'Löschung Ihrer Daten (Art. 17 DSGVO)',
  'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
  'Datenübertragbarkeit (Art. 20 DSGVO)',
  'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
]

function PrivacyPolicy() {
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
            Datenschutzerklärung
          </h1>

          <div className="mt-20 space-y-16 font-sans text-base leading-relaxed text-off-white/80 sm:mt-28 sm:space-y-20">
            <section aria-labelledby="overview-heading">
              <h2
                id="overview-heading"
                className="mb-6 text-xs uppercase tracking-[0.2em] text-off-white/50"
              >
                01 / Datenschutz auf einen Blick
              </h2>
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese
                Erklärung informiert Sie darüber, welche Daten beim Besuch dieser
                Website verarbeitet werden und zu welchen Zwecken. Die Website
                verwendet nach aktuellem Stand keine Analyse- oder Werbe-Tracker
                und setzt selbst keine Cookies. Eingebundene Schriftarten werden
                lokal von dieser Website geladen.
              </p>
            </section>

            <section aria-labelledby="controller-heading">
              <h2
                id="controller-heading"
                className="mb-6 text-xs uppercase tracking-[0.2em] text-off-white/50"
              >
                02 / Verantwortlicher
              </h2>
              <address className="not-italic">
                <span className="block text-lg text-off-white">Frame Flare Works</span>
                Jan-Erik Lückheide
                <br />
                Hanauer Str. 50
                <br />
                80992 München
                <br />
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
              </address>
            </section>

            <section aria-labelledby="hosting-heading">
              <h2
                id="hosting-heading"
                className="mb-6 text-xs uppercase tracking-[0.2em] text-off-white/50"
              >
                03 / Hosting und Server-Log-Dateien
              </h2>
              <div className="space-y-4">
                <p>
                  Diese Website wird über Vercel Inc. gehostet. Beim Aufruf der
                  Website verarbeitet der Hosting-Anbieter technisch erforderliche
                  Verbindungsdaten in Server-Logs. Dazu können insbesondere
                  IP-Adresse, Zeitpunkt der Anfrage, angeforderte Adresse,
                  Referrer, Browser- und Betriebssysteminformationen gehören.
                </p>
                <p>
                  Die Verarbeitung ist erforderlich, um die Website auszuliefern,
                  ihre Sicherheit und Funktionsfähigkeit zu gewährleisten und
                  Missbrauch abzuwehren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
                  DSGVO; unser berechtigtes Interesse liegt im sicheren und
                  zuverlässigen Betrieb der Website. Die technische
                  Protokollierung erfolgt durch den Hosting-Anbieter. Weitere
                  Informationen zur Verarbeitung und Speicherdauer finden Sie in
                  den Datenschutzhinweisen von{' '}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 transition-colors hover:text-off-white"
                  >
                    Vercel
                  </a>
                  .
                </p>
              </div>
            </section>

            <section aria-labelledby="email-heading">
              <h2
                id="email-heading"
                className="mb-6 text-xs uppercase tracking-[0.2em] text-off-white/50"
              >
                04 / Kontaktaufnahme per E-Mail
              </h2>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von
                Ihnen übermittelten Angaben, etwa Ihre E-Mail-Adresse, Ihren
                Namen und den Inhalt Ihrer Nachricht, um Ihre Anfrage zu
                bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; wenn
                Ihre Anfrage auf den Abschluss oder die Durchführung eines
                Vertrags gerichtet ist, zusätzlich Art. 6 Abs. 1 lit. b DSGVO.
                Wir löschen die Angaben, sobald sie für die Bearbeitung nicht
                mehr erforderlich sind und keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section aria-labelledby="cookies-heading">
              <h2
                id="cookies-heading"
                className="mb-6 text-xs uppercase tracking-[0.2em] text-off-white/50"
              >
                05 / Cookies und Tracking
              </h2>
              <p>
                Diese Website verwendet nach aktuellem Stand keine Cookies,
                Webanalyse, Werbe-Pixel oder extern eingebundene Schriftarten.
                Die verwendeten Schriftarten werden lokal bereitgestellt.
                Technisch notwendige Verbindungs- und Protokolldaten des
                Hostings bleiben davon unberührt.
              </p>
            </section>

            <section aria-labelledby="rights-heading">
              <h2
                id="rights-heading"
                className="mb-6 text-xs uppercase tracking-[0.2em] text-off-white/50"
              >
                06 / Ihre Rechte
              </h2>
              <p>
                Im Rahmen der gesetzlichen Voraussetzungen haben Sie folgende
                Rechte:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-off-white/40">
                {RIGHTS.map((right) => (
                  <li key={right}>{right}</li>
                ))}
              </ul>
              <p className="mt-4">
                Zur Ausübung Ihrer Rechte können Sie sich an die oben genannte
                E-Mail-Adresse wenden. Außerdem haben Sie das Recht, sich bei
                einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
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

export default PrivacyPolicy
