import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagram, faYoutube  } from '@fortawesome/free-brands-svg-icons'
import { Route, Routes, Link } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import Consulta from "./Consulta.jsx"
import Home from "./Home.jsx"
import { MotosDatosFiltrados } from "./DatosMotos.jsx"
import Moto from "./Moto.jsx"
const PosVenta = React.lazy(() => import("./PostVenta.jsx"));
const Catalogo = React.lazy(() => import("./Catalogo.jsx"));
const Historia = React.lazy(() => import("./Historia.jsx"));
const Politicas = React.lazy(() => import("./Pol.jsx"));
const Terminos = React.lazy(() => import("./Term.jsx"));


export default function App(){

    return (
    <main className="flex flex-col">
      <Navbar /> 
      <React.Suspense fallback={<div className="spinner w-48 h-48 mx-auto my-48"></div>}>
     <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Catalogo" element={<Catalogo motoDatos = {MotosDatosFiltrados}/>}/>
    <Route path="Catalogo/:modelo" element={<Moto datos={MotosDatosFiltrados} />}/>
    <Route path="/Contacto" element={<Consulta modo="seccion" />}/>
    <Route path="/Trabajo" element={<Consulta modo="trabajo" />}/>
    <Route path="/Nosotros" element={<Historia />}/>
    <Route path="/Servicios" element={<PosVenta />}/>
    <Route path="/Politicas" element={<Politicas />}/>
    <Route path="/Terminos" element={<Terminos />}/>  
     </Routes>
     </React.Suspense>
        <div className="m-auto bg-white border border-black rounded-xl text-center"></div>

    <footer className="text-white  bg-stone-950 flex gap-x-6 lg:gap-x-0 border border-black place-content-around">
    <ul id="socials">
    <h1 className="text-5xl hover:text-yellow-400  my-1 font-['Faster_One','cursive']"><Link to="/">VeloMAX</Link></h1>
    <div className="flex place-content-evenly">
        <li className="my-2">
        <a><FontAwesomeIcon className="text-3xl hover:text-purple-600 hover:cursor-pointer"icon={faInstagram} /></a>  
        </li>
        <li className="my-2">
        <a><FontAwesomeIcon className="text-3xl hover:text-blue-800 hover:cursor-pointer" icon={faFacebookSquare} /></a>     
        </li>
        <li className="my-2">
        <a><FontAwesomeIcon className="text-3xl hover:text-red-700 hover:cursor-pointer" icon={faYoutube} /></a>     
        </li>
        </div>
    </ul>
    <ul id="contacto">
    <h2 className="my-2 text-2xl">Contacto</h2>
    <li className="my-3 text-lg hover:text-yellow-400"><Link to="/Contacto">Formulario</Link></li>
    <li className="my-3 text-lg hover:text-yellow-400"><Link to="/Trabajo">Trabajá con nosotros</Link></li>
    </ul>
    <ul id="legal">
    <h2 className="my-2 text-2xl">Legal</h2>
    <Link to="/Terminos"><li className="my-3 text-lg hover:text-yellow-400">Términos y Condiciones</li></Link>
    <Link to="/Politicas"><li className="my-3 text-lg hover:text-yellow-400">Politica de protección de datos</li></Link>
    </ul>
    <ul id="acerca">
    <h2 className="my-2 text-2xl">Acerca de</h2>
    <li className="my-3 text-lg hover:text-yellow-400"><Link to="/Nosotros">Nuestra Empresa</Link></li>
    </ul>
    </footer> 
     </main>
    )
}
