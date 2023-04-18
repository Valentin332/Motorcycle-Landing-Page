import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Navbar(){
 
function handleDisplay(){
    const mobileScreen = document.getElementById("mobile-nav");
    mobileScreen.classList.toggle("hidden");
    mobileScreen.classList.toggle("show");
};

return(
<header>
<nav className="h-16 flex flex-row">
<img className="w-18 h-15 ml-2 inline" 
src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/V_%28logo_2010%29.svg/2048px-V_%28logo_2010%29.svg.png"/>
<h1 className="text-5xl mx-3.5 mt-1.5 font-['Faster_One','cursive']">VeloMAX</h1>
<button onClick={handleDisplay} id="nav-display" className=" h-fit mt-3 py-2 px-3 border rounded-lg border-black mr-28 cursor-pointer ml-auto lg:hidden">
<FontAwesomeIcon icon={faBars} className='text-lg' />
</button>
<ul className=" hidden h-max  mr-20 ml-auto lg:flex flex-row mt-0">
<li className="mx-2 text-xl mt-4"><a>Nuestras Motos</a></li>
<li className="mx-2 text-xl mt-4"><a>Nosotros</a></li>
<li className="mx-2 text-xl mt-4"><a>Contactanos</a></li>
<li className="mx-2 text-xl mt-4"><a>Post-Venta</a></li>
</ul>
</nav>
<ul id="mobile-nav" className="hidden absolute left-3/4  h-max w-fit flex-col border  lg:hidden">
<li className="mx-2 text-xl mt-4"><a>Nuestras Motos</a></li>
<li className="mx-2 text-xl mt-4"><a>Nosotros</a></li>
<li className="mx-2 text-xl mt-4"><a>Contactanos</a></li>
<li className="mx-2 text-xl mt-4"><a>Post-Venta</a></li>
</ul>
</header>
)}