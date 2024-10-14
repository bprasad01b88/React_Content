import { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import ImageOne from '../../assets/imageone.jpg';
import ImageTwo from '../../assets/imagetwo.jpg';
import ImageThre from '../../assets/imagethree.jpg';
import Slider from "react-slick";

interface Slide {
    image : string;
    text : string;
  }
  
  const slides : Slide[] = [
    { image : ImageOne, text : 'Slide Text 1'},
    { image : ImageTwo, text : 'Slide Text 2'},
    { image : ImageThre, text : 'Slide Text 3'}
  ];
  
  const settings = {
    dots : true,
    infinite : true,
    speed : 500,
    slidesToShow : 1,
    slidesToScroll : 1,
    autoplay : true,
    autoplaySpeed : 3000,
    fade : true,
    cssEase : 'linear'
  };
  
const ImageSlider : FC = () => {
  return (
    <div className="App">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide?.image} alt={`Slide ${index + 1}`}/>
            <div className="text">{slide?.text}</div>
          </div>
        ))}
      </Slider>
     </div>
  )
}

export default ImageSlider