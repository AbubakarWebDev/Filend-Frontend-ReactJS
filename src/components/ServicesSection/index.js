import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BiFileBlank, BiMessage, BiVideo, BiShareAlt } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import ServiceItem from "../ServiceItem";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const data = [
    {
      id: 0,
      title: "Device-to-Device Sharing",
      disc: "When you close the browser tab your files are no longer accessible. FilEnd uses WebRTC to find the shortest path, meaning sometimes your data doesn't even have to leave the building!",
      icon: BiFileBlank,
    },
    {
      id: 1,
      title: "Unlimited file sizes",
      disc: "Because we don't store the data, there's no need for file size limits. Just share files of any size or whatever amount. As long as you keep an eye on your own data usage.",
      icon: BiMessage,
    },
    {
      id: 2,
      title: "Exclusive access",
      disc: "Only you and the receiver can access your files. Your data is encrypted end-to-end, and can only be read by your receiver (and you of course). Means exclusive access.",
      icon: MdOutlineSlowMotionVideo,
    },
  ];

  return (
    <div className="pb-5 lg:pb-[90px] bg-gray-secondry mt-7">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                What We Offer?
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <div className="w-full px-4  text-center">
              <div className="mb-4 rounded-[20px] bg-white grid justify-center p-10 btn  w-fit h-fit hover:shadow-[0_4px_0px_rgba(8,_112,_184,_0.7)] text-black backdrop-blur-sm bg-white/30 ease-out hover:translate-y-1 transition-all  md:px-7 xl:px-10">
                <div className="flex justify-center">
                  <div className="bg-[#E18A07]  mb-8 flex justify-center h-[70px] w-[70px] items-center  rounded-2xl hover:bg-btn-secondry">
                    <BiShareAlt size={30} color="white" />
                  </div>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  File Sharing
                </h4>
                <p className="text-body-color">
                  Effortlessly share files of any size with others through
                  secure and reliable links.
                </p>
              </div>
            </div>
          </div>
          <Link to="/video-meeting">
            <div className="col-span-1">
              <div className="w-full px-4  text-center">
                <div className="mb-4 rounded-[20px] bg-white grid justify-center p-10 btn  w-fit h-fit hover:shadow-[0_4px_0px_rgba(8,_112,_184,_0.7)] text-black backdrop-blur-sm bg-white/30 ease-out hover:translate-y-1 transition-all  md:px-7 xl:px-10">
                  <div className="flex justify-center">
                    <div className="bg-[#E18A07]  mb-8 flex justify-center h-[70px] w-[70px] items-center  rounded-2xl hover:bg-btn-secondry">
                      <BiVideo size={50} color="white" />
                    </div>
                  </div>
                  <h4 className="text-dark mb-3 text-xl font-semibold">
                    Video Meeting
                  </h4>
                  <p className="text-body-color">
                    Conduct video conferences with seamless audio and video
                    quality for effective collaboration.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/chat">
            <div className="col-span-1">
              <div className="w-full px-4  text-center">
                <div className="mb-4 rounded-[20px] bg-white grid justify-center p-10 btn  w-fit h-fit hover:shadow-[0_4px_0px_rgba(8,_112,_184,_0.7)] text-black backdrop-blur-sm bg-white/30 ease-out hover:translate-y-1 transition-all  md:px-7 xl:px-10">
                  <div className="flex justify-center">
                    <div className="bg-[#E18A07]  mb-8 flex justify-center h-[70px] w-[70px] items-center  rounded-2xl hover:bg-btn-secondry">
                      <BsFillChatDotsFill size={30} color="white" />
                    </div>
                  </div>
                  <h4 className="text-dark mb-3 text-xl font-semibold">Chat</h4>
                  <p className="text-body-color">
                    Stay connected and chat with your team members in a secure
                    and real-time environment.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ServicesSection;
