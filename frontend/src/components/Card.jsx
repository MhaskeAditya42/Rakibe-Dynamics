import React from "react";

const Card = ({ icon, title, description }) => {
    return (
        <div className="w-[374px] h-[400px] relative bg-white rounded-tl-[3px] rounded-tr-[60px] rounded-bl-[3px] rounded-br-[3px] shadow flex-col justify-start items-center inline-flex p-4">
            <div className="flex justify-center items-center w-full h-20 mb-4">
                <img className="w-20 h-20" src={icon} alt={title} />
            </div>
            <div className="w-[297px] h-[47px] text-center text-black text-2xl font-medium font-['Poppins'] mt-4">
                {title}
            </div>
            <div className="w-[338px] h-[175px] text-center text-black text-xl font-normal font-['DM Sans'] leading-[30.10px] mt-2">
                {description}
            </div>
        </div>
    );
};

export default Card;