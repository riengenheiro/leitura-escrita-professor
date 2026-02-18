const VIDEO_EMBED_URL = 'https://iframe.mediadelivery.net/embed/499108/7e882e37-9dd7-4ad0-ad60-1df0aacacf49?autoplay=false&loop=false&muted=false&preload=true&responsive=true';

export function FMVideo() {
  return (
    <section className="text-gray-900 py-16 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F2F2F2 0%, #ffffff 50%, rgba(29, 143, 242, 0.05) 100%)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#1D8FF2' }} />
        <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: '#1C8C4D' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: '#F2C849' }} />
      </div>
      <div className="max-w-sm mx-auto px-6 relative z-10">
        <span className="inline-block w-full text-center px-4 py-2 rounded-full text-sm font-bold mb-6 text-white shadow-md" style={{ background: 'linear-gradient(135deg, #1D8FF2, #1a7ed9)' }}>
          Demonstração em vídeo
        </span>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-900">Veja a Fábrica Mágica funcionando ao vivo</h2>
          <p className="text-lg text-gray-700">Assista como uma professora cria um PDI completo em menos de 3 minutos</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl blur-xl opacity-30" style={{ background: 'linear-gradient(135deg, #1D8FF2, #1C8C4D)' }} />
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4" style={{ aspectRatio: '1080 / 1920', borderColor: '#F2C849' }}>
            <iframe src={VIDEO_EMBED_URL} loading="lazy" className="absolute top-0 left-0 w-full h-full border-0" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowFullScreen title="Vídeo demonstração Fábrica Mágica" />
          </div>
        </div>
        <div className="mt-6 text-center px-4 py-3 rounded-xl" style={{ background: 'rgba(242, 200, 73, 0.15)', border: '1px solid rgba(242, 200, 73, 0.4)' }}>
          <p className="text-sm font-medium text-gray-800">💡 Mais fácil que usar WhatsApp — se você sabe digitar, sabe usar a Fábrica Mágica</p>
        </div>
      </div>
    </section>
  );
}
