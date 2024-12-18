import React from "react";
import Navbar from "../components/Navbar";
import services from "../assets/images/services.svg";
import app from "../assets/images/services_appd.svg";
import web from "../assets/images/services_webd.svg";
import uiux from "../assets/images/services_uiux.svg";
import solution from "../assets/images/services_solution.svg";
import cloud from "../assets/images/services_cloud.svg";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center mt-10 px-4 sm:px-6 md:px-12">
        {/* Heading for Process */}
        <div className="text-[#0149ad] text-2xl sm:text-3xl font-semibold font-['Cabin'] text-center">
          Our process
        </div>

        {/* Process Steps */}
        <div className="flex flex-col sm:flex-row justify-center mt-10 gap-8 sm:gap-16 max-w-[1200px]">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <img src={services} alt="Step 1" className="w-16 sm:w-20 h-16 sm:h-20" />
            <span className="mt-4 sm:mt-6 text-center text-blue-600 font-semibold text-base sm:text-lg">
              Understanding/
              <br /> Developing Strategy
            </span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <img src={services} alt="Step 2" className="w-16 sm:w-20 h-16 sm:h-20" />
            <span className="mt-4 sm:mt-6 text-center text-blue-600 font-semibold text-base sm:text-lg">
              Design & Software
              <br /> Development
            </span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <img src={services} alt="Step 3" className="w-16 sm:w-20 h-16 sm:h-20" />
            <span className="mt-4 sm:mt-6 text-center text-blue-600 font-semibold text-base sm:text-lg">
              Automated Testing
              <br /> & Support
            </span>
          </div>
        </div>

        {/* Sections */}
        {[
          { title: "App Development", img: app, desc: "Custom mobile app solutions to enhance business through technology." },
          { title: "Web Development", img: web, desc: "Custom web solutions optimized for performance and scalability." },
          { title: "UI/UX Designing", img: uiux, desc: "Improving user experience and visual design of software products." },
          { title: "Solution Designing", img: solution, desc: "Designing effective technology solutions for business needs." },
          { title: "Cloud Computing", img: cloud, desc: "Cloud migration, management, and security solutions." }
        ].map((section, index) => (
          <div
            key={index}
            className="w-full flex flex-col-reverse md:flex-row items-center mt-12 md:mt-16 px-4 sm:px-6 max-w-[1200px] gap-6 sm:gap-8"
          >
            {/* Text Content */}
            <div className={`flex flex-col items-start w-full md:w-1/2 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
              <h3 className="text-[#0149ad] text-2xl sm:text-3xl font-semibold font-['Cabin'] text-center md:text-left">
                {section.title}
              </h3>
              <p className="mt-4 sm:mt-6 text-gray-700 text-sm sm:text-base leading-relaxed font-['DM Sans'] text-justify">
                {section.desc}
              </p>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-1/2">
              <img src={section.img} alt={section.title} className="w-full h-auto" />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Services;