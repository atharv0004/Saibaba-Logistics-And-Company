import React from "react";
import "./assets/scss/style.scss";
import Banner from "./components/banner";
// import LogisticsCapabilities from "../../components/logisticsCapabilities";
import ContactRef from "../../components/contactRef";
import ServiceSecOne from "./components/serviceSecOne";

const Services = () => {
  return (
    <>
      <Banner />
      <h1
        data-aos={`fade-right`}
        data-aos-duration="2000"
        className="text-gray-800 font-outfit mt-[50px] font-[700] text-[40px] leading-[40px] md:text-[66px] md:leading-[66px] xl:text-[114px] xl:leading-[114px]">
        Our Services
      </h1>
      {/* <LogisticsCapabilities showLink={false} /> */}
      <ServiceSecOne />
      <ContactRef />
    </>
  );
};

export default Services;
