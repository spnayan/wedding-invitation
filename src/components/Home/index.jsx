import { Parallax } from "react-parallax";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";

import weddingImage from '../../assets/images/wedding_image_2.jpg'
import weddingImage1 from '../../assets/images/wedding_image_4.jpg'
// import weddingImage2 from '../../assets/images/wedding_image_2.jpg'
import weddingImage3 from '../../assets/images/wedding_image_3.jpg'
import weddingImage5 from '../../assets/images/wedding_image_5.jpg'




const pagesArray=[
    {
        id:1,
        section:<Section1 />,
        image:weddingImage,
    },
 
    {
        id:2,
        section:<Section2 />,
        image:weddingImage1,
    },
    // {
    //     id:4,
    //     section:<Section4 />,
    //     image:weddingImage3,
    // },
    {
        id:3,
        section:<Section3 />,
        image:weddingImage5,
    }
]

const Home = () => {
    return pagesArray.map((({id,section,image})=>(
        <Parallax bgImageStyle={{objectFit:'cover'}} key={id} strength={200} bgImage={image}>
        <div>{section}</div>
      </Parallax>
    ))
      
    )
  }
  
  export default Home


