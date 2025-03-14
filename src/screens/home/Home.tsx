import CategorieSection from "./categorie-section/CategorieSection";
import FormationSection from "./formations-section/FormationSection";
import Hero from "./components/hero/Hero";
import BibliothequeSection from "./bibliotheque-section/BibliothequeSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorieSection />
      <FormationSection />
      <BibliothequeSection />
    </>
  )
}
