import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner2 = () => {
  return (
    <Carousel className="mt-10 w-10/12 mx-auto">
      <div className="">
        <img src={img2} />
      </div>
      <div className="">
        <img src={img5} />
      </div>
      <div className="">
        <img src={img4} />
      </div>
      <div className="">
        <img src={img1} />
      </div>
      <div className="">
        <img src={img6} />
      </div>
      <div className="">
        <img src={img3} />
      </div>
    </Carousel>
  );
};

export default Banner2;
