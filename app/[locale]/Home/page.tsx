import Banner from "@/app/[locale]/Home/components/Banner/Banner";
import Services from "@/app/[locale]/Home/components/Services/Services";
import Articles from "@/app/[locale]/components/Articles/Articles";
import Contact from "./components/Contact/Contact";

export default function HomePage() {
  return (
    <>
      <Banner />
      {/* <HomeContent /> */}
      <Services />
      <Articles />
      <Contact />
    </>
  );
}