import Banner from "@/app/[locale]/Home/components/Banner/Banner";
import Services from "@/app/[locale]/Home/components/Services/Services";
import Articles from "@/app/components/Articles/Articles";
import Contact from "@/app/[locale]/Home/components/Contact/Contact";

export default function HomePage() {

  return (
    <>
      <Banner />
      <Services />
      <Articles />
      <Contact />
    </>
  );
}