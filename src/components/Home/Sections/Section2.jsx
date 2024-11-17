// import weddingImage3 from '../../../assets/images/wedding_image_3.jpg';

const Section2 = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      {/* <div className='basis-1/2'>
        <img src={weddingImage3} alt="wedding_image" height="100%" width="auto" />
      </div> */}
      <div className="flex flex-col items-center space-y-5 px-5 h-full justify-center text-center backdrop-blur-[4px]">
        <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2 uppercase">
          On saturday, 25 January 2025
        </h6>
        <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2 uppercase">
          5:30 pm onwards
        </h6>

        <h1 className="font-allura text-[40px] md:text-[50px] text-white font-outline-2">
          L 'Aqua Gold Room,Dockside,{" "}
        </h1>
        <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2 uppercase">
          Cockle Bay Wharf, 2 Wheat Rd, Sydney, NSW
        </h6>

        <div>
          <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2">
            RSVP by 6th December, 2024
          </h6>
          <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2">
            William 0452 453 363 | Bimala 0420 688 234
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Section2;
