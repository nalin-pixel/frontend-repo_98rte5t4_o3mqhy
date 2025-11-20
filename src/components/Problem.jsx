function Problem() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Perché dopo i 30 è più difficile dimagrire?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="bg-gray-50 rounded-xl p-5 ring-1 ring-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Metabolismo più lento</h3>
            <p className="text-sm">Con l’età il metabolismo tende a rallentare: questo rende più facile accumulare peso anche con abitudini simili a prima.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 ring-1 ring-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Meno tempo per allenarsi</h3>
            <p className="text-sm">Tra lavoro, famiglia e impegni, trovare spazio per la palestra non è sempre semplice. Servono strategie flessibili e sostenibili.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 ring-1 ring-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Stress e routine</h3>
            <p className="text-sm">Lo stress può influenzare la fame e l’energia. Piccoli cambiamenti quotidiani possono fare la differenza nel lungo periodo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
