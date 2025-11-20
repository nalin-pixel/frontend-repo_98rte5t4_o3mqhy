function HowItWorks() {
  const steps = [
    {
      title: 'Inserisci l’email',
      desc: 'Ricevi subito la mini‑guida gratuita con regole semplici per iniziare.'
    },
    {
      title: 'Scopri NanoSlim',
      desc: 'Nella guida e nella pagina di ringraziamento trovi il link ufficiale con tutti i dettagli.'
    },
    {
      title: 'Decidi in libertà',
      desc: 'Valuta se provare NanoSlim e applica i suggerimenti della guida con i tuoi tempi.'
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Come funziona</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6 ring-1 ring-gray-100">
              <div className="w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center font-semibold mb-3">{i+1}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-sm text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
