import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import react from "react"
export default function Slider(props){
    const [slideNumber, changeSlide] = react.useState(0);
    const slides = props.slides;
    
     function handleAdd(){
    if(slideNumber != slides.length - 1){changeSlide(prevSlide => prevSlide + 1)}
    else changeSlide(0)
    };

     function handleSubstract(){
    if(slideNumber > 0){ changeSlide(prevSlide => prevSlide - 1 ) }    
    else changeSlide(slides.length - 1)
     }
     const testStyles = { background: slides[slideNumber] }

return(
    <div className="relative m-auto border border-black  h-96">
        <button onClick={handleSubstract} className='absolute top-2/4 left-2'><FontAwesomeIcon className='text-5xl' icon={faCircleArrowLeft} /></button>
     {/* <a><img/></a> */}
        <div style={testStyles}>ayo</div>
        <button onClick={handleAdd} className='absolute top-2/4 right-2'><FontAwesomeIcon className='text-5xl' icon={faCircleArrowRight} /></button>   
        </div>
)    
}