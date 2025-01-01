import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero_image from "../assets/images/main_image.svg";
import section_1 from "../assets/images/section_1.svg";
import section_2 from "../assets/images/section-2.svg";
import section_3 from "../assets/images/section-3.svg";
import icon1 from "../assets/icons/app_dev.svg";
import icon2 from "../assets/icons/web_dev.svg";
import icon3 from "../assets/icons/ui.svg";
import icon4 from "../assets/icons/cp_dev.svg";
import icon5 from "../assets/icons/solution_design.svg";
import icon6 from "../assets/icons/cloud_computing.svg";
import Card from "../components/Card";

function Home() {
    const cards = [
        {
            icon: icon1,
            title: "App Development",
            description:
                "Comprehensive app development services to streamline information access and improve productivity through innovative and synchronized solutions",
        },
        {
            icon: icon2,
            title: "Web Development",
            description:
                "Custom, efficient, and user-friendly solutions for businesses to enhance their online presence and reach their goals seamlessly",
        },
        {
            icon: icon3,
            title: "UI/UX",
            description:
                "Focused on creating user-centered digital experiences to enhance overall usability and engagement with clients' products",
        },
        {
            icon: icon4,
            title: "Cross Platform Development",
            description:
                "Seamless cross-platform development services to help businesses effectively reach their audiences on multiple devices and platforms",
        },
        {
            icon: icon5,
            title: "Solution Designing",
            description:
                "Providing clients with customized and innovative solutions to meet their specific business needs and challenges",
        },
        {
            icon: icon6,
            title: "Cloud Computing",
            description:
                "Delivering scalable, secure, and cost-effective cloud-based solutions to help clients optimize their IT infrastructure and operations",
        },
    ];
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gray-50 mt-3">
                {/* Hero Section */}
                <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start gap-12 mt-12 px-6">
                    <div className="flex-1 flex flex-col justify-start items-start gap-4">
                        <div className="flex flex-col justify-start items-start gap-2">
                            <div className="py-2.5 flex items-center gap-2.5">
                                <div className="text-left">
                                    <span className="bg-gradient-to-r from-[#0149ad] to-[#072b64] bg-clip-text text-transparent text-3xl md:text-5xl lg:text-5xl font-light font-['DM Sans'] leading-tight">
                                        Empowering Your&nbsp;
                                    </span>
                                    <span className="bg-gradient-to-r from-[#072b64] to-[#0149ad] bg-clip-text text-transparent text-3xl md:text-5xl lg:text-5xl font-bold font-['DM Sans'] leading-tight">
                                        Business&nbsp;
                                    </span>
                                    <br />
                                    <span className="text-[#0149ad] text-4xl md:text-5xl lg:text-5xl font-light font-['DM Sans'] leading-tight">
                                        with&nbsp;
                                    </span>
                                    <span className="bg-gradient-to-r from-[#0149ad] to-[#072b64] bg-clip-text text-transparent text-3xl md:text-5xl lg:text-5xl font-bold font-['DM Sans'] leading-tight">
                                        Cutting-Edge Technology
                                    </span>
                                </div>
                            </div>
                            <div className="text-black/75 text-base md:text-lg font-normal font-['Poppins'] text-left leading-6 mt-4">
                                At Rakibe Dynamics, we believe in the power of technology to
                                drive business growth and success. Our aim is to provide
                                innovative software solutions that streamline processes, improve
                                efficiency, and enhance overall performance.
                            </div>
                        </div>
                        <div className="w-[213px] h-[55px] px-[39px] py-2 bg-[#0149ad] rounded-[29px] flex justify-left items-center mt-5">
                            <div className="text-center text-white text-xl font-bold font-['Cabin'] ml-4">
                                Get Started
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[524px] h-auto flex justify-center items-center">
                        <img
                            src={hero_image}
                            alt="Empowering Technology"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* New Section */}
                <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 mt-20 px-6">
                    {/* Text Section */}
                    <div className="flex-1 flex flex-col items-center text-center">
                        <h2 className="text-[#0049b1] text-3xl md:text-4xl lg:text-3xl font-bold font-['DM Sans'] leading-tight">
                            Scalable, Secure, and Reliable Software Solutions
                        </h2>
                        <p className="text-black/90 text-base md:text-lg font-normal font-['DM Sans'] mt-4 text-center leading-7">
                            We believe in providing solutions that grow with your business. Our
                            software is designed to be scalable, secure, and reliable, ensuring
                            that you can meet the changing demands of your business with ease.
                        </p>
                        <button className="w-[213px] h-[55px] px-[39px] py-2 bg-[#0149ad] rounded-[29px] flex justify-center items-center mt-5 text-white text-xl font-bold font-['Cabin']">
                            Explore More
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-[524px] h-auto flex justify-center items-center">
                        <img
                            src={section_1}
                            alt="Scalable Solutions"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* New Section -2 */}
                <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 mt-20 px-6">
                    {/* Image Section */}
                    <div className="w-full lg:w-[524px] h-auto flex justify-center items-center">
                        <img
                            src={section_2}
                            alt="Scalable Solutions"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 flex flex-col items-center text-center">
                        <h2 className="text-[#0049b1] text-3xl md:text-4xl lg:text-3xl font-bold font-['DM Sans'] leading-tight">
                            Transform Your Business with Atinity's Expertise
                        </h2>
                        <p className="text-black/90 text-base md:text-lg font-normal font-['DM Sans'] mt-4 text-center leading-7">
                            We are here to help you unlock your business's full potential. With our innovative solutions, skilled professionals, and commitment to customer service, Atinity is the partner you need to drive your business success.
                        </p>
                        <button className="w-[213px] h-[55px] px-[39px] py-2 bg-[#0149ad] rounded-[29px] flex justify-center items-center mt-5 text-white text-xl font-bold font-['Cabin']">
                            Explore More
                        </button>
                    </div>
                </div>

                {/* New Section -3 */}
                <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 mt-20 px-6">
                    {/* Text Section */}
                    <div className="flex-1 flex flex-col items-center text-center">
                        <h2 className="text-[#0049b1] text-3xl md:text-4xl lg:text-3xl font-bold font-['DM Sans'] leading-tight">
                            A Team of Skilled Professionals at Your Service
                        </h2>
                        <p className="text-black/90 text-base md:text-lg font-normal font-['DM Sans'] mt-4 text-center leading-7">
                            Our team is dedicated to helping our clients achieve their goals. Whether you need a custom software solution, help with a design, or need attractive web or app, we are here to help.
                        </p>
                        <button className="w-[213px] h-[55px] px-[39px] py-2 bg-[#0149ad] rounded-[29px] flex justify-center items-center mt-5 text-white text-xl font-bold font-['Cabin']">
                            Explore More
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-[524px] h-auto flex justify-center items-center">
                        <img
                            src={section_3}
                            alt="Scalable Solutions"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                <div className="w-full max-w-screen-xl mx-auto mt-20 px-6 text-center">
                    <h2 className="text-[#0049b1] text-3xl md:text-4xl lg:text-4xl font-bold font-['DM Sans'] leading-tight">
                        Our Expertise
                    </h2>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                    
                </div>
                <button className="mt-8 w-[213px] h-[55px] px-[39px] mb-5 py-2 bg-[#0149ad] rounded-[29px] flex justify-center items-center text-white text-xl font-bold font-['Cabin']">
                        Learn More
                    </button>
            </div>
            <Footer />
        </>
    );
}

export default Home;