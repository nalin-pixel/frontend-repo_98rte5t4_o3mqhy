import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Per favore inserisci una email valida.')
      return
    }

    try {
      setLoading(true)
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name || undefined, email })
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail || 'Errore durante l\'iscrizione')
      }

      navigate('/grazie')
    } catch (err) {
      setError(err.message || 'Si è verificato un errore.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-medium mb-4">
              Pensato per donne 30–55
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Dimagrire dopo i 30 senza diete folli è possibile
            </h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              Ricevi via email una mini‑guida gratuita con consigli semplici e realistici per rimetterti in forma. Scoprirai anche come NanoSlim può supportare il metabolismo e il controllo dell’appetito, senza promesse esagerate.
            </p>

            <form onSubmit={onSubmit} className="mt-6 bg-white/80 backdrop-blur border border-rose-100 rounded-xl p-4 sm:p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome (opzionale)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full sm:w-1/3 rounded-lg border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-1 rounded-lg border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold px-5 py-3 text-sm transition disabled:opacity-60"
                >
                  {loading ? 'Invio…' : 'Scarica la guida gratuita + scopri NanoSlim'}
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Ti invieremo solo consigli utili sul dimagrimento e informazioni su NanoSlim. Puoi annullare l’iscrizione in qualsiasi momento.
              </p>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </form>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200">
              <img
                src="https://images.unsplash.com/photo-1604881987924-3be9b2ed0a20?q=80&w=1600&auto=format&fit=crop"
                alt="Donna in cucina, stile UGC"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden sm:block bg-white rounded-xl p-4 shadow-md ring-1 ring-gray-100">
              <p className="text-sm text-gray-700">Piccoli passi, risultati realistici.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
