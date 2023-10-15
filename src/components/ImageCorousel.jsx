import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    url: "../../public/page01/card11.png",
    link: "/ccPage1"
  },
  {
    id: 2,
    url: "../../public/page01/card22.png",
    link: "/ccPage2"
  }
];

const ImageCarousel = () => {
  return (
    <div className="ml-4 top-[220px] 2x1:max-container relative flex flex-col">
      <Carousel autoPlay={true} thumbWidth={100}  showThumbs={false} showStatus={false}>
        {images.map((image) => (
          <Link to={image.link} key={image.id}>
            <div>
              <img className="h-[500px]" src={image.url} alt={`Image ${image.id}`} />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
