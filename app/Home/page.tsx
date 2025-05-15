import Banner from "@/app/Home/components/Banner/Banner";
import Services from "@/app/Home/components/Services/Services";
import Articles from "@/app/components/Articles/Articles";
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