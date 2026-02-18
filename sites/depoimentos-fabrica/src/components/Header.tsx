export function Header() {
  return (
    <header className="bg-gradient-to-r from-primary via-blue-dark to-secondary text-white py-3 px-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="bg-white rounded-xl px-4 py-2 shadow-md">
          <img
            src="https://fm.doutoraescola.com.br/assets/img/logo.webp"
            alt="Doutora Escola - Fábrica Mágica"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  )
}
