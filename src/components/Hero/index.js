import { useParams } from "react-router-dom";

import Intro from "../Intro";
import SenderFileContainer from "../SenderFileContainer";
import ReceiverFileContainer from "../ReceiverFileContainer";

const Hero = () => {
  const { roomID } = useParams();

  return (
    <div className="px-4 py-16 w-full md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col justify-between items-center lg:flex-row">
        <Intro receiver={roomID ? true : false} />
        {roomID ? <ReceiverFileContainer roomID={roomID} /> : <SenderFileContainer />}
      </div>
    </div>
  );
};
export default Hero;
