import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";



export function BackgroundCarousel() {
 
  return (
    
    <Carousel>
      <div>
      <img alt="bg1" src={bg1} />
      </div>
      <div>
      <img alt="bg2" src={bg2} />
      
      </div>
      
      
 
      
    </Carousel>
    
);

}
