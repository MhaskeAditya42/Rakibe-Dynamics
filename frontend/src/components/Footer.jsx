import React from "react";
import logo from "../assets/logo_svg.svg";
import linkedIn from "../assets/images/linkedin.png";
import fiverr from "../assets/images/fiver.png";
import github from "../assets/images/github.png";
import upwork from "../assets/images/upwork.png";
import vector from "../assets/images/Vector.png";

function Footer() {
    return (
        <footer className="w-full bg-[#E6F0FF] px-6 py-12 md:px-12 relative">

            <div className="w-full h-[493px] absolute " />
            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <div className="flex flex-col items-start">
                    <img
                        src={logo}
                        alt="Rakibe Dyanamics Logo"
                        width={280}
                        height={100}
                        className="mb-2"
                    />
                </div>

                <nav className="flex flex-col space-y-4">
                    <a href="/" className="text-navy-900 hover:text-blue-600 text-xl font-['Raleway']">
                        Home
                    </a>
                    <a href="/about" className="text-navy-900 hover:text-blue-600 text-xl font-['Raleway']">
                        About Us
                    </a>
                    <a href="/services" className="text-navy-900 hover:text-blue-600 text-xl font-['Raleway']">
                        Services
                    </a>
                    <a href="/projects" className="text-navy-900 hover:text-blue-600 text-xl font-['Raleway']">
                        Projects
                    </a>
                    <a href="/contact" className="text-navy-900 hover:text-blue-600 text-xl font-['Raleway']">
                        Get In Touch
                    </a>
                </nav>

                <div className="flex flex-col space-y-4 items-center justify-center">
                    <h3 className="text-xl font-semibold text-navy-900">Keep in Touch</h3>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="w-full md:w-[259px] bg-[#79BCFF] border-none text-navy-900 placeholder:text-navy-900 py-2 px-4 rounded-l-lg" // Adjusted the left border radius
                        />
                        <button className="bg-[#79BCFF] p-2 rounded-r-lg">
                            <img src={vector} alt="LinkedIn" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="mt-12 flex justify-center space-x-6">
                <a href="#" className="rounded-full bg-white p-3 shadow-md hover:bg-gray-50">
                    <img src={linkedIn} alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href="#" className="rounded-full bg-white p-3 shadow-md hover:bg-gray-50">
                    <img src={github} alt="Github" className="w-8 h-8" />
                </a>
                <a href="#" className="rounded-full bg-white p-3 shadow-md hover:bg-gray-50">
                    <img src={upwork} alt="Upwork" className="w-8 h-8" />
                </a>
                <a href="#" className="rounded-full bg-white p-3 shadow-md hover:bg-gray-50">
                    <img src={fiverr} alt="Fiverr" className="w-8 h-8" />
                </a>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center text-navy-900">
                <p>Copyright ©️ 2025 Rakibe Dyanamics</p>
            </div>
        </footer>
    );
}

export default Footer;