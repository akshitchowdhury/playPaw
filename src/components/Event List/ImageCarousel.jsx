import { Carousel } from 'flowbite-react';
import './ImageCarousel.css';

function ImageCarousel(props) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className='carousel'>
        {props.src.map((image, index) => (
          <img key={index} src={image} alt="..." />
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
