import "./HomeStyle.css"

export default function Home() {
  return (
    <>
    <header className="main-header">
      <div className="container">
        <h1>🎬 Movie Catalog</h1>
      </div>

    </header>
    <main className="home-main">
      <div className="container center">
        <a href="/peliculas" class="btn-large">Go to Catalog</a>
      </div>        
    </main>
    <footer className="footer">
      <div className="container">
        <p>2025 Yañez Agustin Movie Catalog</p>
      </div>

    </footer>
    
    </>
  );
}
