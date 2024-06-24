import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsImageData } from "../data/projectsImage";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-[50px]">
      <Slider {...settings}>
        {projectsImageData.map((projectData, index) => {
          const { imageURL, imageDescription } = projectData;
          return (
            <div key={index} className="p-2">
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="h-[200px] p-10 md:h-[180px] lg:h-[150px] xl:h-[200px] relative project_image_wrap w-full rounded-[10px] overflow-hidden"
                style={{
                  border: "3px solid black",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 1)",
                }}
              >
                <img
                  src={imageURL}
                  width={"100%"}
                  className="duration-700 h-full"
                  alt={imageDescription}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Projects;
