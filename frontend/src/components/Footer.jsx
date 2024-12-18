import React from "react";
import logo from "../assets/logo_svg.svg";
import linkedIn from "../assets/images/linkedin.png";
import fiverr from "../assets/images/fiver.png";
import github from "../assets/images/github.png";
import upwork from "../assets/images/upwork.png";
import vector from "../assets/images/Vector.png";

function Footer() {
    return (
        <footer className="w-full bg-[#E6F0FF] px-4 py-8 sm:px-8 md:px-12 relative">
            {/* Footer Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src={logo}
                        alt="Rakibe Dynamics Logo"
                        className="w-[180px] md:w-[280px] mb-4"
                    />
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col items-center sm:items-start space-y-2">
                    <a href="/" className="text-navy-900 hover:text-blue-600 text-lg sm:text-xl font-['Raleway']">
                        Home
                    </a>
                    <a href="/about" className="text-navy-900 hover:text-blue-600 text-lg sm:text-xl font-['Raleway']">
                        About Us
                    </a>
                    <a href="/services" className="text-navy-900 hover:text-blue-600 text-lg sm:text-xl font-['Raleway']">
                        Services
                    </a>
                    <a href="/projects" className="text-navy-900 hover:text-blue-600 text-lg sm:text-xl font-['Raleway']">
                        Projects
                    </a>
                    <a href="/contact" className="text-navy-900 hover:text-blue-600 text-lg sm:text-xl font-['Raleway']">
                        Get In Touch
                    </a>
                </nav>

                {/* Newsletter Section */}
                <div className="flex flex-col items-center sm:items-start space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-navy-900">
                        Keep in Touch
                    </h3>
                    <div className="flex w-full max-w-xs sm:max-w-sm">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="w-full bg-[#79BCFF] text-navy-900 placeholder:text-navy-900 py-2 px-4 rounded-l-lg focus:outline-none"
                        />
                        <button className="bg-[#79BCFF] px-4 rounded-r-lg">
                            <img src={vector} alt="Send" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center sm:justify-center mt-8 space-x-4">
                <a href="#" className="rounded-full bg-white p-2 shadow-md hover:bg-gray-100">
                    <img src={linkedIn} alt="LinkedIn" className="w-6 sm:w-8" />
                </a>
                <a href="#" className="rounded-full bg-white p-2 shadow-md hover:bg-gray-100">
                    <img src={github} alt="Github" className="w-6 sm:w-8" />
                </a>
                <a href="#" className="rounded-full bg-white p-2 shadow-md hover:bg-gray-100">
                    <img src={upwork} alt="Upwork" className="w-6 sm:w-8" />
                </a>
                <a href="#" className="rounded-full bg-white p-2 shadow-md hover:bg-gray-100">
                    <img src={fiverr} alt="Fiverr" className="w-6 sm:w-8" />
                </a>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center text-sm sm:text-base text-navy-900">
                <p>Copyright ©️ 2025 Rakibe Dynamics</p>
            </div>
        </footer>
    );
}

export default Footer;