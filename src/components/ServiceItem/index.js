const ServiceItem = ({ Icon, title, description }) => {
  return (
    <div className="h-fit w-fit px-4 md:w-1/2 lg:w-1/3 text-center">
      <div className="mb-4 rounded-[20px] grid justify-center p-10 btn w-fit h-fit hover:shadow-[0_4px_0px_rgba(8,_112,_184,_0.7)] bg-gray-300 text-black backdrop-blur-sm ease-out hover:translate-y-1 transition-all  md:px-7 xl:px-10">
        <div className="flex justify-center">
          <div className="bg-[#E18A07]  mb-8 flex justify-center h-[70px] w-[70px] items-center  rounded-2xl hover:bg-btn-secondry">
            <Icon size={50} color="white" />
          </div>
        </div>

        <h4 className="text-dark mb-3 text-xl font-semibold">{title}</h4>
        
        <p className="text-body-color">{description}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
