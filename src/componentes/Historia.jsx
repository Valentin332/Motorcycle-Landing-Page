import Consulta from "./Consulta"
export default function Historia(){
    
    return(
    <section className="pb-4">
        <section className=" my-6 mx-auto text-center w-3/4 leading-8">
     <img/>
     <h1 className="text-7xl font-['Faster_One','cursive']">VeloMAX</h1>
     <h3>Slogan or someshit</h3>
     <p>En 1990, dos hermanos llamados Marcos y Lautaro abrieron un pequeño taller de reparación de motocicletas en un garage. Viendo la demanda de motocicletas asequibles y fiables, empezaron a experimentar con diseños y acabaron creando su propia marca, VeloMAX. La empresa ganó popularidad rápidamente y en el año 2000 se convierte en uno de los mayores fabricantes de motocicletas de Argentina. Aunque experimentaron altibajos a lo largo de los años, su compromiso con la calidad y la satisfacción del cliente nunca decayó. Hoy en día, VeloMAX sigue innovando y produciendo algunas de las mejores motocicletas del mundo.
        </p>
        <h2 className="mt-10 text-4xl">Nuestros valores</h2>
        <div className="flex lg:flex-row flex-col">
        <img src="../../imgs/V(logo_2010).png" className="lg:w-80 lg:h-80"/>
        <p className=" mt-10 h-fill text-x">En VeloMAX, estamos orgullosos de nuestro compromiso con la excelencia, la innovación y la satisfacción del cliente. Nuestros valores fundamentales son la base de todo lo que hacemos, desde la calidad de nuestros productos hasta el nivel de servicio que ofrecemos a nuestros clientes. Creemos en la honestidad, la transparencia y la integridad, y nos dedicamos a crear un futuro seguro y sostenible para todos. Valoramos el trabajo en equipo, la actitud positiva y la pasión por nuestro trabajo, y nos esforzamos por superar las expectativas en todo momento. En VeloMAX, nuestro compromiso con la calidad y la innovación es inquebrantable, y estamos orgullosos de ser una fuerza líder en la industria de la motocicleta.
        </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:border-2 border-black rounded-lg my-8">
      <img className="lg:h-60  lg:w-1/4 p-6" src="../../imgs/stock_1.jpg"/>
      <img className="lg:h-60  lg:w-1/4 p-6" src="../../imgs/stock_2.avif"/>
      <img className="lg:h-60  lg:w-1/4 p-6" src="../../imgs/stock_3.jpg"/>
      <img className="lg:h-60  lg:w-1/4 p-6" src="../../imgs/stock_4.webp"/>
        </div>
     <h1 className="text-4xl text-left my-6">¿Te interesa ser parte de VeloMAX?</h1>
     </section>
       <Consulta modo="trabajo"/> 
     </section>
    )
}