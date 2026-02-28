const VIDEO_EMBED_URL = 'https://iframe.mediadelivery.net/embed/499108/7e882e37-9dd7-4ad0-ad60-1df0aacacf49?autoplay=false&loop=false&muted=false&preload=true&responsive=true'

export function FMVideo() {
  return (
    <section id="demo" className="bg-warm-white py-16 md:py-20">
      <div className="max-w-sm mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-texto mb-2">
            Veja uma professora preenchendo
          </h2>
          <p className="text-texto-muted">
            Ela preenche o questionário e em menos de 3 minutos, os documentos estão prontos.
          </p>
        </div>

        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-cream-dark"
          style={{ aspectRatio: '1080 / 1920' }}
        >
          <iframe
            src={VIDEO_EMBED_URL}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
            allowFullScreen
            title="Professora preenchendo o questionário da Fábrica Mágica"
          />
        </div>

        <p className="text-center text-sm text-texto-light mt-4">
          Nenhuma instalação. Funciona direto no navegador, no celular ou no computador.
        </p>
      </div>
    </section>
  )
}
