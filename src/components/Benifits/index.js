import waveImg from "../../assets/images/wave-large-reversed.png";

const Benifits = () => {
  return (
    <section 
      style={{ background: "linear-gradient(to right, #a517ba, #5f1782)" }} 
      className="min-h-[400px]"
    >
      <img src={waveImg} alt="Image" className="w-full" />
      <div className="text-center flex flex-col justify-center items-center min-h-[250px] w-full">
        <h2 className="text-white mb-2 text-[35px] font-bold md:mb-4 md:text-[40px]">
          Free! Secure! Unlimited! Open Source.
        </h2>
        <p className="text-xl text-white font-normal">
          Send or Receive files without worrying about limits or charges.
        </p>
      </div>
    </section>
  );
};
export default Benifits;
