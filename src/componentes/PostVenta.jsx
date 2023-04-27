import {useState} from "react"
import  Consulta from "./Consulta"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
export default function PosVenta(){
const [modo, setModo] = useState("E-SERVICE")
    function handleState(e){
     const value = e.target.textContent;
     modo  !== value ? setModo(value) : ""
    }

    return(
     <section>
        <section className="h-[40rem]  bg-cover w-3/4 mb-6 mx-auto text-center text-white bg-[url('../../deposito.png')]">
       {modo == "E-SERVICE" ?
       <div className=" md:text-3xl border border-transparent">
       <div className="mt-40 p-4">
       <h1 className=" text-xl md:text-6xl my-2">E-Service</h1>
       <p className="lg:leading-9">Los servicios de mantenimiento y el correcto uso
       y cuidado de la unidad es vital para que el producto pueda
       ser utilizado y preservado de la mejor manera.</p>
       <button className="mt-4 font-bold text-4xl hover:scale-110">Ingresá</button>
       </div>
       </div> 
       :
       <div className="flex flex-col ">
       <h1 className="mt-12 md:text-6xl">GARANTIA</h1>
       <h2 className="mt-12 md:text-4xl"> Productos VeloMAX</h2>
      <h2 className="mt-10 lg:text-3xl">Todos los motovehiculos fabricados o importados por VeloMAX presentan la siguiente garantía</h2>
      <FontAwesomeIcon className="lg:text-6xl mt-10" icon={faMotorcycle} />
      <p className="mt-2">6 meses <br/> o 6.000 km.</p>
     
       </div>  
       }
       <button className="hover:border-white bg-blue-800  mt-10  mr-5 lg:mr-10 p-2 text-xl lg:text-4xl border border-blue-800 rounded-md"
       onClick={handleState}>E-SERVICE</button>
       <button className=" text-xl lg:text-4xl p-2 hover:border-white bg-blue-800  border border-blue-800 rounded-md" 
       onClick={handleState}>GARANTIA</button>
       </section>
       <Consulta /> 
     </section>   
    )
}