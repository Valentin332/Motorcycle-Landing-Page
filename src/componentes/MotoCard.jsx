

export default function MotoCard(props){
return(
    <div className=" flex flex-col basis-1/4 border-x border-b border-black rounded-t-lg">
    <img src={props.url}
    className="border rounded-t-md border-black w-full sm:h-30 lg:h-60"/>
    <h2 className=" border border-black w-full  text-center text-2xl py-2 ">{props.modelo}</h2>
    <button className="w-full  text-2xl py-1 ">Conocela</button>
    </div>
)
}