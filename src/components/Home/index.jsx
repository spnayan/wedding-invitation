import { Parallax } from "react-parallax";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import weddingImage from '../../assets/images/wedding_image.jpg'
import weddingImage1 from '../../assets/images/wedding_image_1.jpg'
import weddingImage2 from '../../assets/images/wedding_image_2.jpg'


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
    {
        id:3,
        section:<Section3 />,
        image:weddingImage2,
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


