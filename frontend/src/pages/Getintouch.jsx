import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import git from "../assets/images/git_svg.svg";
import mail from "../assets/images/mail.svg";
import location from "../assets/images/location.svg";
import call from "../assets/images/call.svg";

function Getintouch() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-white">
        {/* Illustration */}
        <div className="w-full max-w-3xl  px-4">
          <img
            src={git}
            alt="Contact Illustration"
            className="w-1/2 mx-auto sm:w-1/3"
          />
        </div>

        {/* Contact Information */}
        <div className="text-center mt-6 px-4">
          <p className="text-base sm:text-lg text-[#0149ad]">
            At <span className="font-bold text-blue-700">Rakibe Dynamics</span>,
            we value your feedback and are always here to help with any
            questions or concerns. Please reach out to us.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-6 text-blue-700">
            {/* Email */}
            <div className="flex flex-col items-center w-1/2 sm:w-auto">
              <a href="mailto:hr.rakibedynamics@gmail.com">
                <img src={mail} alt="Mail Icon" className="w-8 h-8" />
              </a>
              <a
                href="mailto:hr.rakibedynamics@gmail.com"
                className="mt-2 text-sm"
              >
                hr.rakibedynamics@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center w-1/2 sm:w-auto">
              <a href="tel:+918975255963">
                <img src={call} alt="Call Icon" className="w-8 h-8" />
              </a>
              <a href="tel:+918975255963" className="mt-2 text-sm">
                +91 89752 55963
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center w-full sm:w-auto">
            <a
                  href="https://maps.app.goo.gl/6kQWDUvKM1JePm9T7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-700"
                >
                  <img src={location} alt="Location Icon" className="w-8 h-8" />
                </a>
              
              <p className="mt-2 text-sm text-center">
                <a
                  href="https://maps.app.goo.gl/6kQWDUvKM1JePm9T7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-700"
                >
                  Flat No 3B, Amol Park B, Hanumanwadi Chowk, <br /> Panchwati,
                  Nashik, Maharashtra 422003
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-3xl mt-10 p-6 sm:p-8 bg-blue-100 rounded-lg shadow-md mx-4">
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="flex flex-wrap gap-6">
              <div className="flex-1 min-w-[45%]">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-blue-700 mb-1 text-left"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder=""
                  className="w-full p-3 rounded border border-gray-300 focus:outline-blue-600 bg-white"
                />
              </div>
              <div className="flex-1 min-w-[45%]">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-blue-700 mb-1 text-left"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder=""
                  className="w-full p-3 rounded border border-gray-300 focus:outline-blue-600 bg-white"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-700 mb-1 text-left"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder=""
                className="w-full p-3 rounded border border-gray-300 focus:outline-blue-600 bg-white"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-blue-700 mb-1 text-left"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder=""
                className="w-full p-3 rounded border border-gray-300 focus:outline-blue-600 bg-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-left">
              <button
                type="submit"
                className="w-32 bg-blue-700 text-white font-medium py-2 rounded hover:bg-blue-800 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Footer Message */}
        <div className="mt-8 mb-10 px-4">
          <p className="text-center text-blue-700 text-lg sm:text-2xl">
            Thank you for choosing Rakibe Dynamics. We look forward to hearing
            from you!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Getintouch;