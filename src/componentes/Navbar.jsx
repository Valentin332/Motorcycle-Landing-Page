import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Navbar(){
 
function handleDisplay(){
    const mobileScreen = document.getElementById("mobile-nav");
    mobileScreen.classList.toggle("hidden");
    mobileScreen.classList.toggle("show");
};

return(
<header className="py-6 text-">
<nav className="h-16 flex flex-row">
<img className="w-20 h-20 ml-2 inline" 
src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/V_%28logo_2010%29.svg/2048px-V_%28logo_2010%29.svg.png"/>
<Link to="/"><h1 className="text-6xl hover:text-blue-800 mx-3.5 mt-1.5 font-['Faster_One','cursive']">VeloMAX</h1></Link>
<button onClick={handleDisplay} id="nav-display" className=" bg-white z-20 h-fit mt-3 py-3 px-4 border rounded-lg border-black hover:border-blue-800 mr-24 cursor-pointer ml-auto lg:hidden">
<FontAwesomeIcon icon={faBars} className="text-xl hover:text-blue-800" />
</button>
<ul className=" hidden h-max  mr-20 ml-auto lg:flex flex-row mt-0">
<li className="mx-4 hover:text-blue-800 text-2xl mt-4"><Link to="/">Inicio</Link></li>
<li className="mx-4 hover:text-blue-800 text-2xl mt-4"><Link to="/Catalogo">Nuestras Motos</Link></li>
<li className="mx-4 hover:text-blue-800 text-2xl mt-4"><Link to="/Nosotros">Nosotros</Link></li>
<li className="mx-4 hover:text-blue-800 text-2xl mt-4"><Link to="/Contacto">Contactanos</Link></li>
<li className="mx-4 hover:text-blue-800 text-2xl mt-4"><Link to="/Servicios">Post-Venta</Link></li>
</ul>
</nav>
<ul id="mobile-nav" className=" z-10 hidden absolute left-3/4  h-max w-fit flex-col border border-black bg-white  rounded-md lg:hidden">
<Link to="/"><li className="hover:bg-blue-700 hover:text-white  text-2xl text-center p-2">Inicio</li></Link>
<Link to="/Catalogo"><li className="hover:bg-blue-700 hover:text-white text-2xl text-center p-2">Nuestras Motos</li></Link>
<Link to="/Nosotros"><li className="hover:bg-blue-700 hover:text-white text-2xl text-center p-2">Nosotros</li></Link>
<Link to="/Contacto"><li className="hover:bg-blue-700 hover:text-white text-2xl text-center p-2">Contactanos</li></Link>
<Link to="/Servicios"><li className="hover:bg-blue-700 hover:text-white text-2xl text-center p-2">Post-Venta</li></Link>
</ul>
</header>
)}