import "./Slide.scss"
import { Slider } from "infinite-react-carousel"


function Slide({children,slidesToShow,arrowsScroll}) {
  return (
    <div className="slider">
        <div className="container">
            <Slider 
            slidesToShow={slidesToShow}
            arrowsScroll={arrowsScroll}>
                {children}
            </Slider>
        </div>
    </div>
  )
}

export default Slide