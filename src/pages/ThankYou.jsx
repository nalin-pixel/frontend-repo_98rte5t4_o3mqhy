import { useEffect } from 'react'

function ThankYou() {
  useEffect(() => {
    // could track conversion here in the future
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Grazie!</h1>
          <p className="mt-3 text-gray-700">Controlla la tua email per la guida gratuita.</p>
          <a
            href="#" /* Sostituisci con il link ufficiale di NanoSlim */
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold transition"
          >
            Vai alla pagina ufficiale di NanoSlim
          </a>
          <p className="mt-3 text-xs text-gray-500">Potrai sempre annullare l’iscrizione con un clic.</p>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
