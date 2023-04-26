import Slider from "./Slider"
import Consulta from "./Consulta.jsx"
import react from "react"
export default function Home(){
const indexSlides = [{
  img: "../../imgs/Scooters/honda_adv_150_2.jpg",
  link: "Catalogo/scooters_ADV150"
},
{
  img: "../../imgs/V(logo_2010).png",
  link: "/Nosotros"
},
{
  img: "../../imgs/Streets/honda_cb_1000R_2.jpg",
  link: "Catalogo/streets_CB1000R"
}];


    return(
     <section>
      <Slider slides={indexSlides} />
      <div className=" border rounded-xl bg-gray-200 my-12 lg:w-3/4 m-auto flex flex-col md:grid md:grid-cols-2">
      <form className=' pt-2 h-full text-center'>
        <h1 className='text-6xl text-blue-800 font-medium'>Nuestro Newsletter</h1>
        <p className='text-3xl px-4 pt-3'>¡Suscribite al newsletter de VeloMAX! Mantenete informado de los últimos lanzamientos y eventos creados para vos.</p>
        <input className='focus:outline-blue-800 px-2 mt-4 border text-2xl border-blue-800 rounded-lg' placeholder='Email' type='email'></input>
        <button className='block mx-auto my-4 px-3 py-3 text-3xl font-bold border-2 rounded-md border-white text-white bg-blue-800 hover:text-blue-800 hover:border-blue-800 hover:bg-white '>Suscribirme</button>
        </form>
        <img className="w-full h-full lg:rounded-tr-xl lg:rounded-br-xl" src="../../imgs/stock_5.jpg"/>
        </div>
      <Consulta />
     </section>   
    )
}