import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/section-title/SectionTitle'

export default function CategorieSection() {

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 350;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');

    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 350;
    }
  };



  const slideLeft2 = () => {
    const slider = document.getElementById('slider-2');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 350;
    }
  };

  const slideRight2 = () => {
    const slider = document.getElementById('slider-2');

    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 350;
    }
  };


  return (

    <>
      <SectionTitle title={`Nos catégories récentes`} />

      <section className="flex flex-col my-16 w-full gap-4 bg-white md:px-6">


        <div className="flex flex-row justify-end items-center gap-3 mx-6 ">
          <Link to={''} className='text-purpleColor font-semibold hover:scale-105 duration-400 transition'>
            Tout voir
          </Link>
          <div onClick={slideLeft} className='flex justify-center items-center bg-grayColor w-8 h-8 rounded-full text-black hover:cursor-pointer hover:bg-purpleColor hover:text-white hover:scale-105 duration-400 transition'>
            <ChevronLeft />
          </div>
          <div onClick={slideRight} className='flex justify-center items-center bg-grayColor w-8 h-8 rounded-full text-black hover:cursor-pointer hover:bg-purpleColor hover:text-white hover:scale-105 duration-400 transition'>
            <ChevronRight />
          </div>
        </div>


        <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide animate__animated animate__backInUp'>

          <div className='inline-flex items-center w-[300px] h-[250px] mx-6 hover:scale-105 duration-300'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>

          </div>


          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>

        </div>

      </section>


      <section className="flex flex-col my-16 w-full gap-4 bg-white md:px-6">


        <div className="flex flex-row justify-end items-center gap-3 mx-6 ">
          <Link to={''} className='text-purpleColor font-semibold hover:scale-105 duration-400 transition'>
            Tout voir
          </Link>
          <div onClick={slideLeft2} className='flex justify-center items-center bg-grayColor w-8 h-8 rounded-full text-black hover:cursor-pointer hover:bg-purpleColor hover:text-white hover:scale-105 duration-400 transition'>
            <ChevronLeft />
          </div>
          <div onClick={slideRight2} className='flex justify-center items-center bg-grayColor w-8 h-8 rounded-full text-black hover:cursor-pointer hover:bg-purpleColor hover:text-white hover:scale-105 duration-400 transition'>
            <ChevronRight />
          </div>
        </div>


        <div id="slider-2" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide animate__animated animate__backInUp'>

          <div className='inline-flex items-center w-[300px] h-[250px] mx-6 hover:scale-105 duration-300'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>

          </div>


          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>
          <div className='inline-flex items-center text-center w-[300px] h-[250px] mx-6'>
            <Link to={''}>
              <img src="assets/img/categorie.jpeg" className='object-cover' alt="" />
            </Link>
          </div>

        </div>

      </section>
    </>
  )
}
