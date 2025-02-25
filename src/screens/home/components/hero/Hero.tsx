import { Link } from 'react-router-dom'
import '../../index.css'

export default function Hero() {

  return (
    <>

      <section className="flex flex-col md:flex-row justify-center items-center top-16 h-[600px] w-full bg-grayColor px-3">
        <div className="flex flex-col gap-2 md:gap-8 w-full md:w-1/3">
          <h2 className="font-semibold md:text-3xl text-center md:text-start">Passez de débutant à professionnel dans votre domaine,  en un temps record.</h2>
          <p className="text-center md:text-start">
            Formez-vous aux métiers les plus recherchés avec nos formations certifiantes.
          </p>

          <div className="flex justify-center md:justify-start animate__animated animate__bounce delay-300">
            <Link to={''} className="bg-purpleColor py-3 px-2 rounded-sm text-white font-semibold hover:bg-blueColor transition">
              Commencer maintenant
            </Link>
          </div>
        </div>


        <div className="flex flex-col w-full md:w-1/3">
          <img src="assets/svg/hero.png" alt="" className="hero-svg" />
        </div>
      </section>

    </>


  )
}
