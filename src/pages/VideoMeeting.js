import { useState } from "react";

import { BiVideoPlus } from "react-icons/bi";
import { BsFillKeyboardFill } from "react-icons/bs";

import Modal from "../components/Modal";

import HomePageGraphic from "../assets/images/animation.gif";
import SiteLayout from "../layouts/SiteLayout";

const VideoMeeting = () => {
  const [roomId, setRoomId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          roomId={roomId}
        />
      )}

      <section className="text-gray-600 body-font">
        <div
          style={{ minHeight: "calc(100vh - 57px)" }}
          className="container mx-auto flex md:flex-row flex-col items-center"
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 mt-5 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              High-quality video conferences.
              <br />
              Now accessible to all.
            </h1>

            <p className="mb-8 leading-relaxed">Reimagining Video Conferencing: Introducing Our Secure Business Meetings App, Now Free and Available for All.</p>

            <form
              onSubmit={handleSubmit}
              className="flex w-full md:justify-start justify-center items-center"
            >
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <input
                  required
                  type="text"
                  placeholder="Enter Room Code"
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full rounded border border-gray-300 text-base outline-none text-gray-700 py-2 px-3 pl-16 leading-8 transition-colors duration-200 ease-in-out"
                />

                <span className="absolute left-5 top-1/2 transform -translate-y-1/2">
                  <BsFillKeyboardFill size={30} />
                </span>
              </div>

              <button
                type="submit"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                <BiVideoPlus size={30} className="mr-1" />
                Join Meeting
              </button>
            </form>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={HomePageGraphic}
              alt="Home-Page-Graphic"
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteLayout(VideoMeeting);
