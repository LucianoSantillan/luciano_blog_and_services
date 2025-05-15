import Banner from "@/app/components/Banner";
import Services from "@/app/components/Services";
import Articles from "@/app/components/Articles/Articles";

export default function HomePage() {
  return (
    <>
      <Banner />
      {/* <HomeContent /> */}
      <Services />
      <Articles />
    </>
  );
}