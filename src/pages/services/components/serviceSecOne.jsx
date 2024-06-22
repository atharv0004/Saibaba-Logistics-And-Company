import React from "react";
import ServiceOne from "../assets/images/service_one.jpg";
import ServiceTwo from "../assets/images/service_two.jpg";
import Accordion from "../../../utils/accordions";

const ServiceSecOne = () => {
  return (
    <>
      <div className="py-5">
        <div className="px-[20px] w-full lg:px-[100px]">
          <div className="lg:flex mt-10 mg:mt-5 gap-10 items-center">
            <div className="image_wrap">
              <img
                data-aos="fade-right"
                data-aos-duration="2000"
                src={ServiceOne}
                className="w-full h-full"
                alt="cargo ship at night"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="2000">
              <h1 className="text-lg my-10 font-jost leading-5 lg:text-3xl lg:leading-8 text-gray-800 font-normal">
                Effortless Custom Clearance – Seamless Sea & Air Forwarding
              </h1>
              <Accordion
                index={1}
                accordionHeading={"Customs Clearance"}
                accordionTextContent={
                  "Customs brokers facilitate the clearance of goods through customs checkpoints, ensuring compliance with import and export regulations. They handle documentation, taxes, duties, and liaise with government agencies on behalf of clients."
                }
              />
              <Accordion
                index={2}
                accordionHeading={"Sea & Air Freight Fowarding"}
                accordionTextContent={
                  "Freight forwarders act as intermediaries between shippers and carriers, arranging the transportation of goods across various modes and routes. They handle documentation, customs clearance, and negotiations with carriers to ensure smooth shipments."
                }
              />
            </div>
          </div>
          <div className="lg:flex mt-10 mg:mt-5 gap-10 items-center">
            <div data-aos="fade-right" data-aos-duration="2000">
              <h1 className="text-lg mb-10 font-jost leading-5 lg:text-3xl lg:leading-8 text-gray-800 font-normal">
                Your Goods, Our Responsibility – Flawless Logistics
              </h1>
              <Accordion
                index={3}
                accordionHeading={"Transportaion Management"}
                accordionTextContent={
                  "This service involves planning, optimizing, and executing the movement of goods from one location to another. It encompasses various modes of transportation such as road, rail, sea, and air, ensuring timely and cost-effective deliveries."
                }
              />
              <Accordion
                index={4}
                accordionHeading={"Warehousing and Distribution"}
                accordionTextContent={
                  "Warehousing involves storing goods in a secure facility, while distribution ensures the efficient movement of those goods to their final destinations. These services are vital for managing inventory, fulfilling orders, and reducing delivery times."
                }
              />
            </div>
            <div className="image_wrap">
              <img
                data-aos="fade-left"
                data-aos-duration="2000"
                src={ServiceTwo}
                className="w-full h-full"
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
