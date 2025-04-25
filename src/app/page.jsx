import HeroSectionHome from "./components/Home/HeroSectionHome/HeroSectionHome";
import AboutSection from "./components/Home/AboutSection/AboutSection";
import BgSection from "./components/Home/BgSection/BgSection";
import HowWorks from "./components/Home/HowWorks/HowWorks";
import OurPartners from "./components/Home/OurPartners/OurPartners";

export default function Home() {
  
  return (
    <>
      <HeroSectionHome />
      <AboutSection />
      <BgSection />
      <HowWorks />
      <OurPartners />
    </>
  )
}

