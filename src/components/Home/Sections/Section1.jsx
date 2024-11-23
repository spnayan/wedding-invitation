import { AnimatedSection } from "./Section2";

const Section1 = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-5  p-5 ">
        <AnimatedSection>

        <h6 className="font-cookie text-[40px] text-white font-outline-2">
          With Great Joy,
        </h6>
        </AnimatedSection>
        <AnimatedSection initial={{opacity: 0, y: 50}} animateOption={{opacity: 1, y: 0}}>

        <h1 className="font-allura text-[50px] md:text-[80px] text-white font-outline-2 ">
          William & Bimala
        </h1>
        </AnimatedSection>
        <div className="flex flex-col items-center ">
    <AnimatedSection initial={{opacity: 0, x: -50}}>

          <h1 className="font-cookie text-[30px] md:text-[40px] text-white font-outline-2 text-center text-wrap">
            invite you to share the celebration of love and commitment
          </h1>
          </AnimatedSection>
        <AnimatedSection initial={{opacity: 0,x:50}} animateOption={{opacity: 1,x:0}}>

          <>
          <hr className="h-[1px] w-full" />
          <h1 className="font-allura text-[40px] md:text-[40px] text-white font-outline-2">
            {" "}
            Save the Date
          </h1>

          <hr className="h-[1px] w-full" />
          </>
          </AnimatedSection>
         
        </div>
        <div>
          <h6 className="font-cookie text-[40px] text-white font-outline-2 animate-fadeInOut">
            We are getting married!
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Section1;
