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
                <div className="w-[1280px] mx-auto flex items-start gap-[65px] mt-12">
                    <div className="w-[744px] flex-col justify-start items-start gap-[30px]">
                        <div className="self-stretch flex-col justify-start items-start gap-2">
                            <div className="py-2.5 flex items-center gap-2.5">
                                <div className="text-left">
                                    <span className="bg-gradient-to-r from-[#0149ad] to-[#072b64] bg-clip-text text-transparent text-[58px] font-light font-['DM Sans'] leading-[69.60px]">
                                        Empowering Your&nbsp;
                                    </span>
                                    <span className="bg-gradient-to-r from-[#072b64] to-[#0149ad] bg-clip-text text-transparent text-[58px] font-bold font-['DM Sans'] leading-[69.60px]">
                                        Business&nbsp;
                                    </span>
                                    <br />
                                    <span className="text-[#0149ad] text-[58px] font-light font-['DM Sans'] leading-[69.60px]">
                                        with&nbsp;
                                    </span>
                                    <span className="bg-gradient-to-r from-[#0149ad] to-[#072b64] bg-clip-text text-transparent text-[58px] font-bold font-['DM Sans'] leading-[69.60px]">
                                        Cutting-Edge Technology
                                    </span>
                                </div>
                            </div>
                            <div className="text-black/75 text-xl font-normal font-['Poppins'] text-left leading-6 mt-4">
                                At Rakibe Dynamics, we believe in the power of technology to
                                drive business growth and success. Our aim is to provide
                                innovative software solutions that streamline processes, improve
                                efficiency, and enhance overall performance.
                            </div>
                        </div>
                        <div className="w-[213px] h-[55px] px-[39px] py-2 bg-[#0149ad] rounded-[29px] flex justify-left items-center mt-5">
                            <div className="text-center text-white text-2xl font-bold font-['Cabin']">
                                Get Started
                            </div>
                        </div>
                    </div>
                    <div className="w-[524px] h-[455px] flex justify-center items-center">
                        <img
                            src={hero_image}
                            alt="Empowering Technology"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* New Section */}
                <div className="w-[1280px] mx-auto flex items-center gap-[65px] mt-20">
                    {/* Text Section */}
                    <div className="w-[600px] flex flex-col items-center">
                        <h2 className="text-[#0049b1] text-3xl font-bold font-['DM Sans'] text-center leading-[50px]">
                            Scalable, Secure, and Reliable Software Solutions
                        </h2>
                        <p className="text-black/90 text-lg font-normal font-['DM Sans'] mt-4 text-center leading-7">
                            We believe in providing solutions that grow with your business. Our
                            software is designed to be scalable, secure, and reliable, ensuring
                            that you can meet the changing demands of your business with ease.
                        </p>
                        <button className="w-[213px] h-[55px] px-[39px] py-2 bg-[#0149ad] rounded-[29px] flex justify-center items-center mt-5 text-white text-xl font-bold font-['Cabin']">
                            Explore More
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-[524px] h-[455px] flex justify-center items-center">
                        <img
                            src={section_1} // Replace with your actual image path
                            alt="Scalable Solutions"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* New Section -2  */}
                <div className="w-[1280px] mx-auto flex items-center gap-[65px] mt-20">
                    {/* Image Section */}
                    <div className="w-[524px] h-[455px] flex justify-center items-center">
                        <img
                            src={section_2} // Replace with your actual image path
                            alt="Scalable Solutions"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-[600px] flex flex-col items-center">
                        <h2 className="text-[#0049b1] text-3xl font-bold font-['DM Sans'] text-center leading-[50px]">
                            Transform Your Business with Atinity's Expertise
                        </h2>
                        <p className="text-black/90 text-lg font-normal font-['DM Sans'] mt-4 text-center leading-7">
                            We are here to help you unlock your business's full potential. With our innovative solutions, skilled professionals, and commitment to customer service, Atinity is the partner you need to drive your business success.
                        </p>
                        <button className="w-[213px] h-[55px] px-[39px] py-2 bg-[#0149ad] rounded-[29px] flex justify-center items-center mt-5 text-white text-xl font-bold font-['Cabin']">
                            Explore More
                        </button>
                    </div>
                </div>

                {/* New Section-3  */}
                <div className="w-[1280px] mx-auto flex items-center gap-[65px] mt-20">
                    {/* Text Section */}
                    <div className="w-[600px] flex flex-col items-center">
                        <h2 className="text-[#0049b1] text-3xl font-bold font-['DM Sans'] text-center leading-[50px]">
                            A Team of Skilled Professionals at Your Service                        </h2>
                        <p className="text-black/90 text-lg font-normal font-['DM Sans'] mt-4 text-center leading-7">
                            Our team is dedicated to helping our clients achieve their goals. Whether you need a custom software solution, help with a design, or need attractive web or app, we are here to help.
                        </p>
                        <button className="w-[213px] h-[55px] px-[39px] py-2 bg-[#0149ad] rounded-[29px] flex justify-center items-center mt-5 text-white text-xl font-bold font-['Cabin']">
                            Explore More
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-[524px] h-[455px] flex justify-center items-center">
                        <img
                            src={section_3} // Replace with your actual image path
                            alt="Scalable Solutions"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <div className="w-full bg-gray-50 py-10 flex flex-col items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                    <button className="mt-8 w-[213px] h-[55px] px-[39px] py-2 bg-[#0149ad] rounded-[29px] flex justify-center items-center text-white text-xl font-bold font-['Cabin']">
                        Learn More
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;