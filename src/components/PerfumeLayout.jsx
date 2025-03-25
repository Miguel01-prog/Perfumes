import "./global.css"

export default function PerfumeLayout({ children }) {
  return (
    <div className="perfume-layout">
      <header className="perfume-header">
        <div className="header-content">
          <a href="/" className="logo-link">
            <img src="./logo.png" alt="Tefi" className="logo-image" />
          </a>
          <nav className="main-nav">
            <a href="/" className="nav-link">Inicio</a>
            <a href="/crear-perfume/dama" className="nav-link">Crear Cuenta</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {children} {/* Esto asegurará que el contenido de PerfumeBuilder se muestre */}
      </main>
    </div>
  )
}
