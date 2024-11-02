import Footer from "../components/footer";
import HeroSection from "../components/heroSection";

export default function Home() {
  return (
    <div className="max-w-screen-lg justify-center mx-auto px-3">
      <HeroSection/>
      <Footer/>
    </div>
  );
}