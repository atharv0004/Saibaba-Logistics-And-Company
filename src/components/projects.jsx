import React from "react";
import { projectsImageData } from "../data/projectsImage";
// import { Link } from "react-router-dom";
// import Button from "./button";

const Projects = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1rem] mt-[50px]">
        {projectsImageData.map((projectData, index) => {
          const { imageURL, imageDescription} = projectData;
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="h-[200px] p-10  md:h-[180px] lg:h-[150px] xl:h-[200px] relative project_image_wrap w-full rounded-[10px] overflow-hidden"
              style={{
                border: "3px solid black", // Increased border width to 5px
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 1)", // Increased shadow spread and offset
              }}
            >
              <img
                src={imageURL}
                width={"100%"}
                className="duration-700 h-full"
                alt={imageDescription}
              />
              {/* <div className="image_overlay z-[1] absolute h-full w-full top-0 left-0"></div> */}
              <div className="bottom-0 left-0 p-[20px] w-full text-white absolute z-[2]">
                {/* <h1 className="text-[30px] xl:text-[30px] md:text-[30px] lg:text-[25px] lg:leading-[25px] md:leading-[30px] font-jost xl:leading-[30px] leading-[30px] font-[600]">
                {projectTitle}
              </h1> */}
                {/* <div className="mt-[20px]">
                <Link to={path} className="no-underline">
                  <Button
                    ringVariant={"ring-white"}
                    text={"Visit project"}
                    variant={"white"}
                  />
                </Link>
              </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
