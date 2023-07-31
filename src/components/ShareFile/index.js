import { useRef } from "react";
import QRCode from "react-qr-code";
import { HiOutlineClipboard, HiBadgeCheck } from "react-icons/hi";
import { RiCloseCircleFill } from "react-icons/ri";
import {
  BsTwitter,
  BsLinkedin,
  BsWhatsapp,
  BsFacebook,
  BsEnvelopeFill,
  BsMessenger,
} from "react-icons/bs";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
} from "react-share";
import styles from "./style.module.scss";
const { linkInput } = styles;

const ShareFile = ({
  file,
  handleCopyToClipboard,
  showToast,
  link,
  stopSharing,
}) => {
  const inputRef = useRef(null);

  return (
    <div className="relative p-5 flex flex-col w-full h-full rounded-md bg-white shadow-md">
      <div className="absolute -right-4 -top-4 bg-white w-9 h-9 rounded-full border border-gray-700 p-0 m-0">
        <RiCloseCircleFill
          className="cursor-pointer w-full h-full"
          color="black"
          onClick={stopSharing}
        />
      </div>

      <div className="mb-2">
        <h1 className="text-base font-medium break-words text-black">
          {file.name}
        </h1>
      </div>

      <div className="flex justify-between mb-4">
        <input
          readOnly
          type="text"
          value={link}
          ref={inputRef}
          className={`${linkInput} w-11/12 border-b-4 border-btn-primary focus:outline-0 text-black`}
        />

        <HiOutlineClipboard
          size={30}
          className="cursor-pointer text-btn-primary"
          onClick={() => handleCopyToClipboard(inputRef.current)}
        />
      </div>

      <div className="flex lg:flex-row flex-col lg:justify-around justify-center items-center">
        <QRCode className="lg:w-2/5 w-full h-auto" value={link} />

        <div className="lg:w-3/5 w-full lg:mt-0 mt-2 flex items-center flex-col">
          <div className="flex">
            <WhatsappShareButton url={link} title={"Filend"} separator=":: ">
              <BsWhatsapp
                className="cursor-pointer text-[#28D146] m-4"
                size={40}
              />
            </WhatsappShareButton>

            <FacebookShareButton url={link} quote="Filend">
              <BsFacebook
                className="cursor-pointer m-4 text-[#3b5998]"
                size={40}
              />
            </FacebookShareButton>

            <FacebookMessengerShareButton url={link} appId="521270401588372">
              <BsMessenger
                className="cursor-pointer m-4 text-[#0099FF]"
                size={40}
              />
            </FacebookMessengerShareButton>
          </div>

          <div className="flex">
            <TwitterShareButton url={link} title={"Filend"}>
              <BsTwitter
                className="cursor-pointer m-4 text-[#00acee]"
                size={40}
              />
            </TwitterShareButton>
            <EmailShareButton url={link} title={"Filend"}>
              <BsEnvelopeFill
                className="cursor-pointer m-4 text-lime-600"
                size={40}
              />
            </EmailShareButton>

            <LinkedinShareButton url={link}>
              <BsLinkedin
                className="cursor-pointer m-4  text-[#0072b1]"
                size={40}
              />
            </LinkedinShareButton>
          </div>
        </div>
      </div>

      {showToast && (
        <div
          role="alert"
          className="mt-4 inline-flex w-full text-white items-center rounded-lg bg-green-500 p-3 text-base"
        >
          <span className="mr-2">
            <HiBadgeCheck size={20} />
          </span>
          URL Copied - check it out!
        </div>
      )}
    </div>
  );
};
export default ShareFile;
