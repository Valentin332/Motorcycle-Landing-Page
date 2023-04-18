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
        <section className="h-[40rem]  bg-cover w-3/4 mb-6 mx-auto text-center text-white bg-[url('../../imgs/deposito.png')]">
       {modo == "E-SERVICE" ?
       <div className="text-3xl  mx-10 border border-transparent">
       <div className="mt-48 p-4 border border-white">
       <h1 className="text-5xl">E-Service</h1>
       <p className="leading-9">Los servicios de mantenimiento y el correcto uso
       y cuidado de la unidad es vital para que el producto pueda
       ser utilizado y preservado de la mejor manera.</p>
       <button className="mt-4 text-4xl">Ingresá</button>
       </div>
       </div> 
       :
       <div className="flex flex-col">
       <h1 className="mt-12 text-4xl">GARANTIA</h1>
       <h2 className="mt-12 text-3xl"> Productos VeloMAX</h2>
      <h2 className="mt-10 text-2xl">Todos los motovehiculos fabricados o importados por VeloMAX presentan la siguiente garantía</h2>
      <FontAwesomeIcon className="text-6xl mt-10" icon={faMotorcycle} />
      <p className="mt-2">6 meses <br/> o 6.000 km.</p>
     
       </div>  
       }
       <button className="text-4xl mt-20 p-4 border border-white rounded-md mr-20" onClick={handleState}>E-SERVICE</button>
       <button className="text-4xl p-4 border border-white rounded-md" onClick={handleState}>GARANTIA</button>
       </section>
       <Consulta /> 
     </section>   
    )
}