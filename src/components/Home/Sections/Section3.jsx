import { AnimatedSection } from "./Section2"

const Section3 = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-5 backdrop-blur-[4px] p-5 text-center h-[80%] md:h-auto">
        <AnimatedSection initial={{opacity: 0, y: 50}} animateOption={{opacity: 1, y: 0}}>
        <> 
        <h6 className="font-cookie text-[30px] md:text-[40px] text-white font-outline-2 ">
          Together Forever with the love and blessings
        </h6>
        <h6 className="font-cookie text-[30px] md:text-[40px] text-white font-outline-2 ">
          of our beloved family
        </h6>
        </>
        </AnimatedSection>
       
       <div className="flex flex-col md:flex-row justify-between w-full ">
        <AnimatedSection initial={{opacity: 0, x: -50}}>

       <div className="flex flex-col">
        <div className="flex flex-col space-y-3">
       
          <div>
          <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2">
            Yat Fong Wong
          </h6>
          </div>
          <div>
          <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2">
            Kim Ying Lim
          </h6>
          </div>          
        </div>
        </div>
        </AnimatedSection>
        <hr />
        <AnimatedSection initial={{opacity: 0, x: 50}}>

        <div className="flex flex-col space-y-3">
        {/* <div>
          <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2">
            Late. Trilochan Khatiwada
          </h6>
          </div>
        <div>
          <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2">
            Late. Kashi Maya Khatiwada
          </h6>
          </div> */}
          <div>
          <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2">
            Shanti Ram Khatiwada
          </h6>
          </div>
          <div>
          <h6 className="font-cookie text-[20px] md:text-[30px] text-white font-outline-2">
            Sita Poudyal Khatiwada
          </h6>
          </div>
         
          
        </div>
        </AnimatedSection>
       
       </div>
      </div>
    </div>
  )
}

export default Section3