import './Articles.css';

export default function Articles() {
  return (
    <section className="articles-section section section-min-width services-section">
      <div style={{ margin: "auto" }} className="section-content-max-width">

        <h2 className="articles-title">Conozca mis articulos</h2>
        <div className="articles-row">
          <div className="article-card">
            <img src="/images/article1.jpg" alt="Artículo 1" className="article-image" />
            <h3 className="article-card-title">Título del Artículo 1</h3>
          </div>
          <div className="article-card">
            <img src="/images/article2.jpg" alt="Artículo 2" className="article-image" />
            <h3 className="article-card-title">Título del Artículo 2</h3>
          </div>
          <div className="article-card">
            <img src="/images/article3.jpg" alt="Artículo 3" className="article-image" />
            <h3 className="article-card-title">Título del Artículo 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
