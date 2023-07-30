import { NavLink } from "react-router-dom";

const Intro = ({ receiver }) => {
  return (
    <div className="max-w-lg px-5 lg:mb-0">
      <div className="max-w-xl py-5">
        <h2 className="max-w-lg mb-6 text-3xl font-bold text-gray sm:text-4xl sm:leading-none ">
          {receiver
            ? "Receiving Your File With Our Filend Application"
            : "Share files directly from your device to anywhere"}
        </h2>

        <p className="text-base text-gray-font md:text-lg mb-6">
          Send files of any size directly from your device without ever storing
          anything online.
        </p>

        <div className="flex">
          <NavLink className="p-3 text-base font-bold rounded-md bg-[#E18A07] hover:bg-btn-secondry text-white">
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Intro;
