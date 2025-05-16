import Heading2 from '@/app/design_system/Text/Headings/Heading2/Heading2';
import './Articles.css';
import Link from '@/app/design_system/Link/Link';
import Image from 'next/image';
import { posts } from '@/app/api/_data';

export default function Articles() {
  // Show only the first 3 posts for now
  const articles = posts.slice(0, 3);

  return (
    <section className="articles-section section section-min-width services-section">
      <div style={{ margin: "auto" }} className="section-content-max-width">
        <Heading2>Conozca mis articulos</Heading2>
        <div className="articles-row">
          {articles.map((post) => (
            <div className="article-card" key={post.id}>
              <Image
                src={post.img}
                alt={post.title}
                className="article-image"
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              <Link href={`#`} className="article-card-title">{post.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
