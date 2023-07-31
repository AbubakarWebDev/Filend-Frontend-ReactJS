import { HashLink as Link } from "react-router-hash-link";

const Intro = ({ receiver }) => {
  return (
    <>
      <h2 className="max-w-lg mb-6 text-3xl font-bold text-white sm:text-4xl sm:leading-none ">
        {receiver
          ? "Receiving Your File With Our Filend Application"
          : "Share files directly from your device to anywhere"}
      </h2>

      <p className="text-base text-white md:text-lg mb-6">
        Send files of any size directly from your device without ever storing
        anything online.
      </p>

      <div className="flex">
        <Link
          className="p-3 text-base font-bold rounded-md bg-[#E18A07] hover:bg-btn-secondry text-white"
          to="#features"
          smooth
        >
          Read More
        </Link>
      </div>
    </>
  );
};
export default Intro;
