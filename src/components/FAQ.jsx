function FAQ() {
  const faqs = [
    {
      q: 'NanoSlim sostituisce la dieta?',
      a: 'No. È un integratore che può supportare uno stile di vita sano ed equilibrato, ma non sostituisce una dieta varia e bilanciata.'
    },
    {
      q: 'Tra quanto vedrò i primi risultati?',
      a: 'Varia da persona a persona. Non esistono tempi garantiti: l’idea è creare abitudini sostenibili e monitorare i progressi con calma.'
    },
    {
      q: 'Ci sono effetti collaterali?',
      a: 'Leggi sempre l’etichetta ufficiale. In caso di dubbi, gravidanza, allattamento o terapie farmacologiche, consulta il tuo medico.'
    },
    {
      q: 'L’iscrizione alla newsletter è gratuita?',
      a: 'Sì, è completamente gratuita e puoi annullare l’iscrizione in qualsiasi momento.'
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Domande frequenti</h2>
        <div className="divide-y divide-gray-200 bg-gray-50 rounded-xl ring-1 ring-gray-100">
          {faqs.map((f, i) => (
            <div key={i} className="p-5">
              <h3 className="font-semibold text-gray-900">{f.q}</h3>
              <p className="mt-1 text-gray-700 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
