import React from "react"

export default function Consulta(props){
   const [provincias, setProvincias] = React.useState([
   'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba','Corrientes','Entre Rios','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones','Neuquen','Río Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fé','Santiago del Estero','Tierra del Fuego, Antártida e Islas del Atlántico Sur','Tucumán' 
]);
   const provinciasOptions = provincias.map((provincia,ind) => { return  <option key={ind}>{provincia}</option> })

   return(
      <section className="w-3/4 mx-auto">
  <form className="mb-10 m-auto">
   <h1 className={props.modo === "seccion" ? "text-6xl mt-4 text-blue-800" : "text-5xl text-blue-800"}>
      {props.modo === "trabajo" ? "Dejanos tu C.V acá" : "Podes mandarnos tus consultas acá"}
      </h1>
   <div className="flex flex-wrap ">
   <input className="border-b focus:outline-blue-800 border-b-blue-800 mr-10 mt-10 basis-1/4" type="text" placeholder="Nombre y Apellido"></input>
   <input className="border-b focus:outline-blue-800 border-b-blue-800 mr-10 mt-10 basis-1/4" type="email" placeholder="Email"></input>
   <input className="border-b focus:outline-blue-800 border-b-blue-800 mr-10 mt-10 basis-1/4" type="tel"  placeholder="Telefono de contacto"></input>
  <select className=" max-w-full focus:outline-blue-800 border border-b-cdblue-800 mr-7 mt-10 basis-1/4">
   {provinciasOptions}
  </select>
  <input className="border-b focus:outline-blue-800 border-b-blue-800 mr-7 mt-10 basis-1/4" type="text" placeholder="Localidad"></input>
  </div>

  {props.modo === "trabajo" ?
  <div className="mt-10 mb-12">
  <label className="  lg:text-3xl py-4 px-6 hover:cursor-pointer hover:bg-blue-600 border rounded-lg  bg-blue-800 text-white"htmlFor="cv">
  <input className="opacity-0 w-[0.1px] h-[0.1px] absolute" id="cv" type="file"/>
   Adjuntá tu Curriculum
   </label>
  </div>
  :
   <textarea  cols="120"className="w-full focus:outline-blue-800 px-2 mt-10 rounded-md border border-blue-800" placeholder="Comentarios..."></textarea>
   }

   <button className=" text-2xl px-4 py-3 mt-4 block  font-bold border-2 rounded-md border-white text-white bg-blue-800 
   hover:text-blue-800 hover:border-blue-800 hover:bg-white ml-0">{props.modo === "trabajo" ? "Enviar" : "Enviar Consulta"}</button>
   </form>

   {props.modo === "seccion" &&
   <aside className=" w-fit my-10 px-4 py-2 border border-blue-800 text-blue-800 rounded-md">
   <h2 className="text-3xl my-2">Comunicate con nuestro servicio de atención al cliente</h2>
   <p className="text-2xl">XXXX-XXX-XXXX</p>
   <h4 className="mb-2">(Lunes a viernes de 09:00 a 13:00hs y de 14:00 a 17:00hs)</h4>
   </aside>  
   }
   {props.modo === "trabajo" && <img className="w-full h-1/2 pb-2" src="../../stock_4.jpg"/>}
   </section> 
   )
}