import Slider from "./Slider"
import Consulta from "./Consulta.jsx"
import react from "react"
export default function Home(){
const [slideNumber, changeSlide] = react.useState(0);
const slides = ["red","blue","green"];

 function handleAdd(){
if(slideNumber != slides.length - 1){changeSlide(prevSlide => prevSlide + 1)}
else changeSlide(0)
};
 function handleSubstract(){
if(slideNumber > 0){ changeSlide(prevSlide => prevSlide - 1 ) }    
else changeSlide(slides.length - 1)
};

 const testStyles = { background: slides[slideNumber] }
    return(
     <section>
      <Slider slides={["red","blue","green","grey","black","purple"]} />
      <div className=" mt-2 pb-10 w-3/4 m-auto grid grid-cols-2">
      <form className='text-center border border-black'>
        <h1 className='text-6xl'>Nuestro Newsletter</h1>
        <p className='text-3xl px-4 pt-3'>¡Suscribite al newsletter de VeloMAX! Mantenete informado de los últimos lanzamientos y eventos creados para vos.</p>
        <input className=' px-2 mt-4 border border-black rounded-lg' placeholder='Email' type='email'></input>
        <button className='block mx-auto my-2 px-2 py-1 text-xl border border-black '>Suscribirme</button>
        </form>
        <img className="w-full h-full" src="https://media.gettyimages.com/id/961296310/es/foto/man-looking-away-while-riding-motorcycle-against-sky.jpg?s=612x612&w=gi&k=20&c=Ye6yGrsY_zuLqRmdflJhLP3F0FLbPd5B4H7tTumPxw8="/>
        </div>
      <Consulta />
     </section>   
    )
}