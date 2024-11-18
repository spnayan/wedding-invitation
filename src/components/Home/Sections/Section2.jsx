/* eslint-disable react/no-unescaped-entities */
// import weddingImage3 from '../../../assets/images/wedding_image_3.jpg';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// eslint-disable-next-line react/prop-types
export const AnimatedSection = ({ children,viewport={once:false,amount:1}, initial={ opacity: 0, x: 50 },animateOption={ opacity: 1, x: 0 } }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2,    // Trigger when 20% of the section is visible
  });
  return (
    <motion.div
      ref={ref}
      initial={initial} 
      animate={inView ? animateOption : initial}
      // whileInView={{opacity:1,y:0, transition:{duration:3}}}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
};

const Section2 = () => {
  return (
    
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-5 px-5 h-full justify-center text-center backdrop-blur-[4px]">
        <AnimatedSection>
        <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2 uppercase">
          On saturday, 25 January 2025
        </h6>
    </AnimatedSection>
    <AnimatedSection initial={{opacity: 0, x: -50}}>

        <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2 uppercase">
          5:30 pm onwards
        </h6>
        </AnimatedSection>

        <AnimatedSection initial={{opacity: 0, y: 50}} animateOption={{opacity: 1, y: 0}}>

        <h1 className="font-allura text-[40px] md:text-[50px] text-white font-outline-2">
          L 'Aqua Gold Room,Dockside,{" "}
        </h1>
        </AnimatedSection>
    <AnimatedSection initial={{opacity: 0, x: 50}}>

        <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2 uppercase">
          Cockle Bay Wharf, 2 Wheat Rd, Sydney, NSW
        </h6>
        </AnimatedSection>
        <AnimatedSection initial={{opacity: 0, x: -50}}>

        <div>
          <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2">
            RSVP by 6th December, 2024
          </h6>
          <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2">
            William 0452 453 363 | Bimala 0420 688 234
          </h6>
        </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Section2;
