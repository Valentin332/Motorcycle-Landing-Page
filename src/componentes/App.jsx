import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagram, faYoutube  } from '@fortawesome/free-brands-svg-icons'
import Navbar from "./Navbar.jsx"
import Consulta from "./Consulta.jsx"
import Home from "./Home.jsx"
import Catalogo from "./Catalogo.jsx"
import { MotosDatosFiltrados } from "./DatosMotos.jsx"
import Moto from "./Moto.jsx"
import Historia from "./Historia.jsx"
import PosVenta from "./PostVenta.jsx"
export default function App(){
    const test = {
            "marca": "Honda",
            "modelo": "Activa 125",
            "año": "2022",
            "tipo": "Scooter",
            "cilindrada": "123,7 ccm (7,55 pulgadas cúbicas)",
            "motor": "monocilíndrico, cuatro tiempos",
            "potencia": "8,2 CV (6,0 kW)) @ 6500 RPM",
            "par": "10,3 Nm (1,1 kgf-m o 7,6 ft.lbs) @ 5000 RPM",
            "compresión": "10.0:1",
            "diámetro_carrera": "50,0 x 63,1 mm (2,0 x 2,5 pulgadas)",
            "sistema_combustible": "Inyección. PGM-FI",
            "caja de cambios": "Automática",
            "transmisión": "Correa (transmisión final)",
            "bastidor": "chasis",
            "suspensión_delantera": "Horquilla telescópica",
            "suspensión_trasera": "Hidráulica con muelle ajustable en 3 pasos",
            "neumático_delantero": "90/90-12 ",
            "neumático_trasero": "90/100-10 ",
            "frenos_delanteros": "Single disc",
            "rear_brakes": "Freno de expansión (freno de tambor)",
            "peso_total": "109,0 kg (240,3 libras)",
            "altura_asiento": "712 mm (28,0 pulgadas) Si es ajustable, la posición más baja",
            "altura_total": "1170 mm (46,1 pulgadas)",
            "longitud_total": "1850 mm (72,8 pulgadas)",
            "total_width": "707 mm (27,8 pulgadas)",
            "distancia entre ejes": "1260 mm (49,6 pulgadas)",
            "capacidad_combustible": "5,30 litros (1,40 galones US)",
            "arranque": "Eléctrico y patada"
          };
    return (
    <main>
     <Navbar />
     <PosVenta />
    <footer className=" flex border border-black place-content-around mt-4">
    <ul id="socials">
    <h1 className="text-5xl my-1 font-['Faster_One','cursive']">VeloMAX</h1>
    <div className="flex place-content-evenly">
        <li className="my-2">
        <a><FontAwesomeIcon className="text-3xl"icon={faInstagram} /></a>  
        </li>
        <li className="my-2">
        <a><FontAwesomeIcon className="text-3xl" icon={faFacebookSquare} /></a>     
        </li>
        <li className="my-2">
        <a><FontAwesomeIcon className="text-3xl" icon={faYoutube} /></a>     
        </li>
        </div>
    </ul>
    <ul id="contacto">
    <h2 className="my-2 text-xl">Contacto</h2> 
    <li className="my-2">Formulario</li>
    <li className="my-2">Trabajá con nosotros</li>
    </ul>
    <ul id="legal">
    <h2 className="my-2 text-xl">Legal</h2>
    <li className="my-2">Términos y Condiciones</li>
    <li className="my-2">Politica de protección de datos</li>
    </ul>
    <ul id="acerca">
    <h2 className="my-2 text-xl">Acerca de</h2>
    <li className="my-2">Nuestra Empresa</li>
    </ul>
    </footer>
     </main>
    )
}
