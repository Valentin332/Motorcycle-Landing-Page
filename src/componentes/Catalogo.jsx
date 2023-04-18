import MotoCard from "./MotoCard"
import {useState} from "react"
export default function Catalogo(props){
const [categoria, setCategoria] = useState("STREET");
const motoImgs = {
  scootersImgs: ["../../imgs/Scooters/honda_adv_150.webp","../../imgs/Scooters/honda_adv_350.jpg","../../imgs/Scooters/honda_activa.webp",
  "../../imgs/Scooters/honda_activa_125.jpg","../../imgs/Scooters/honda_airblade_150.jpg","../../imgs/Scooters/honda_beat_street.png",
  "../../imgs/Scooters/benly.webp"
  ],
  streetsImgs: ["../../imgs/Streets/honda_cb_1000R.jpeg","../../imgs/Streets/honda_cb_1000R_black_edition.png","../../imgs/Streets/honda_cb_125R.jpg",
  "../../imgs/Streets/honda_cb_125E.webp","../../imgs/Streets/honda_cb_300R.jpg","../../imgs/Streets/honda_cb_300R_NeoSportsCafe.jpg",
  "../../imgs/Streets/honda_cb_500F.jpg","../../imgs/Streets/honda_cb_650R.jpg"],
  offImgs: ["../../imgs/Offs/africa_twin.jpg","../../imgs/Offs/africa_twin_as.jpg"]
 };
 

const scooters = props.motoDatos().scooters.map((scooter,ind) => {
  return(
    <MotoCard
    key={ind}
    url={motoImgs.scootersImgs[ind]} 
    modelo={scooter.model}
    año={scooter.year}
    />
  )
});

const streets = props.motoDatos().streets.filter((street,ind) => ind < 9).map((street,ind) => {
  return(
    <MotoCard
    key={ind}
    url={motoImgs.streetsImgs[ind]} 
    modelo={street.model}
    año={street.year}
    />
  ) 
});

const offRoads = props.motoDatos().offRoads.filter((off,ind) => ind < 9).map((off,ind) => {
  return(
    <MotoCard
    key={ind}
    url={motoImgs.offImgs[ind]} 
    modelo={off.model}
    año={off.year}
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
    <section>
    <nav className="flex justify-around"id="categorias-motos">
      <button onClick={handleClick} className="border border-black rounded-xl my-4 py-2 px-4 text-2xl">STREET</button>
      <button onClick={handleClick} className="border border-black rounded-xl my-4 py-2 px-4 text-2xl">OFF</button>
      <button onClick={handleClick} className="border border-black rounded-xl my-4 py-2 px-4 text-2xl">SCOOTER</button>
      </nav> 
      <section className="m-auto">
      <div id="wrapper" className="flex flex-wrap justify-evenly gap-x-20 gap-y-10">
      {mostrarMotos()}
      </div>
      </section>
    </section>
   ) 
}
