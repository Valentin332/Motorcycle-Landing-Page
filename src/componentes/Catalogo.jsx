import MotoCard from "./MotoCard"
import {useState} from "react"
export default function Catalogo(props){
const [categoria, setCategoria] = useState("STREET");

 
 console.log(props.motoDatos())
const scooters = props.motoDatos().scooters.map((scooter,ind) => {
  return(
    <MotoCard
    key={ind}
    url={props.motoDatos().scootersImgs[0][ind]} 
    modelo={scooter.modelo}
    año={scooter.año}
    categoria="scooters_"
    />
  )
});

const streets = props.motoDatos().streets.filter((street,ind) => ind < 9).map((street,ind) => {
  return(
    <MotoCard
    key={ind}
    url={props.motoDatos().streetsImgs[0][ind]} 
    modelo={street.modelo}
    año={street.año}
    categoria="streets_"
    />
  ) 
});

const offRoads = props.motoDatos().offRoads.filter((off,ind) => ind < 9).map((off,ind) => {
  return(
    <MotoCard
    key={ind}
    url={props.motoDatos().offImgs[0][ind]} 
    modelo={off.modelo}
    año={off.año}
    categoria="offRoads_"
    />
  ) 
});

function handleClick(e){
  categoria !== e.target.textContent && setCategoria(e.target.textContent )
};

function mostrarMotos(){
  if(categoria === "STREET"){
    return streets
  } else if(categoria === "OFF"){
    return offRoads
  } else if(categoria === "SCOOTER"){
    return scooters
  }
}
   return(
    <section className="bg-gray-200 pb-20">
    <nav className="flex justify-around"id="categorias-motos">
      <button onClick={handleClick} className="border  rounded-xl my-4 py-2 px-4 text-3xl border-white text-white font-bold bg-blue-800 
      hover:text-blue-800 hover:border-blue-800 hover:bg-white">STREET</button>
      <button onClick={handleClick} className="border  rounded-xl my-4 py-2 px-4 text-3xl border-white text-white font-bold bg-blue-800 
      hover:text-blue-800 hover:border-blue-800 hover:bg-white ">OFF</button>
      <button onClick={handleClick} className="border  rounded-xl my-4 py-2 px-4 text-3xl border-white text-white font-bold bg-blue-800 
      hover:text-blue-800 hover:border-blue-800 hover:bg-white ">SCOOTER</button>
      </nav> 
      <section className="m-auto">
      <div id="wrapper" className=" flex flex-col lg:flex-row lg:flex-wrap lg:justify-evenly lg:gap-x-20 gap-y-10">
      {mostrarMotos()}
      </div>
      </section>
    </section>
   ) 
}
