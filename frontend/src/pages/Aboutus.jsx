import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutus1 from "../assets/images/aboutus1.svg";
import aboutus2 from "../assets/images/aboutus2.svg";

function Aboutus() {
    return (
        <>
            <Navbar />
            <div className="bg-white flex flex-col justify-start items-center gap-8 p-4 md:p-8">
                {/* Mission & Vision Section */}
                <div className="w-full flex flex-col items-center mt-8">
                    {/* Mission & Vision Heading */}
                    <div className="text-[#099dff] text-3xl md:text-4xl font-semibold font-['Cabin'] tracking-wide text-center">
                        Mission & Vision
                    </div>

                    {/* First Section */}
                    <div className="max-w-[912px] text-center mt-8">
                        <span className="text-[#0149ad] text-2xl md:text-3xl font-bold font-['Raleway']">
                            To Revolutionize the Technology Landscape
                        </span>
                        <br />
                        <span className="text-black text-lg md:text-2xl font-normal font-['DM Sans'] leading-8 mt-4 block">
                            Atinity Solutions is dedicated to delivering exceptional app and web services that empower businesses to achieve their goals and remain ahead of the competition. We strive to provide innovative, reliable, and user-friendly solutions that meet the evolving needs of our clients.
                        </span>
                    </div>

                    {/* Second Section */}
                    <div className="max-w-[912px] text-center mt-12">
                        <span className="text-[#0149ad] text-2xl md:text-3xl font-bold font-['Raleway']">
                            Innovate, Empower, Transform
                        </span>
                        <br />
                        <span className="text-black text-lg md:text-2xl font-normal font-['DM Sans'] leading-8 mt-4 block">
                            Our vision is to be a leading provider of app and web services, recognized for our expertise and commitment to delivering exceptional results for our clients. We aim to continuously innovate and improve our services to stay ahead of the market and maintain our position as a trusted partner for businesses worldwide.
                        </span>
                    </div>
                </div>

                {/* Our Values Section */}
                <div className="w-full flex flex-col items-center mt-10">
                    {/* Image Before "Our Values" */}
                    <div className="w-full max-w-[500px] h-auto mb-6">
                        <img
                            src={aboutus1}
                            alt="Our Values Illustration"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="text-[#37c1ff] text-3xl md:text-4xl font-bold font-['Cabin'] tracking-widest text-center mb-6">
                        Our Values
                    </div>

                    {/* Values Sections */}
                    {[
                        { title: "Innovation", description: "We strive to continuously innovate, delivering solutions that create a lasting impact and drive success for businesses worldwide." },
                        { title: "Excellence", description: "We are committed to delivering high-quality solutions that meet or exceed our client's expectations." },
                        { title: "Partnership", description: "We believe in building strong and lasting relationships with our clients based on mutual trust and respect." },
                        { title: "Responsibility", description: "We take our responsibility to our clients, employees, and the wider community seriously and always act with integrity." },
                        { title: "Agility", description: "We respond quickly and effectively to the changing needs of our clients and the market." },
                        { title: "Collaboration", description: "We work together as a team, encouraging open communication and sharing ideas to drive our success." },
                        { title: "Empowerment", description: "We empower our employees to take ownership of their work, fostering a culture of creativity, learning, and growth." }
                    ].map((value, index) => (
                        <div
                            key={index}
                            className="max-w-[912px] text-center mt-8 md:mt-12 px-2"
                        >
                            <span className="text-[#0149ad] text-2xl md:text-3xl font-bold font-['Raleway']">
                                {value.title}
                            </span>
                            <br />
                            <span className="text-black text-lg md:text-2xl font-normal font-['DM Sans'] leading-8 mt-4 block">
                                {value.description}
                            </span>
                        </div>
                    ))}

                    {/* Image After Values */}
                    <div className="w-full max-w-[500px] h-auto mt-8">
                        <img
                            src={aboutus2}
                            alt="Our Values Illustration"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Aboutus;