import { useParams } from "react-router-dom";

import Intro from "../Intro";
import SenderFileContainer from "../SenderFileContainer";
import ReceiverFileContainer from "../ReceiverFileContainer";

import waveImg from "../../assets/images/wave-large.png";

const Hero = () => {
  const { roomID } = useParams();

  return (
    <section style={{ background: "linear-gradient(to right, #a517ba, #5f1782)" }} className="body-font mb-20">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Intro receiver={roomID ? true : false} />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {roomID ? <ReceiverFileContainer roomID={roomID} /> : <SenderFileContainer />}
        </div>
      </div>
      <img src={waveImg} alt="Image" className="w-full"></img>
    </section>
  );
};
export default Hero;
