import Banner from "@/app/[locale]/Home/components/Banner/Banner";
import Services from "@/app/[locale]/Home/components/Services/Services";
import Articles from "@/app/[locale]/components/Articles/Articles";
import Contact from "./components/Contact/Contact";
import { useTranslations } from "next-intl";

export default function HomePage() {

  const t = useTranslations('HomePage');

  return (
    <>
      <h1>{t('title')}</h1>
      <Banner />
      {/* <HomeContent /> */}
      <Services />
      <Articles />
      <Contact />
    </>
  );
}