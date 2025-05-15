import Heading2 from '@/app/design_system/Headings/Heading2/Heading2';
import './Articles.css';
import Heading3 from '@/app/design_system/Headings/Heading3/Heading3';
import { Heading } from 'lucide-react';
import Link from '@/app/design_system/Link/Link';

export default function Articles() {
  return (
    <section className="articles-section section section-min-width services-section">
      <div style={{ margin: "auto" }} className="section-content-max-width">

        <Heading2>Conozca mis articulos</Heading2>
        <div className="articles-row">
          <div className="article-card">
            <img src="/images/article1.jpg" alt="Artículo 1" className="article-image" />
            <Link href={"#"} className="article-card-title">Título del Artículo 1</Link>
          </div>
          <div className="article-card">
            <img src="/images/article2.jpg" alt="Artículo 2" className="article-image" />
            <Link href={"#"} className="article-card-title">Título del Artículo 2</Link>
          </div>
          <div className="article-card">
            <img src="/images/article3.jpg" alt="Artículo 3" className="article-image" />
            <Link href={"#"} className="article-card-title">Título del Artículo 3</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
