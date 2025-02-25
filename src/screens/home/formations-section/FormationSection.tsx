import { Link } from "react-router-dom";
import SectionTitle from "../components/section-title/SectionTitle";
import FormationItem from "./components/FormationItem";
import { ChevronDoubleRight } from "react-bootstrap-icons";

export default function FormationSection() {
  return (
    <>
      <SectionTitle title="Notre sélection du moment" />

      <section className="flex flex-col my-16 w-full px-6 md:px-60">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 animate__animated animate__backInUp delay-200">

          <FormationItem
            title="Intitulé de la formation"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisicing adipisicing"
            image="assets/img/analyse.jpg"
          />

          <FormationItem
            title="Intitulé de la formation"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisicing adipisicing"
            image="assets/img/analyse.jpg"
          />

          <FormationItem
            title="Intitulé de la formation"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisicing adipisicing"
            image="assets/img/analyse.jpg"
          />

          <FormationItem
            title="Intitulé de la formation"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisicing adipisicing"
            image="assets/img/analyse.jpg"
          />

          <FormationItem
            title="Intitulé de la formation"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisicing adipisicing"
            image="assets/img/analyse.jpg"
          />

          <FormationItem
            title="Intitulé de la formation"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisicing adipisicing"
            image="assets/img/photography.jpeg"
          />

          <FormationItem
            title="Intitulé de la formation"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisicing adipisicing"
            image="assets/img/photography.jpeg"
          />


          <FormationItem
            title="Intitulé de la formation"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisicing adipisicing"
            image="assets/img/photography.jpeg"
          />

          <FormationItem
            title="Intitulé de la formation"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisicing adipisicing"
            image="assets/img/photography.jpeg"
          />

          <FormationItem
            title="Intitulé de la formation"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisicing adipisicing"
            image="assets/img/photography.jpeg"
          />
        </div>

        <div className="flex flex-row justify-center items-center w-full my-16">
          <Link to={''} className="flex flex-row items-center gap-2 bg-purpleColor py-3 px-2 rounded-sm text-white font-semibold hover:bg-blueColor transition">
            <ChevronDoubleRight />
            <span className="text-white font-semibold">Voir toutes les formations</span>
          </Link>
        </div>
      </section>
    </>
  )
}
