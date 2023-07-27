import React from "react";

const Feature = ({ title, disc, icon }) => {
  return (
    <div className="h-fit w-fit px-4 md:w-1/2 lg:w-1/3 text-center">
      <div className="mb-4 rounded-[20px] bg-white grid justify-center p-10 btn  w-fit h-fit hover:shadow-[0_4px_0px_rgba(8,_112,_184,_0.7)] text-black backdrop-blur-sm bg-white/30 ease-out hover:translate-y-1 transition-all  md:px-7 xl:px-10">
        <div className="flex justify-center">
          <div className="bg-[#E18A07]  mb-8 flex justify-center h-[70px] w-[70px] items-center  rounded-2xl hover:bg-btn-secondry">
            {React.createElement(icon, { size: 30, className: "text-white" })}
          </div>
        </div>
        <h4 className="text-dark mb-3 text-xl font-semibold">{title}</h4>
        <p className="text-body-color">{disc}</p>
      </div>
    </div>
  );
};
export default Feature;
