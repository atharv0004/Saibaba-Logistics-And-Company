import React, { useRef } from "react";
import Banner from "../about/components/banner";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v2xo9au', 'template_v149cks', form.current, {
        publicKey: '5TmoQxX_DaROqjQ5S',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <Banner />
      <div className="flex justify-center items-center mt-5 mb-10">
        <h1 data-aos={`fade-right`}
          data-aos-duration="2000"
          className="text-gray-800 font-outfit mt-[50px] font-[700] text-[35px] leading-[35px] md:text-[px] md:leading-[66px] xl:text-[114px] xl:leading-[114px]">Contact Us</h1>
      </div>
      <div className="flex flex-col md:flex-row m-5 px-4 md:px-20 gap-10">
        <div className="w-full lg:w-1/2">
          <div className="container mx-auto">
            <div className="contact-form">
              

              <form
                action="https://formspree.io/f/xgedgjkr"
                method="POST"
                className="contact-inputs flex flex-col md:w-4/5"
                ref={form} onSubmit={sendEmail}
              >
                <label className="text-lg">Username:</label>
                <input
                  type="text"
                  name="from_name"
                  className="h-12 text-lg border border-gray-500 rounded-lg p-3 transition duration-200 hover:border-black focus:border-black w-full"
                  placeholder="Username"
                  autoComplete="off"
                  required
                />

                <label className="mt-5 text-lg">Email:</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="@gmail.com"
                  className="h-12 text-lg border border-gray-500 rounded-lg p-3 transition duration-200 hover:border-black focus:border-black w-full"
                  autoComplete="off"
                  required
                />

                

                <label className="mt-5 text-lg">Message:</label>
                <textarea
                  name="message"
                  placeholder="Please enter your message and include your phone number."
                  cols="30"
                  rows="4"
                  className="text-lg border border-gray-500 rounded-lg p-3 transition duration-200 hover:border-black focus:border-black w-full"
                  autoComplete="off"
                  required
                ></textarea>

                <input
                  type="submit"
                  className="mt-5 text-lg border-2 border-gray-700 rounded-lg p-3 transition duration-200 hover:border-black focus:border-black w-full font-semibold"
                  value="Send"
                />
              </form>

              <div className="contact-info mt-6">
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <iframe
            title="Our location Iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150471.0188567668!2d73.01038851259263!3d19.001891229544647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9fb6aa3d519%3A0x90717680363633f4!2sSaibaba%20Logistics%20and%20Company!5e0!3m2!1sen!2sin!4v1719078177230!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
