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
      <div className="w-full flex flex-col items-center mt-10 px-4">
        {/* Heading for Process */}
        <div className="text-[#0149ad] text-3xl font-semibold font-['Cabin']">
          Our process
        </div>

        {/* Process Steps */}
        <div className="flex justify-center mt-10 gap-16 max-w-[1200px]">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            {/* Circle Image */}
            <img
              src={services}
              alt="Understanding Developing Strategy"
              className="w-20 h-20"
            />
            <span className="mt-6 text-center text-blue-600 font-semibold text-lg">
              Understanding/
              <br />
              Developing Strategy
            </span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            {/* Circle Image */}
            <img
              src={services}
              alt="Design & Software Development"
              className="w-20 h-20"
            />
            <span className="mt-6 text-center text-blue-600 font-semibold text-lg">
              Design & Software
              <br />
              Development
            </span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            {/* Circle Image */}
            <img
              src={services}
              alt="Automated Testing & Support"
              className="w-20 h-20"
            />
            <span className="mt-6 text-center text-blue-600 font-semibold text-lg">
              Automated Testing
              <br />
              & Support
            </span>
          </div>
        </div>

        {/* New "App Development" Section */}
        <div className="w-full flex flex-col items-center mt-16 px-6 max-w-[1200px]">
          <div className="flex items-center justify-center gap-8">
            {/* Text Content */}
            <div className="flex flex-col items-start w-1/2">
              <div className="text-[#0149ad] text-3xl font-semibold font-['Cabin'] text-center ml-5">
                App Development
              </div>
              <p className="mt-6 text-gray-700 text-lg font-['DM Sans']">
                Custom mobile app solutions to clients looking to enhance their business through technology. Our team of expert developers and designers work closely with clients to understand their needs and create high-quality, user-friendly apps that bring their vision to life. Utilizing the latest technologies and design trends, we deliver secure and scalable apps that meet clients' unique requirements and drive business success.
              </p>
            </div>

            {/* Image Content */}
            <div className="w-1/2">
              <img
                src={app}
                alt="App Development"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
       
       {/* Web Development Section  */}
        <div className="w-full flex flex-col items-center mt-16 px-6 max-w-[1200px]">
          <div className="flex items-center justify-center gap-8">
            {/* Text Content */}
            <div className="flex flex-col items-start w-1/2">
              <div className="text-[#0149ad] text-3xl font-semibold font-['Cabin'] text-center">
                Web Development
              </div>
              <p className="mt-6 text-gray-700 text-lg font-['DM Sans']">
                Creates custom web solutions that meet clients' unique requirements. Our team of experienced developers and designers deliver user-friendly and visually appealing web applications optimized for performance and scalability. Committed to providing high-quality services, on-time and within budget.
              </p>
            </div>

            {/* Image Content */}
            <div className="w-1/2">
              <img
                src={web}
                alt="Web Development"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* UI/UX Design  */}
        <div className="w-full flex flex-col items-center mt-16 px-6 max-w-[1200px]">
          <div className="flex items-center justify-center gap-8">
            {/* Text Content */}
            <div className="flex flex-col items-start w-1/2">
              <div className="text-[#0149ad] text-3xl font-semibold font-['Cabin'] text-center">
                UI/UX Designing
              </div>
              <p className="mt-6 text-gray-700 text-lg font-['DM Sans']">
                Focus on improving the user experience and the visual design of software products. The services combine research, design, and technology to create user-friendly and visually appealing software that meets customer needs and expectations.
              </p>
            </div>

            {/* Image Content */}
            <div className="w-1/2">
              <img
                src={uiux}
                alt="UI/UX Designing"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

         {/* Solution Design  */}
        <div className="w-full flex flex-col items-center mt-16 px-6 max-w-[1200px]">
          <div className="flex items-center justify-center gap-8">
            {/* Text Content */}
            <div className="flex flex-col items-start w-1/2">
              <div className="text-[#0149ad] text-3xl font-semibold font-['Cabin'] text-center">
                Solution Designing
              </div>
              <p className="mt-6 text-gray-700 text-lg font-['DM Sans']">
                To help clients develop and implement effective technology solutions for their specific business needs. These services include identifying problems, gathering requirements, creating functional specifications, and designing custom software solutions.
              </p>
            </div>

            {/* Image Content */}
            <div className="w-1/2">
              <img
                src={solution}
                alt="Solution Designing"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
         
         {/* Cloud Computing  */}
        <div className="w-full flex flex-col items-center mt-16 px-6 max-w-[1200px]">
          <div className="flex items-center justify-center gap-8">
            {/* Text Content */}
            <div className="flex flex-col items-start w-1/2">
              <div className="text-[#0149ad] text-3xl font-semibold font-['Cabin'] text-center">
                Cloud Computing
              </div>
              <p className="mt-6 text-gray-700 text-lg font-['DM Sans']">
                To help organizations move their IT infrastructure and applications to the cloud. Cloud migration, cloud management, and cloud security, to help clients take advantage of the benefits of cloud computing, such as increased scalability, cost savings, and enhanced security.
              </p>
            </div>

            {/* Image Content */}
            <div className="w-1/2">
              <img
                src={cloud}
                alt="Cloud Computing"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Services;