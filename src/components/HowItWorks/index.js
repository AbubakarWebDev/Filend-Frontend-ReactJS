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
            <div className="border-dashed border p-5">
              <p className="text-black font-normal text-base">
                Our file sharing system simplifies the process with ease. Select
                your desired file, and our system will generate a secure and
                unique link for it. Share this link effortlessly on various
                platforms, allowing recipients to access and download the file
                with just a click. Enjoy fast, reliable downloads, and rest
                assured that your data is safe with top-notch encryption. There is
                no need to worry about link expirations, as the shared links
                remain accessible indefinitely. Experience seamless collaboration
                and efficient file sharing with our user-friendly platform today.
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
export default HowItWorks;
