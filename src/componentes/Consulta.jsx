import React from "react"

export default function Consulta(props){
   const [provincias, setProvincias] = React.useState([]);
   React.useEffect( () => {
      fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then(datos => datos.json())
      .then( datos => setProvincias(datos.provincias))
   }
   ,[])
   const provinciasOptions = provincias.map(provincia => { return  <option>{provincia.nombre}</option> })

   return(
      <section>
  <form className="mb-10 w-3/4 m-auto">
   <h1 className={props.modo === "seccion" ? "text-6xl mt-4" : "text-5xl"}>
      {props.modo === "trabajo" ? "Dejanos tu C.V acá" : "Podes mandarnos tus consultas acá"}
      </h1>
   <div className="flex flex-wrap ">
   <input className="border-b border-b-black mr-10 mt-10 basis-1/4" type="text" placeholder="Nombre y Apellido"></input>
   <input className="border-b border-b-black mr-10 mt-10 basis-1/4" type="email" placeholder="Email"></input>
   <input className="border-b border-b-black mr-10 mt-10 basis-1/4" type="tel"  placeholder="Telefono de contacto"></input>
  <select className="mr-7 mt-10 basis-1/4">
   {provinciasOptions}
  </select>
  <input className="border-b border-b-black mr-7 mt-10 basis-1/4" type="text" placeholder="Localidad"></input>
  </div>

  {props.modo === "trabajo" ?
  <div className="mt-10 mb-12">
  <label className="text-3xl py-4 px-6 hover:cursor-pointer border rounded-lg border-black"htmlFor="cv">
  <input className="opacity-0 w-[0.1px] h-[0.1px] absolute" id="cv" type="file"/>
   Adjuntá tu Curriculum
   </label>
  </div>
  :
   <textarea rows="8" cols="60"className="px-2 mt-10 rounded-md border border-black" placeholder="Comentarios..."></textarea>
   }

   <button className=" text-2xl px-4 py-3 mt-4 block border border-black ml-0">{props.modo === "trabajo" ? "Enviar" : "Enviar Consulta"}</button>
   </form>
   {props.modo === "seccion" &&
   <aside className="m-auto w-3/4 my-4 px-4 py-2 border border-black rounded-md">
   <h2 className="text-3xl my-2">Comunicate con nuestro servicio de atención al cliente</h2>
   <p className="text-2xl">XXXX-XXX-XXXX</p>
   <h4 className="mb-2">(Lunes a viernes de 09:00 a 13:00hs y de 14:00 a 17:00hs)</h4>
   </aside>  
   }
   </section> 
   )
}