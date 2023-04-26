import { useParams } from "react-router-dom"
export default function Moto({datos}){
const modelo = useParams().modelo;
const streetsRegExp = /(^streets_)/;
const scootersRegExp = /(^scooters_)/;
const offRegExp = /(^offRoads_)/
let data
let url
let secondUrl
if(modelo.match(streetsRegExp)){
  console.log("yea")
  data = datos().streets.find(moto => moto.modelo == modelo.replace(streetsRegExp,"").replace(/_/g," "))
  const index = datos().streets.indexOf(data);
  url = datos().streetsImgs[0][index]
  secondUrl = datos().streetsImgs[1][index]
}
else if(modelo.match(scootersRegExp)){
  console.log("yeaa")
  data = datos().scooters.find(moto => moto.modelo == modelo.replace(scootersRegExp,"").replace(/_/g," "))
  const index = datos().scooters.indexOf(data)
  url = datos().scootersImgs[0][index]
  secondUrl = datos().scootersImgs[1][index]
}
else if(modelo.match(offRegExp)){
  console.log("ouyeaa")
  data = datos().offRoads.find(moto => moto.modelo == modelo.replace(offRegExp,"").replace(/_/g," "))
  const index = datos().offRoads.indexOf(data)
  url = datos().offImgs[0][index]
  secondUrl = datos().offImgs[1][index]
};
return(
 <section className="pb-20 bg-blue-900">
  <h1 className="text-center py-2 text-6xl text-white font-['Faster_One','cursive'] bg-stone-950">{data.modelo}</h1> 
  <img className="w-full" src={secondUrl}/>
   <section className="bg-stone-950 text-center text-white mx-auto py-6">
   </section>
   <h1 className=" text-white mt-6 text-5xl text-center">FICHA TECNICA</h1>
   <section id="ficha" className=" text-white w-3/4 m-auto flex flex-col lg:flex-row flex-wrap gap-y-10 gap-x-5 justify-between">
    <div className="basis-1/3">
      <h2 className="my-5 text-2xl">MOTOR</h2>
      <h4 className="border-t  border-white">TIPO MOTOR<span>{data.motor}</span></h4>
      <h4 className="border-t  border-white">CILINDRADA<span>{data.cilindrada}</span></h4>
      <h4 className="border-t  border-white">POTENCIA<span>{data.potencia}</span></h4>
      <h4 className="border-t  border-white">DIAMETRO POR CARRERA<span>{data.diámetro_carrera}</span></h4>
      <h4 className="border-t  border-white">EMBRAGUE<span>{data.embrague ? data.embrague : "Automatico"}</span></h4>
    </div>
    <div className="basis-1/3">
      <h4 className="border-t  border-white mt-[4.3rem]">CAJA<span>{data["caja de cambios"]}</span></h4>
      <h4 className="border-t  border-white">REFRIGERACIÓN<span>{data.refrigeración ? data.refrigeración : "Por aire"}</span></h4>
      <h4 className="border-t  border-white">ARRANQUE<span>{data.arranque}</span></h4>
      <h4 className="border-t  border-white">REL.DE COMPRESIÓN<span>{data.compresión}</span></h4>
    </div>
    <div className="basis-1/3">
     <h2 className="my-5 text-2xl" >ESTRUCTURA</h2>
     <h4 className="border-t  border-white">AÑO<span>{data.año}</span></h4>
     <h4 className="border-t  border-white">ALTURA DEL ASIENTO<span>{data.altura_asiento}</span></h4>
     <h4 className="border-t  border-white">PESO VACIO<span>{data.peso_total}</span></h4>
     <h4 className="border-t  border-white">CAPACIDAD DE TANQUE<span>{data.capacidad_combustible}</span></h4>
     <h4 className="border-t  border-white">RODADO<span>DELANTERO {data.neumático_delantero} TRASERO {data.neumático_trasero}</span></h4>
     <h4 className="border-t  border-white">FRENOS<span>DELANTEROS {data.frenos_delanteros} / TRASEROS {data.rear_brakes}</span></h4>
     <h4 className="border-t  border-white">SUSPENSIONES<span>DELANTERA {data.suspensión_delantera} / TRASERA {data.suspensión_trasera}</span></h4> 
    </div>
    <div className=" h-fit w-fit relative basis-1/3 border-r-2 border-white">
      <h2 className="absolute top-0 right-0 pr-2">ALTO {data.altura_total}</h2>
      <h2 className="py-2 mt-4">ANCHO <br/>{data.total_width}</h2>
      <hr className="border border-white w-40"/>
      <img className="py-2 pr-28 border-b-2 border-white"src={url}/>
      <h2 className="">LARGO {data.longitud_total}</h2> 
    </div>
   </section>
 </section>   
)

}