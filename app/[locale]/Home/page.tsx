import Banner from "@/app/[locale]/Home/components/Banner/Banner";
import Services from "@/app/[locale]/Home/components/Services/Services";
import Articles from "@/app/components/Articles/Articles";
import Contact from "@/app/[locale]/Home/components/Contact/Contact";
import getRequestConfig from "@/src/i18n/request";

export default async function HomePage({ params }: { params: { locale: string } }) {
  const { messages } = await getRequestConfig({ requestLocale: Promise.resolve(params.locale) });

  return (
    <>
      <Banner
        title={messages?.Banner?.title ?? ""}
        name={messages?.Banner?.name ?? ""}
        bullets={messages?.Banner?.bullets ?? []}
        primaryCta={messages?.Banner?.primaryCta ?? ""}
        secondaryCta={messages?.Banner?.secondaryCta ?? ""}
      />
      <Services messages={messages} />
      <Articles />
      <Contact />
    </>
  );
}