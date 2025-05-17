// 'use client';
import "./Services.css";
import ServiceRow from "./components/ServiceRow/ServiceRow";
import MenuList from "@/app/components/MenuList";
import Link from "@/app/design_system/Link/Link";
import devAndDesignImgSrc from "@/public/development_and_design_img.png";
import seoImg from "@/public/seo_optimization.png";
import performanceImg from "@/public/performance_service.png";
import eccomerceImg from "@/public/ecommerce.png";
import designImg from "@/public/design.png";
import securityImg from "@/public/security.png";
import Heading2 from "@/app/design_system/Text/Headings/Heading2/Heading2";

export default function Services({ messages }: { messages: any }) {
  return (
    <section id={messages.Header.servicesId} className="section section-min-width services-section">
      <div style={{ margin: "auto" }} className="section-content-max-width">
        <div className="services-header">
          <Heading2 className="services-title">{messages.Header.services}</Heading2>
          <p>{messages.Services.intro}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <ServiceRow
            title={messages.Services.devAndDesign.title}
            description={
              <>
                <p>{messages.Services.devAndDesign.description1}</p>
                <p>
                  {messages.Services.devAndDesign.description2}{" "}
                  <Link href="/contact" className="link">
                    {messages.Services.devAndDesign.cta}
                  </Link>
                </p>
              </>
            }
            imgSrc={devAndDesignImgSrc}
            imgAlt={messages.Services.devAndDesign.imgAlt}
          />
          <ServiceRow
            title={messages.Services.seo.title}
            description={
              <>
                <p>{messages.Services.seo.description1}</p>
                <MenuList
                  className="menu-list"
                  style={{ width: "19rem" }}
                  bullets={messages.Services.seo.bullets}
                />
                <div style={{ marginTop: "1rem" }}>
                  <p>
                    {messages.Services.seo.description2}{" "}
                    <Link href="/contact" className="link">
                      {messages.Services.seo.cta}
                    </Link>
                  </p>
                </div>
              </>
            }
            imgSrc={seoImg}
            imgAlt={messages.Services.seo.imgAlt}
            reverse
          />
          <ServiceRow
            title={messages.Services.performance.title}
            description={
              <>
                <p>{messages.Services.performance.description1}</p>
                <p>
                  {messages.Services.performance.description2}{" "}
                  <Link href="/contact" className="link">
                    {messages.Services.performance.cta}
                  </Link>
                </p>
              </>
            }
            imgSrc={performanceImg}
            imgAlt={messages.Services.performance.imgAlt}
          />
          <ServiceRow
            title={messages.Services.ecommerce.title}
            description={
              <>
                <p>{messages.Services.ecommerce.description1}</p>
                <p>
                  {messages.Services.ecommerce.description2}{" "}
                  <Link href="/contact" className="link">
                    {messages.Services.ecommerce.cta}
                  </Link>
                </p>
              </>
            }
            imgSrc={eccomerceImg}
            imgAlt={messages.Services.ecommerce.imgAlt}
            reverse
          />
          <ServiceRow
            title={messages.Services.security.title}
            description={
              <>
                <p>{messages.Services.security.description1}</p>
                <MenuList
                  className="menu-list"
                  style={{ width: "35rem" }}
                  bullets={messages.Services.security.bullets}
                />
                <p style={{ marginTop: "1rem" }}>
                  {messages.Services.security.description2}{" "}
                  <Link href="/contact" className="link">
                    {messages.Services.security.cta}
                  </Link>
                </p>
              </>
            }
            imgSrc={securityImg}
            imgAlt={messages.Services.security.imgAlt}
          />
        </div>
      </div>
    </section>
  );
}