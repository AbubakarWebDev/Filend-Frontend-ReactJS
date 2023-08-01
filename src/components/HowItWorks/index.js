const HowItWorks = () => {
  return (
    <h1 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] text-center">
      How It Works
      <div className="grid grid-cols-3 min-h-fit">
        <div className="xs:hidden md:visible md:col-span-1">
          <img
            src="/Ikbal 5.png"
            className="animated-image"
            style={{ animation: "moveUpDown 4s infinite" }}
            alt="Moving Image"
          />
          <style>
            {`
              @keyframes moveUpDown {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-50px); /* Adjust the distance the image moves up */
                }
              }
              `}
          </style>
        </div>
        <div className="col-span-3 md:col-span-1 h-fit">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20 mt-5">
            <div>
              <img src="/arrow.svg" />
            </div>
            <div className="border-dashed border p-5 bg-gray-300">
              <p className="text-black font-normal text-base">
                Our file sharing system simplifies the process with ease. Select
                your desired file, and our system will generate a secure and
                unique link for it. Share this link effortlessly on various
                platforms, allowing recipients to access and download the file
                with just a click. Enjoy fast, reliable downloads, and rest
                assured that your data is safe with top-notch encryption. There
                is no need to worry about link expirations, as the shared links
                remain accessible indefinitely. Experience seamless
                collaboration and efficient file sharing with our user-friendly
                platform today.
              </p>
              <ul className="text-base font-medium mt-4">
                <li className="my-2">
                  <span className="font-bold">STEP 1 -</span>
                  Choose file you want to share.
                </li>
                <li className="my-2">
                  <span className="font-bold">STEP 2 -</span>
                  Upload it on website.
                </li>
                <li className="my-2">
                  <span className="font-bold">STEP 3 -</span>
                  Copy the generated link.
                </li>
                <li className="my-2">
                  <span className="font-bold">STEP 4 -</span>
                  Share this link with anyone.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="xs:hidden md:visible md:col-span-1">
          <div className="xs:hidden md:visible md:col-span-1">
            <img
              src="/Ikbal 6.png"
              className="animated-image"
              style={{ animation: "moveUpDown 4s infinite" }}
              alt="Moving Image"
            />
            <style>
              {`
              @keyframes moveUpDown {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-50px); /* Adjust the distance the image moves up */
                }
              }
              `}
            </style>
          </div>
        </div>
      </div>
    </h1>
  );
};

// import working from "../../assets/images/2.png";

// const HowItWorks = () => {
//   return (
//     <section className="body-font mb-10">
//       <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
//         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//           {/* <Intro receiver={roomID ? true : false} /> */}
//           <h2 className="max-w-lg mb-6 text-3xl font-bold  sm:text-4xl sm:leading-none ">
//             Receiving Your File With Our Filend Application
//           </h2>

//           <p className="text-base md:text-lg mb-6">
//             Our file sharing system simplifies the process with ease. Select
//             your desired file, and our system will generate a secure and unique
//             link for it. Share this link effortlessly on various platforms,
//             allowing recipients to access and download the file with just a
//             click. Enjoy fast, reliable downloads, and rest assured that your
//             data is safe with top-notch encryption. There is no need to worry
//             about link expirations, as the shared links remain accessible
//             indefinitely. Experience seamless collaboration and efficient file
//             sharing with our user-friendly platform.
//           </p>
//         </div>
//         <div className="lg:max-w-lg lg:w-full h-full md:w-1/2 w-5/6">
//           <img src={working} alt="Image" className="w-full h-full" />
//         </div>
//       </div>
//     </section>
//   );
// };

export default HowItWorks;
