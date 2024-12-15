import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutus1 from "../assets/images/aboutus1.svg";
import aboutus2 from "../assets/images/aboutus2.svg";


function Aboutus() {
    return (
        <>
            <Navbar />
            <div className="bg-white flex flex-col justify-start items-center gap-[27px]">
                {/* Mission & Vision Section */}
                <div className="w-full flex flex-col items-center mt-[50px]">
                    {/* Mission & Vision Heading */}
                    <div className="text-[#099dff] text-4xl font-semibold font-['Cabin'] tracking-[0.1em]">
                        Mission & Vision
                    </div>

                    {/* First Section */}
                    <div className="w-[912.97px] text-center mt-10">
                        <span className="text-[#0149ad] text-[32px] font-bold font-['Raleway']">
                            To Revolutionize the Technology Landscape
                        </span>
                        <br />
                        <span className="text-black text-2xl font-normal font-['DM Sans'] leading-[33.60px] mt-4 block">
                            Atinity Solutions is dedicated to delivering exceptional app and web
                            services that empower businesses to achieve their goals and remain
                            ahead of the competition. We strive to provide innovative, reliable,
                            and user-friendly solutions that meet the evolving needs of our
                            clients.
                        </span>
                    </div>

                    {/* Second Section */}
                    <div className="w-[912.97px] text-center mt-16">
                        <span className="text-[#0149ad] text-[32px] font-bold font-['Raleway']">
                            Innovate, Empower, Transform
                        </span>
                        <br />
                        <span className="text-black text-2xl font-normal font-['DM Sans'] leading-[33.60px] mt-4 block">
                            Our vision is to be a leading provider of app and web services,
                            recognized for our expertise and commitment to delivering exceptional
                            results for our clients. We aim to continuously innovate and improve
                            our services to stay ahead of the market and maintain our position as
                            a trusted partner for businesses worldwide.
                        </span>
                    </div>
                </div>

                {/* Our Values Section */}
                <div className="w-full flex flex-col items-center mt-10">
                    {/* Image Before "Our Values" */}
                    <div className="w-[600px] h-[500px] mb-6">
                        <img
                            src={aboutus1} // Replace with the correct path to your image
                            alt="Our Values Illustration"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="text-[#37c1ff] text-4xl font-bold font-['Cabin'] tracking-widest mb-6">
                        Our Values
                    </div>
                    <div className="w-[912.97px] text-center mt-10">
                        <span className="text-[#0149ad] text-[32px] font-bold font-['Raleway']">
                            Innovation
                        </span>
                        <br />
                        <span className="text-black text-2xl font-normal font-['DM Sans'] leading-[33.60px] mt-4 block">
                            We strive to continuously innovate, delivering solutions that create
                            a lasting impact and drive success for businesses worldwide.
                        </span>
                    </div>

                    <div className="w-[912.97px] text-center mt-16">
                        <span className="text-[#0149ad] text-[32px] font-bold font-['Raleway']">
                            Excellence
                        </span>
                        <br />
                        <span className="text-black text-2xl font-normal font-['DM Sans'] leading-[33.60px] mt-4 block">
                            We are committed to delivering high-quality solutions that meet or exceed our client's expectations.
                        </span>
                    </div>

                    <div className="w-[912.97px] text-center mt-16">
                        <span className="text-[#0149ad] text-[32px] font-bold font-['Raleway']">
                            Partnership
                        </span>
                        <br />
                        <span className="text-black text-2xl font-normal font-['DM Sans'] leading-[33.60px] mt-4 block">
                            We believe in building strong and lasting relationships with our clients based on mutual trust and respect.
                        </span>
                    </div>

                    <div className="w-[912.97px] text-center mt-16">
                        <span className="text-[#0149ad] text-[32px] font-bold font-['Raleway']">
                            Responsibility
                        </span>
                        <br />
                        <span className="text-black text-2xl font-normal font-['DM Sans'] leading-[33.60px] mt-4 block">
                            We take our responsibility to our clients, employees, and the wider community seriously and always act with integrity.
                        </span>
                    </div>

                    <div className="w-[912.97px] text-center mt-16">
                        <span className="text-[#0149ad] text-[32px] font-bold font-['Raleway']">
                            Agility
                        </span>
                        <br />
                        <span className="text-black text-2xl font-normal font-['DM Sans'] leading-[33.60px] mt-4 block">
                            We respond quickly and effectively to the changing needs of our clients and the market.
                        </span>
                    </div>

                    <div className="w-[912.97px] text-center mt-16">
                        <span className="text-[#0149ad] text-[32px] font-bold font-['Raleway']">
                            Collaboration
                        </span>
                        <br />
                        <span className="text-black text-2xl font-normal font-['DM Sans'] leading-[33.60px] mt-4 block">
                            We work together as a team, encouraging open communication and sharing ideas to drive our success.
                        </span>
                    </div>

                    <div className="w-[912.97px] text-center mt-16 mb-16">
                        <span className="text-[#0149ad] text-[32px] font-bold font-['Raleway']">
                            Empowerment
                        </span>
                        <br />
                        <span className="text-black text-2xl font-normal font-['DM Sans'] leading-[33.60px] mt-4 block">
                            We empower our employees to take ownership of their work, fostering a culture of creativity, learning, and growth.
                        </span>
                    </div>

                    <div className="w-[600px] h-[500px] mb-6">
                        <img
                            src={aboutus2} // Replace with the correct path to your image
                            alt="Our Values Illustration"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Aboutus;