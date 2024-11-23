import { useState,useEffect } from 'react';
import Confetti from "react-confetti";
import './assets/css/index.css';
import Home from './components/Home'
import ganeshImage from './assets/images/ganesh.png'
import happinessImage from './assets/images/happiness2.png'


function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Automatically stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative'>
       {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}
      <div className='absolute z-20 w-full'>
        <div className='flex items-center justify-between gapx-3 px-3 py-2'>
          <div>

          <img src={ganeshImage}  alt="ganesh" className='w-[100px] md:w-[170px] h-auto'/>
          </div>
          <div>

          <img src={happinessImage}  alt="happiness" className='w-[80px] md:w-[130px] h-auto'/>
          </div>


        </div>
      </div>
      <Home />
    </div>
  )
}

export default App
