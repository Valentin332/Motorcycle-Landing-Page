import { Link } from "react-router-dom"

export default function MotoCard(props){
return(
    <div className=" flex flex-col basis-1/4 border border-black rounded-t-lg">
    <img src={props.url}
    className=" rounded-t-lg border-b border-black w-full sm:h-30 lg:h-60"/>
    <h2 className="bg-white border-b border-black w-full  text-center text-2xl py-2 ">{props.modelo}</h2>
    <Link to={`/Catalogo/${props.categoria}${props.modelo.replace(/\s/g,"_")}`}><button className=" hover:bg-blue-600 bg-blue-800  w-full  text-2xl font-medium text-white py-1 ">Conocela</button></Link>
    </div>
)
}