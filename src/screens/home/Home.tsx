import CategorieSection from "./categorie-section/CategorieSection";
import FormationSection from "./formations-section/FormationSection";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorieSection />
      <FormationSection />
    </>
  )
}
