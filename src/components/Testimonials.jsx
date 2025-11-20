function Testimonials() {
  const items = [
    { name: 'Maria', age: 39, text: 'La guida mi ha aiutata a organizzare meglio i pasti della settimana. Semplice e concreta.' },
    { name: 'Laura', age: 42, text: 'Con piccoli cambiamenti e il supporto di NanoSlim sento meno voglia di snack tra un pasto e l’altro.' },
    { name: 'Giulia', age: 35, text: 'Mi è piaciuto l’approccio realistico, senza promesse miracolose. Passi alla mia portata.' },
  ]

  return (
    <section className="py-12 sm:py-16 bg-rose-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Testimonianze</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-5 ring-1 ring-rose-100 shadow-sm">
              <p className="text-gray-800">“{t.text}”</p>
              <p className="mt-3 text-sm text-gray-600">{t.name}, {t.age} anni</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
