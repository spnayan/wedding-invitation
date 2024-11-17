const Section1 = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-5 backdrop-blur-[4px] p-5 ">
        <h6 className="font-cookie text-[40px] text-white font-outline-2 animate-fadeInOut">
          With Great Joy,
        </h6>

        <h1 className="font-allura text-[50px] md:text-[70px] text-[#FFD700] font-outline-2 animate-fadeInOut">
          William & Bimala
        </h1>
        <div className="flex flex-col items-center">
          <h1 className="font-cookie text-[25px] text-white font-outline-2 uppercase text-center text-wrap">
            invite you to share with us our celebration of love and commitment
          </h1>
          <hr className="h-[1px] w-full" />
          <h1 className="font-allura text-[40px] md:text-[40px] text-white font-outline-2">
            {" "}
            Save the Date
          </h1>

          <hr className="h-[1px] w-full" />
        </div>
        <div>
          <h6 className="font-cookie text-[40px] text-white font-outline-2">
            We are getting married
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Section1;
