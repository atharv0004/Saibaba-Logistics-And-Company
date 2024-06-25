import React from "react";
import ServiceOne from "../assets/images/service_1.jpg";
import ServiceTwo from "../assets/images/service_2.jpg";
import ServiceThree from "../assets/images/service_3.jpg";
import ServiceFour from "../assets/images/service_4.jpg";
// import Accordion from "../../../utils/accordions";

const ServiceSecOne = () => {
  return (
    <>
      <div className="py-5">
        <div className="px-[20px] w-full lg:px-[100px]">
          <div className="lg:flex mt-10 mg:mt-5 gap-10 items-center">
            <div >
              <img
                data-aos="fade-right"
                data-aos-duration="2000"
                src={ServiceOne}
                style={{ width: '1500px', height: 'auto' }} // Adjust the width and height as needed
                alt="cargo ship at night"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="2000">
              <h1 className="text-lg font-extrabold mb-10 mt-10 md:mt-0 font-jost leading-5 lg:text-3xl lg:leading-8 text-gray-800 font-normal">
                Effortless Custom Clearance
              </h1>
              <p className="text-lg text-gray-800"> 
                Customs brokers facilitate the clearance of goods through customs checkpoints, ensuring compliance with import and export regulations. They handle documentation, taxes, duties, and liaise with government agencies on behalf of clients.
              </p>           
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row mt-10 lg:mt-5 gap-10 items-center">
            <div data-aos="fade-right" data-aos-duration="2000">
              <h1 className="text-lg font-extrabold mb-10 font-jost leading-5 lg:text-3xl lg:leading-8 text-gray-800 font-normal">
                Sea & Air Freight Forwarding
              </h1>
              <p className="text-lg text-gray-800">
                Freight forwarders act as intermediaries between shippers and carriers, arranging the transportation of goods across various modes and routes. They handle documentation, customs clearance, and negotiations with carriers to ensure smooth shipments.
              </p>
            </div>
            <div >
              <img
                data-aos="fade-left"
                data-aos-duration="2000"
                src={ServiceTwo}
                className="w-[1500px] h-auto"
                alt="cargo ship at night"
              />
            </div>
          </div>

          <div className="lg:flex mt-10 mg:mt-5 gap-10 items-center">
            <div className="image_wrap">
              <img
                data-aos="fade-right"
                data-aos-duration="2000"
                src={ServiceThree}
                className="w-[1500px] h-auto"
                alt="cargo ship at night"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="2000">
              <h1 className="text-lg font-extrabold my-10 font-jost leading-5 lg:text-3xl lg:leading-8 text-gray-800 font-normal">
                Transportation Management
              </h1>
              <p className="text-lg text-gray-800">
                This service involves planning, optimizing, and executing the movement of goods from one location to another. It encompasses various modes of transportation such as road, rail, sea, and air, ensuring timely and cost-effective deliveries.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row mt-10 lg:mt-5 gap-10 items-center">
            <div data-aos="fade-right" data-aos-duration="2000">
              <h1 className="text-lg font-extrabold mb-10 font-jost leading-5 lg:text-3xl lg:leading-8 text-gray-800 font-normal">
                Warehousing and Distribution
              </h1>
              <p className="text-lg text-gray-800">
                Warehousing involves storing goods in a secure facility, while distribution ensures the efficient movement of those goods to their final destinations. These services are vital for managing inventory, fulfilling orders, and reducing delivery times.
              </p>
            </div>
            <div className="image_wrap">
              <img
                data-aos="fade-left"
                data-aos-duration="2000"
                src={ServiceFour}
                className="w-[1500px] h-auto"
                alt="cargo ship at night"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSecOne;
