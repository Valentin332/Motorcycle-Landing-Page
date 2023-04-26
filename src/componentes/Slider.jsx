import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import react from "react"
export default function Slider(props){
    const [slideNumber, changeSlide] = react.useState(0);
    
     function handleAdd(){
    if(slideNumber != props.slides.length - 1){changeSlide(prevSlide => prevSlide + 1)}
    else changeSlide(0)
    };

     function handleSubstract(){
    if(slideNumber > 0){ changeSlide(prevSlide => prevSlide - 1 ) }    
    else changeSlide(props.slides.length - 1)
     }

    return(
    <div className="relative m-auto">
        <button onClick={handleSubstract} className='absolute top-2/4 left-2'><FontAwesomeIcon className='text-6xl lg:text-8xl text-blue-700 hover:scale-110 hover:rounded-full hover:border-4 hover:border-yellow-400' icon={faCircleArrowLeft} /></button>
         <Link to={props.slides[slideNumber].link}><img className="w-full h-full" src={props.slides[slideNumber].img}/></Link> 
        <button onClick={handleAdd} className='absolute top-2/4 right-2'><FontAwesomeIcon className='text-6xl lg:text-8xl text-blue-700 hover:scale-110 hover:rounded-full hover:border-4 hover:border-yellow-400' icon={faCircleArrowRight} /></button>   
        </div>
)    
}