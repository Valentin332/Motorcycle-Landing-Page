
export default function Moto({data}){

return(
 <section className="mb-20">
  <h1 className="text-center my-5 text-5xl">{data.modelo}</h1> 
  <img className="w-full" src="https://cdn.shopify.com/s/files/1/0554/7098/1274/files/QQ_20230216093532.png?v=1676511407&width=1080"/>
   <section className="w-3/4 mx-auto my-4">
   <h2 className="text-xl">Moto slogan</h2>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et elit leo. Pellentesque imperdiet augue at feugiat ultricies. Aliquam venenatis.</p>
   </section>
   <h1 className="mt-5 text-4xl text-center">FICHA TECNICA</h1>
   <section id="ficha" className="w-3/4 m-auto flex flex-col lg:flex-row flex-wrap gap-y-10 gap-x-5 justify-between">
    <div className="basis-1/3">
      <h2 className="my-5 text-2xl">MOTOR</h2>
      <h4 className="border-t  border-black">TIPO MOTOR<span>{data.motor}</span></h4>
      <h4 className="border-t  border-black">CILINDRADA<span>{data.cilindrada}</span></h4>
      <h4 className="border-t  border-black">POTENCIA<span>{data.potencia}</span></h4>
      <h4 className="border-t  border-black">DIAMETRO POR CARRERA<span>{data.diámetro_carrera}</span></h4>
      <h4 className="border-t  border-black">EMBRAGUE<span>{data.embrague ? data.embrague : "Automatico"}</span></h4>
    </div>
    <div className="basis-1/3">
      <h4 className="border-t  border-black mt-[4.3rem]">CAJA<span>{data["caja de cambios"]}</span></h4>
      <h4 className="border-t  border-black">REFRIGERACIÓN<span>{data.refrigeración ? data.refrigeración : "Por aire"}</span></h4>
      <h4 className="border-t  border-black">ARRANQUE<span>{data.arranque}</span></h4>
      <h4 className="border-t  border-black">REL.DE COMPRESIÓN<span>{data.compresión}</span></h4>
    </div>
    <div className="basis-1/3">
     <h2 className="my-5 text-2xl" >ESTRUCTURA</h2>
     <h4 className="border-t  border-black">AÑO<span>{data.año}</span></h4>
     <h4 className="border-t  border-black">ALTURA DEL ASIENTO<span>{data.altura_asiento}</span></h4>
     <h4 className="border-t  border-black">PESO VACIO<span>{data.peso_total}</span></h4>
     <h4 className="border-t  border-black">CAPACIDAD DE TANQUE<span>{data.capacidad_combustible}</span></h4>
     <h4 className="border-t  border-black">RODADO<span>DELANTERO {data.neumático_delantero} TRASERO {data.neumático_trasero}</span></h4>
     <h4 className="border-t  border-black">FRENOS<span>DELANTEROS {data.frenos_delanteros} / TRASEROS {data.rear_brakes}</span></h4>
     <h4 className="border-t  border-black">SUSPENSIONES<span>DELANTERA {data.suspensión_delantera} / TRASERA {data.suspensión_trasera}</span></h4> 
    </div>
    <div className=" h-fit relative basis-1/3 border-r-2 border-black">
      <h2 className="py-2">ANCHO <br/>{data.total_width}</h2>
      <hr className="border border-black w-40"/>
      <h2 className=" absolute top-0 right-0 pr-2">ALTO {data.altura_total}</h2>
      <img className="border-b-2 border-black" src="../../imgs/Scooters/honda_adv_150.webp"/>
      <h2 className="">LARGO {data.longitud_total}</h2> 
    </div>
   </section>
 </section>   
)

}



// {
//   "marca": "Honda",
//   "modelo": "Activa 125",
//   "año": "2022",
//   "tipo": "Scooter",
//   "cilindrada": "123,7 ccm (7,55 pulgadas cúbicas)",
//   "motor": "monocilíndrico, cuatro tiempos",
//   "potencia": "8,2 CV (6,0 kW)) @ 6500 RPM",
//   "par": "10,3 Nm (1,1 kgf-m o 7,6 ft.lbs) @ 5000 RPM",
//   "compresión": "10.0:1",
//   "diámetro_carrera": "50,0 x 63,1 mm (2,0 x 2,5 pulgadas)",
//   "sistema_combustible": "Inyección. PGM-FI",
//   "caja de cambios": "Automática",
//   "transmisión": "Correa (transmisión final)",
//   "bastidor": "chasis",
//   "suspensión_delantera": "Horquilla telescópica",
//   "suspensión_trasera": "Hidráulica con muelle ajustable en 3 pasos",
//   "neumático_delantero": "90/90-12 ",
//   "neumático_trasero": "90/100-10 ",
//   "frenos_delanteros": "Single disc",
//   "rear_brakes": "Freno de expansión (freno de tambor)",
//   "peso_total": "109,0 kg (240,3 libras)",
//   "altura_asiento": "712 mm (28,0 pulgadas) Si es ajustable, la posición más baja",
//   "altura_total": "1170 mm (46,1 pulgadas)",
//   "longitud_total": "1850 mm (72,8 pulgadas)",
//   "total_width": "707 mm (27,8 pulgadas)",
//   "distancia entre ejes": "1260 mm (49,6 pulgadas)",
//   "capacidad_combustible": "5,30 litros (1,40 galones US)",
//   "arranque": "Eléctrico y patada"
// },