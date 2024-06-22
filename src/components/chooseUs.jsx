import React, { useState } from "react";
import ExternalLink from "../components/externalLink";
import { statsBarData } from "../data/statsBar";
import CargoImage from "../assets/images/cargo_ship.jpg";

const ChooseUs = ({ floatDiraction }) => {
  return (
    <>
      <section className="py-[5rem] bg-white overflow-hidden">
        <div className="px-[20px] lg:px-[100px] w-full">
          <h1
            data-aos={`fade-right`}
            data-aos-duration="2000"
            className="text-gray-800 font-outfit mt-[50px] font-[700] text-[40px] leading-[40px] md:text-[66px] md:leading-[66px] xl:text-[114px] xl:leading-[114px]">
            About Us
          </h1>
          <hr className="mt-9" />
          <div className="mt-8">
            <div className="block xl:flex gap-[5rem]">
              <div className="content_wrap_one w-[100%] xl:w-[60%]">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="mt-5 text-[18px] font-jost leading-[18px] lg:text-[32px] lg:leading-[32px] text-gray-800 font-[400]">
                  We Bridge Distances, We Deliver Dreams
                </h3>
                <div className="mt-[50px]">
                  <div className="tab_contents" data-aos="fade-up" data-aos-duration="2000">
                    <p className="w-fit font-jost text-[16px] lg:text-[18px] text-gray-700 block leading-[31px] mt-3">
                      Located in Kamothe, Navi Mumbai, Saibaba Logistics and Company has been in this industry for more than a decade. Over a period of time, we developed an efficient customer-oriented service, tailored with packages to the precise need for each client. We as an Agent are offering Freight Forwarding, Customs Clearance & Transportation Services as a complete package to our Clients. When your product needs to go places, you can rely on us to be there to deliver and discover how we can add value to your desire...
                    </p>
                    <div className="mt-[50px]" data-aos="fade-up" data-aos-duration="2000">
                      {statsBarData.map((stats, index) => {
                        const { name, percentage } = stats;
                        return (
                          <div key={index} className="mt-5 font-jost">
                            <div className="flex">
                              <div className="mr-auto">
                                <div className="text-gray-900">
                                  <p className="font-[500]">{name}</p>
                                </div>
                              </div>
                              <div className="text-gray-900">
                                <p className="font-[500]">{percentage}%</p>
                              </div>
                            </div>
                            <div className="mt-2">
                              <div
                                className={`stats_bar relative z-[1] before:absolute before:left-0 before:top-[50%] before:bg-gray-900 before:h-[2px] before:z-[2] before:translate-y-[-50%] ${percentage === 95
                                    ? "before:w-[95%]"
                                    : null || percentage === 85
                                      ? "before:w-[85%]"
                                      : null || percentage === 75
                                        ? "before:w-[75%]"
                                        : null
                                  } bg-gray-300 w-full h-[1px]`}></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="2000"
                className="image_wrap mt-[100px] xl:w-[40%] xl:h-[100%] xl:mt-[100px] flex items-center justify-center">
                <div className="relative img_el before:absolute before:-top-[5%] before:-left-[5%] before:h-[100px] before:w-[100px] after:absolute after:-bottom-[5%] after:-right-[5%] after:h-[100px] after:w-[100px]">
                  <img src={CargoImage} width={"100%"} alt="cargo ship" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;

// export const statsBarData = [
//   { name: "Customer Satisfaction", percentage: 95 },
//   { name: "Delivery On Time", percentage: 85 },
//   { name: "Client Retention", percentage: 75 }
// ];
