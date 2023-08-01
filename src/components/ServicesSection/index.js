import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BiFileBlank, BiMessage, BiVideo, BiShareAlt } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import ServiceItem from "../ServiceItem";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      Icon: BiShareAlt,
      title: "File Sharing",
      description:
        "Enable secure and reliable file sharing with seamless links for effortless collaboration.",
    },
    {
      id: 2,
      Icon: BiVideo,
      title: "Video Meeting",
      description:
        "Conduct video conferences with seamless audio and video quality for effective collaboration.",
    },
    {
      id: 3,
      title: "Chat",
      Icon: BsFillChatDotsFill,
      description:
        "Stay connected and chat with your team members in a secure and real-time environment.",
    },
  ];

  return (
    <section className="pb-5 px-6 lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                What We Offers
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {services.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
