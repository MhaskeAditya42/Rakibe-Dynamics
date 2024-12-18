import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import workInProgressImage from "../assets/images/section-3.svg"; // Replace with your image path

function Projects() {
    return (
        <>
            <Navbar />

            <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8 px-4">
                <div className="text-center mt-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0049b1]">Work in Progress</h1>
                    <p className="text-lg sm:text-xl text-gray-600 mt-4">
                        We are working hard to bring something amazing!
                    </p>
                </div>

                <div className="flex justify-center items-center mt-10">
                    <img
                        src={workInProgressImage} // Replace with the correct image path
                        alt="Work in Progress"
                        className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 h-auto object-contain"
                    />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Projects;