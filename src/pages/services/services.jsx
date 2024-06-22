import React from "react";
import "./assets/scss/style.scss";
import Banner from "./components/banner";
import LogisticsCapabilities from "../../components/logisticsCapabilities";
import ContactRef from "../../components/contactRef";
import ServiceSecOne from "./components/serviceSecOne";

const Services = () => {
  return (
    <>
      <Banner />
      <LogisticsCapabilities showLink={false} />
      <ServiceSecOne />
      <ContactRef />
    </>
  );
};

export default Services;
