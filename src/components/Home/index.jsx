import { Parallax } from "react-parallax";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import section1Image from '../../assets/images/section1.jpg';
import weddingImage from '../../assets/images/wedding_image.jpg'

const pagesArray=[
    {
        id:1,
        section:<Section1 />,
        image:weddingImage,
    },
    {
        id:2,
        section:<Section2 />,
        image:section1Image,
    },
    {
        id:3,
        section:<Section3 />,
        image:section1Image,
    }
]

const Home = () => {
    return pagesArray.map((({id,section,image})=>(
        <Parallax bgImageStyle={{width:"100%",height:'fit-content'}} key={id} strength={200} bgImage={image}>
        <div>{section}</div>
      </Parallax>
    ))
      
    )
  }
  
  export default Home


