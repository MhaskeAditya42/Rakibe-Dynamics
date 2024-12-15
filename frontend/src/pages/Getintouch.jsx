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
        <div className="w-full max-w-4xl mt-10">
          <img
            src={git} // Replace with actual image path
            alt="Contact Illustration"
            className="w-full"
          />
        </div>

        {/* Contact Information */}
        <div className="text-center mt-6 px-4">
          <p className="text-lg text-[#0149ad]">
            At <span className="font-bold text-blue-700">Rakibe Dynamics</span>,
            we value your feedback and are always here to help with any
            questions or concerns. Please reach out to us.
          </p>

          <div className="flex justify-center gap-8 mt-6 text-blue-700">
            {/* Email */}
            <div className="flex flex-col items-center">
              <img src={mail} alt="Mail Icon" className="w-8 h-8" />
              <p className="mt-2 text-sm">rakibedynamics@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <img src={call} alt="Call Icon" className="w-8 h-8" />
              <p className="mt-2 text-sm">+92 323-6572961</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center">
              <img src={location} alt="Location Icon" className="w-8 h-8" />
              <p className="mt-2 text-sm">Nashik</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-3xl mt-10 p-8 bg-blue-100 rounded-lg shadow-md">
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="flex gap-6">
              <div className="flex-1">
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
              <div className="flex-1">
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
          <p className="text-center text-blue-700 text-2xl ">
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
