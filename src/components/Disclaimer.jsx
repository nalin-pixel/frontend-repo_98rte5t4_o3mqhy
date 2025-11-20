function Disclaimer() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-rose-50 ring-1 ring-rose-100 p-5 text-sm text-gray-700">
          <h2 className="text-base font-semibold text-gray-900 mb-2">Disclaimer</h2>
          <p>
            NanoSlim è un integratore alimentare. Non sostituisce una dieta equilibrata, uno stile di vita sano o eventuali terapie mediche. I risultati possono variare da persona a persona. In caso di patologie, gravidanza o terapia farmacologica, consulta il tuo medico prima di assumere qualsiasi integratore.
          </p>
        </div>
        <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} NanoSlim – Tutti i diritti riservati.</p>
      </div>
    </section>
  )
}

export default Disclaimer
